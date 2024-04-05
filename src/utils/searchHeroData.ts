import { transformSingleHeroResponseType } from "../types/HeroData";

export const filterHeroData = (
  heroes: transformSingleHeroResponseType[],
  request: string
) => {
  return heroes.filter(hero => {
    const length = request.length;
    return (
      hero.name.toLowerCase().slice(0, length) === request.toLowerCase().trim()
    );
  });
};

export const filterSuggest = (
  heroes: transformSingleHeroResponseType[],
  request: string
) => {
  const searchHeroResult = filterHeroData(heroes, request);
  return searchHeroResult.map(hero => hero.name).slice(0, 5);
};
