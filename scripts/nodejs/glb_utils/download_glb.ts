import fs from "fs";
import https from "https";

// import missingModels from "./missingModels.json";
const missingModels = require("../json/missingModels.json");

const downloadFile = async (
  url: string,
  outputPath: string,
  customSoz: boolean
) => {
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

const downloadGLB = async () => {
  for (let model of missingModels) {
    let custom = false;
    const modelName = model;
    if (model.startsWith("soz_assets_")) {
      model = model.replace("soz_assets_", "");
      custom = true;
    }
    try {
      await downloadFile(
        "https://assets-gta.plebmasters.de/objects/g/models/" + model + ".glb",
        "../models/" + modelName + ".glb",
        custom
      );
    } catch (err) {
      console.error(err);
      continue;
    }
  }

  console.log("All missing models have been downloaded.");
  return true;
};

export { downloadGLB };
