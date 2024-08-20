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

export type Model = {
  type: string;
  name: string;
  model: string;
  price: number;
  collision: boolean;
};

export type Data = {
  [key: string]: Model;
};

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!!,
  },
});

export async function getAWSModels() {
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
  return currentGlb;
}

export async function getAWSImgs() {
  let nextToken = "firstloop";
  let firstLoop = true;
  const currentGlb: string[] = [];

  while (nextToken) {
    const command = new ListObjectsV2Command({
      Bucket: "cdn.exaustia.com",
      Prefix: "soz/catalog/assets/images",
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
  return currentGlb;
}

const makeFileToObject = () => {
  const csvFile = fs.readFileSync("./data.csv", "utf-8");
  const lines = csvFile.split("\n");
  const headers = lines[0].split(",");
  const data = lines.slice(1);
  const dataObj: Data = {};

  for (const line of data) {
    const values = line.split(",");

    console.log(values[4].length);
    dataObj[`${values[2]}`] = {
      type: values[0],
      name: values[1],
      model: values[2],
      price: parseInt(values[3]),
      collision: values[4].length === 5 ? true : false,
    };
  }

  const newFile = JSON.stringify(dataObj, null, 2);
  fs.writeFileSync("./data.json", newFile);
};


const getAllFileButNotSoz = () => {
  const result = Object.values(data).map((e) => {
    if (!e.model.startsWith("soz_") || !e.model.startsWith("soz")) {
      return e.model;
    }
  });

  fs.writeFileSync("./result.json", JSON.stringify(result));
};
getAllFileButNotSoz();
