import { downloadGLB } from "./glb_utils/download_glb";
import { uploadGLB } from "./glb_utils/upload_glb";
import { getAllMissingsFiles } from "./utils/utils";

(async () => {
  await getAllMissingsFiles();
  console.log("All missing files have been generated.");
  await downloadGLB();
  console.log("All missing models have been downloaded.");
  await uploadGLB();
  console.log("All missing models have been uploaded.");
})();
