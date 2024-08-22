import data from "../props/data";
import { DataType } from "../types";


const dataKeys = data as DataType;

const types = Object.keys(data).map((key) => dataKeys[key].type);
const uniqueTypes = [...new Set(types)];

console.log(uniqueTypes);
