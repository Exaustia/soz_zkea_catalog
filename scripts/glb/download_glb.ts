// get all type of data

import data from "./data";
import fs from "fs";
import https from "https";

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

const dataKeys = data as DataType;

const allModels = Object.keys(data).map((key) => dataKeys[key].model);

const currentModel = fs.readdirSync("./models");

const missingModels = allModels.filter(
  (model) => !currentModel.includes(model + ".glb")
);

fs.writeFileSync("./missingModels.txt", missingModels.join("\n"));

for (const model of missingModels) {
  downloadFile(
    "https://assets-gta.plebmasters.de/objects/g/models/" + model + ".glb",
    "./models/" + model + ".glb"
  );
}

// return only type of data from data object, and remove duplicata

// Exemple d'utilisation
