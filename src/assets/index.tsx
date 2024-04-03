import Anemo from "./images/anemo.svg";
import Cryo from "./images/cryo.svg";
import Dendro from "./images/dendro.svg";
import Electro from "./images/electro.svg";
import Geo from "./images/geo.svg";
import Hydro from "./images/hydro.svg";
import Pyro from "./images/pyro.svg";

import star from "./images/star.svg";

type VisionType = {
  path: string;
  title: string;
};

export const vision: VisionType[] = [
  {
    path: Anemo,
    title: "Anemo"
  },
  {
    path: Cryo,
    title: "Cryo"
  },
  {
    path: Dendro,
    title: "Dendro"
  },
  {
    path: Electro,
    title: "Electro"
  },
  {
    path: Geo,
    title: "Geo"
  },
  {
    path: Hydro,
    title: "Hydro"
  },
  {
    path: Pyro,
    title: "Pyro"
  }
];

export const findVision = (item: string) => {
  return vision.find(el => el.title === item)?.path;
};

export const rarity = (item: number) => {
  const arr: string[] = [];
  for (let i = 0; i < item; i++) {
    arr.push(star);
  }
  return arr;
};
