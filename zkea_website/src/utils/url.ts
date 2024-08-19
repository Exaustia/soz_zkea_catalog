const models = "https://cdn.exaustia.com/soz/catalog/assets/models/";
const images = "https://cdn.exaustia.com/soz/catalog/assets/images/";

const getUrl = (name: string, type: string): string => {
  if (type === "glb") return `${models}${name}.glb`;
  else return `${images}${name}.webp`;
};

export default getUrl;
