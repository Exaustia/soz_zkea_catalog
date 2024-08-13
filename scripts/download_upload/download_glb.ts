// get all type of data
import { config } from "dotenv";
import data from "./data";
import fs from "fs";
import https from "https";
import {
  ListBucketsCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

config();

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!!,
  },
});

async function lookGetModel() {
  let nextToken = "firstloop";
  let firstLoop = true;
  const currentGlb: string[] = [];

  while (nextToken) {
    const command = new ListObjectsV2Command({
      Bucket: "cdn.exaustia.com",
      Prefix: "soz/catalog/assets/models",
      ContinuationToken: firstLoop ? undefined : nextToken,
    });

    const { Contents, NextContinuationToken } = await client.send(command);

    if (Contents) {
      const objectNames = Contents.map((object) => object.Key);

      const c = objectNames.map((name) => name?.split("/").pop());
      const a = c.filter((name) => name !== undefined);
      currentGlb.push(...a);
    }
    if (!NextContinuationToken) break;
    nextToken = NextContinuationToken;
    firstLoop = false;
  }
  console.log(currentGlb.length);
  return currentGlb;
}
export const getAllModels = async () => {
  const bucketName = "cdn.exaustia.com";
  const folderName = "soz/catalog/assets/models";
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: folderName,
  });

  try {
    const { Contents, ContinuationToken } = await client.send(command);

    if (Contents) {
      const objectNames = Contents.map((object) => object.Key);

      const currentGlb = objectNames.map((name) => name?.split("/").pop());
      return currentGlb.filter((name) => name !== undefined);
    }
    return [];
  } catch (err) {
    return [];
  }
};

const downloadFile = (url: string, outputPath: string) => {
  const file = fs.createWriteStream(outputPath);
  https
    .get(url, (response) => {
      if (response.statusCode !== 200) {
        console.error(`Failed to get '${url}' (${response.statusCode})`);
        return;
      }
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Download completed.");
      });
    })
    .on("error", (err) => {
      fs.unlink(outputPath, () => {}); // Delete the file async if error occurs
      console.error(`Error downloading the file: ${err.message}`);
    });
};

type DataType = {
  [key: string]: {
    type: string;
    name: string;
    model: string;
    price: number;
    collision: boolean;
  };
};

async function download() {
  const dataKeys = data as DataType;

  const allModels = Object.keys(data).map((key) => dataKeys[key].model);

  const currentModel = await lookGetModel();

  const missingModels = allModels.filter(
    (model) => !currentModel.includes(model + ".glb")
  );

  fs.writeFileSync("../missingModels.txt", missingModels.join("\n"));

  for (const model of missingModels) {
    downloadFile(
      "https://assets-gta.plebmasters.de/objects/g/models/" + model + ".glb",
      "../models/" + model + ".glb"
    );
  }
}

download();
