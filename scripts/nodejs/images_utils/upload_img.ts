// get all type of data
import { config } from "dotenv";
import fs from "fs";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { client, getAWSImgs } from "../utils/utils";

config();

export const uploadImg = async () => {
  try {
    const currentImgs = await getAWSImgs();

    const bucketName = "cdn.exaustia.com";
    const folderName = "soz/catalog/assets/images";
    const webpFolder = "../webp";

    const files = fs.readdirSync(webpFolder);
    const filesToUpload = files.filter((file) => file.endsWith(".webp"));

    for (const file of filesToUpload) {
      if (currentImgs.includes(file)) {
        console.log(`Skipping ${file}...`);
        continue;
      }
      console.log(`Uploading ${file}...`);
      const filePath = `${webpFolder}/${file}`;
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


