import data from "../json/data.json";

import { DataType } from "../types";

const dataKeys = data as DataType;

const types = Object.keys(data).map((key) => dataKeys[key].type);
const uniqueTypes = [...new Set(types)];

console.log(uniqueTypes);
