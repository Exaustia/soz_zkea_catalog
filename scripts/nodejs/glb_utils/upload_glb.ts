// get all type of data
import { config } from "dotenv";
import fs from "fs";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { client, getAWSImgs, getAWSModels } from "../utils/utils";

config();


export const uploadImg = async () => {
  try {
    const currentImgs = await getAWSImgs();

    const bucketName = "cdn.exaustia.com";
    const folderName = "soz/catalog/assets/models";
    const modelsFolder = "../models";

    const files = fs.readdirSync(modelsFolder);
    const filesToUpload = files.filter((file) => file.endsWith(".glb"));

    for (const file of filesToUpload) {
      if (currentImgs.includes(file)) {
        continue;
      }
      console.log(`Uploading ${file}...`);
      const filePath = `${modelsFolder}/${file}`;
      const fileStream = fs.createReadStream(filePath);
      await client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: `${folderName}/${file}`,
          Body: fileStream,
        })
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const uploadGLB = async () => {
  try {
    const currentModels = await getAWSModels();

    const bucketName = "cdn.exaustia.com";
    const folderName = "soz/catalog/assets/models";
    const modelsFolder = "../models";

    const files = fs.readdirSync(modelsFolder);
    const filesToUpload = files.filter((file) => file.endsWith(".glb"));

    for (const file of filesToUpload) {
      if (currentModels.includes(file)) {
        continue;
      }
      console.log(`Uploading ${file}...`);
      const filePath = `${modelsFolder}/${file}`;
      const fileStream = fs.createReadStream(filePath);
      await client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: `${folderName}/${file}`,
          Body: fileStream,
        })
      );
    }
  } catch (err) {
    console.error(err);
  }
};


