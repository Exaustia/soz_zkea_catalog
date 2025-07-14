// @ts-ignore

import { ZkeaFourniture } from "./json/object";

var fs = require("fs");

// Si l'import ne fonctionne pas, utiliser require
// const ZkeaFourniture = require('./json/data').ZkeaFourniture;

/**
 * Convertit un objet TypeScript en JSON
 * @param data L'objet à convertir en JSON
 * @param indent Nombre d'espaces pour l'indentation (optionnel, par défaut 2)
 * @returns La chaîne JSON formatée
 */
const convertToJson = <TData>(data: TData, indent = 2): string => {
  return JSON.stringify(ZkeaFourniture, null, indent);
};

// Convertir l'objet ZkeaFourniture en JSON
const jsonData = convertToJson(ZkeaFourniture);

// Afficher le JSON dans la console
console.log(jsonData);

fs.writeFileSync("zkea_fourniture.json", jsonData);

// Pour utiliser ce script:
// 1. Exécuter avec: ts-node varToJson.ts
// 2. Pour sauvegarder dans un fichier: ts-node varToJson.ts > zkea_fourniture.json
