# Zkea Website with NextJS

This is a project for the community RP (SOZ) of Zerator. 

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm run dev` or `yarn dev`.
4. Open your browser and navigate to `http://localhost:3000` to see the project in action.


## Deployment

To deploy the NextJS project, follow these steps:

1. Build the project by running `npm run build` or `yarn build`.
2. Deploy the generated `out` directory to your preferred hosting platform.


# Zkea Scripts

## Overview

This project contains various utility functions used in the Zkea application.

## Configure your bucket

First, you need to configure you bucket S3 (or change if another) in the file `nodejs/utils/utils.ts`
Make a .env with your own credential `AWS_ACCESS_KEY_ID` & `AWS_SECRET_ACCESS_KEY`

```typescript
const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!!,
  },
});
```

## Files utils

### `getAllCategories.ts`

Retrieve all categories from the props file


### `tags.ts`

Fetch all tags from the props


## Functions utils

### `config()`

This function initializes the configuration settings for the application. It is called at the beginning of the script to set up necessary configurations.

### `getAWSModels()`

This asynchronous function retrieves models from AWS S3. It uses the AWS SDK to interact with the S3 service and fetch the required data.

### `getAWSImgs()`

This asynchronous function retrieves images from AWS S3. It uses the AWS SDK to interact with the S3 service and fetch the required data.

### `makeFileToObject`

The `makeFileToObject` function reads a file and converts its contents into a JavaScript object. This is useful for processing configuration files, data files, or any other structured text files.

#### Usage

```typescript
import { makeFileToObject } from './utils';

const filePath = 'path/to/your/file.txt';
const fileObject = makeFileToObject(filePath);
console.log(fileObject);
```

### `getAllMissingsFiles`

The `getAllMissingsFiles` function checks for missing files in a specified directory and returns a list of those files. This is useful for ensuring that all required files are present before performing operations that depend on them.

#### Usage

```typescript
import { getAllMissingsFiles } from './utils';

const directoryPath = 'path/to/your/directory';
const missingFiles = getAllMissingsFiles(directoryPath);
console.log(missingFiles);
```


## How is work

### Step 1

- Get the list of Props. 
- Run the function `getAllMissingsFiles` to get all props missing in you CDN.(don't forget to setup one)

### Step 2 (GLB file)

- In folder glb_utils, run the download_glb.ts scripts with `ts-node download_glb.ts` command. You can retrieve all .glb in models folder
- Upload all .glb in your bucket S3 with the command `ts-node upload_glb.ts`

### Step 3 (Generate the image from the glb)

- In folder python. run the main.py. 

### Step 4 (Images)

- If your images are not in .webp. You can use pngToWebp.ts to convert it
- Upload all images in the bucket S3 with the command `ts-node upload_img.ts`




## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

