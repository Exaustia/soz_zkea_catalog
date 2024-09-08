import { downloadGLB } from "./glb_utils/download_glb";
import { uploadGLB } from "./glb_utils/upload_glb";
import { convertToWebP } from "./images_utils/pngToWebp";
import { uploadImg } from "./images_utils/upload_img";
import { getAllMissingsFiles } from "./utils/utils";

(async () => {
  await convertToWebP();
  console.log("All images have been converted to webp.");
  await uploadImg();
})();
