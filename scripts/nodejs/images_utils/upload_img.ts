// get all type of data
import { config } from "dotenv";
import fs from "fs";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getAWSImgs } from "../utils/utils";

config();

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!!,
  },
});

export const uploadImg = async () => {
  try {
    const currentImgs = await getAWSImgs();

    const bucketName = "cdn.exaustia.com";
    const folderName = "soz/catalog/assets/images";
    const modelsFolder = "../../images";

    const files = fs.readdirSync(modelsFolder);
    const filesToUpload = files.filter((file) => file.endsWith(".webp"));

    for (const file of filesToUpload) {
      if (currentImgs.includes(file)) {
        console.log(`File ${file} already exists in the bucket`);
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

uploadImg();