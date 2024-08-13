import data from "./data";


type DataType = {
  [key: string]: {
    type: string;
    name: string;
    model: string;
    price: number;
    collision: boolean;
  };
};

const dataKeys = data as DataType;

const types = Object.keys(data).map((key) => dataKeys[key].type);
const uniqueTypes = [...new Set(types)];

console.log(uniqueTypes);
