import { setId } from "./transformHeroData";

const elements = ["Geo", "Dendro", "Cryo", "Pyro", "Hydro", "Electro", "Anemo"];

export const requestProcessingSearch = (value: string) => {
  let vision = "";
  let name = value.split(" ");
  name = name.map(el => el.charAt(0).toUpperCase() + el.slice(1));
  if (elements.find(el => el === name[name.length - 1])) {
    vision = name[name.length - 1];
    return setId(name[0], vision);
  }
  return setId(name.join(" "), vision);
};
