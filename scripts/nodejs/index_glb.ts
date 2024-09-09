import { downloadGLB } from "./glb_utils/download_glb";
import { uploadGLB } from "./glb_utils/upload_glb";
import { convertToWebP } from "./images_utils/pngToWebp";
import { uploadImg } from "./images_utils/upload_img";
import { getAllMissingsFiles } from "./utils/utils";

const { spawn } = require("child_process");

(async () => {
  await getAllMissingsFiles();
  console.log("All missing files have been generated.");
  await downloadGLB();
  console.log("All missing models have been downloaded.");
  await uploadGLB();
  console.log("All missing models have been uploaded.");
  await runPythonScript();
  console.log("Python script has been executed.");
  await convertToWebP();
  console.log("All images have been converted to webp.");
  await uploadImg();
})();

function runPythonScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", ["../python/main.py"]);

    // Capture stdout
    pythonProcess.stdout.on("data", (data: any) => {
      console.log(`stdout: ${data}`);
    });

    // Capture stderr
    pythonProcess.stderr.on("data", (data: any) => {
      console.error(`stderr: ${data}`);
    });

    // Handle process exit
    pythonProcess.on("close", (code: any) => {
      if (code !== 0) {
        reject(new Error(`Python script exited with code ${code}`));
      } else {
        resolve();
      }
    });

    // Handle errors
    pythonProcess.on("error", (err: any) => {
      reject(new Error(`Failed to start Python script: ${err.message}`));
    });
  });
}
