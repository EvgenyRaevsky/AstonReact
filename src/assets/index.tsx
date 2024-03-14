import Anemo from "./images/anemo.webp";
import Cryo from "./images/cryo.webp";
import Dendro from "./images/dendro.webp";
import Electro from "./images/electro.webp";
import Geo from "./images/geo.webp";
import Hydro from "./images/hydro.webp";
import Pyro from "./images/pyro.webp";

export const vision = [
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
