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

export const uploadGLB = async () => {
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
