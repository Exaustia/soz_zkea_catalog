import sharp from "sharp";
import { config } from "dotenv";
import fs from "fs";


config();

async function readPngToBuffer(filePath: string): Promise<Buffer> {
  return fs.promises.readFile(filePath);
}

// Fonction pour convertir une image en WebP
async function convertToWebP() {
  const localFolder = "../images";

  // Lire tous les fichiers du dossier local
  const files = fs.readdirSync(localFolder);

  for (const file of files) {
    const filePath = `${localFolder}/${file}`;
    const fileStream = await readPngToBuffer(filePath);

    try {
      // Convertir l'image en WebP
      const webpBuffer = await sharp(fileStream).webp().toBuffer();

      // Sauvegarder le fichier converti localement (optionnel)
      const outputFilePath = `./webp/${file.replace(/\.[^/.]+$/, ".webp")}`;
      fs.writeFileSync(outputFilePath, webpBuffer);

      console.log(`Image convertie : ${file} -> ${outputFilePath}`);
    } catch (error) {
      console.error(`Erreur lors de la conversion de ${file} :`, error);
    }
  }
}

// Lancer le script
convertToWebP();
