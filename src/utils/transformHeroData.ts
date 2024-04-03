import {
  SingleHeroResponseType,
  transformSingleHeroResponseType
} from "../types/HeroData";

const namesSeparatedDashes: string[] = [
  "Arataki Itto",
  "Hu Tao",
  "Shikanoin Heizou",
  "Yae Miko",
  "Yun Jin",
  "Kuki Shinobu"
];

const onlyLastName: string[] = [
  "Kamisato Ayaka",
  "Kamisato Ayato",
  "Kaedehara Kazuha",
  "Sangonomiya Kokomi",
  "Kujou Sara"
];

const onlyFirstName: string[] = ["Raiden Shogun"];

export const setId = (name: string, vision: string): string => {
  if (name === "Traveler") {
    return `${name.toLowerCase()}-${vision.toLowerCase()}`;
  }
  if (namesSeparatedDashes.find(el => el === name)) {
    return `${name.split(" ")[0].toLowerCase()}-${name.split(" ")[1].toLowerCase()}`;
  }
  if (onlyLastName.find(el => el === name)) {
    return name.split(" ")[1].toLowerCase();
  }
  if (onlyFirstName.find(el => el === name)) {
    return name.split(" ")[0].toLowerCase();
  }
  return name.toLowerCase();
};

export const transformHeroData = (
  data: SingleHeroResponseType[]
): transformSingleHeroResponseType[] => {
  const transfornData = [];
  for (let i = 0; i < data.length; i++) {
    transfornData.push({
      id: setId(data[i].name, data[i].vision),
      name: data[i].name,
      title: data[i].title,
      vision: data[i].vision,
      weapon: data[i].weapon,
      gender: data[i].gender,
      nation: data[i].nation,
      affiliation: data[i].affiliation,
      rarity: data[i].rarity,
      release: data[i].release,
      constellation: data[i].constellation,
      description: data[i].description
    });
  }
  return transfornData;
};

export const transformSingleHeroData = (
  data: SingleHeroResponseType
): transformSingleHeroResponseType => {
  return {
    id: setId(data.name, data.vision),
    name: data.name,
    title: data.title,
    vision: data.vision,
    weapon: data.weapon,
    gender: data.gender,
    nation: data.nation,
    affiliation: data.affiliation,
    rarity: data.rarity,
    release: data.release,
    constellation: data.constellation,
    description: data.description
  };
};
