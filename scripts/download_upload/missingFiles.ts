import { getAWSImgs, getAWSModels } from "./utils";
import data from "./data";
import fs from "fs";

const getAllMissingsFiles = async () => {
  const models = await getAWSModels();
  const images = await getAWSImgs();

  const missingsModels = Object.values(data).filter(
    (model) => !models.includes(model.model + ".glb")
  );

  const missingsImages = Object.values(data).filter(
    (model) => !images.includes(model.model + ".png")
  );

  console.log("Missing models", missingsModels);
  const modelsNames = missingsModels.map((model) => model.model);
  const jsonFileModels = JSON.stringify(modelsNames);
  fs.writeFileSync("missingModels.json", jsonFileModels);

  console.log("Missing images", missingsImages);
  const imagesNames = missingsImages.map((model) => model.model);
  const jsonFileImages = JSON.stringify(imagesNames);
  fs.writeFileSync("missingImages.json", jsonFileImages);
  //   console.log("Missing images", missingsImages);
};

getAllMissingsFiles();