import fs from "fs";
import https from "https";

// import missingModels from "./missingModels.json";
const missingModels = require("../json/missingModels.json");

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

for (const model of missingModels) {
  try {
    downloadFile(
      "https://assets-gta.plebmasters.de/objects/g/models/" + model + ".glb",
      "../../models/" + model + ".glb"
    );
  } catch (err) {
    console.error(err);
    continue;
  }
}
