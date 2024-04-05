import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { SearchText } from "../../components/SearchText/SearchText";
import { useGetSearchGenshinHeroQuery } from "../../store/genshinApi";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import { Loader } from "../../components/Loader/Loader";
import { filterHeroData } from "../../utils/searchHeroData";
import { Card } from "../../components/Card/Card";
import { NotFound } from "../../components/NotFound/NotFound";

interface AllHeroInfo {
  data: transformSingleHeroResponseType[];
  isLoading: boolean;
}

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("request") || ""
  );

  const { data: allHeroInfo, isLoading } =
    useGetSearchGenshinHeroQuery<AllHeroInfo>(undefined, {
      refetchOnMountOrArgChange: true
    });

  useEffect(() => {
    setSearchText(searchParams.get("request") || "");
  }, [searchParams]);

  if (isLoading) {
    return <Loader />;
  }

  const searchHero = filterHeroData(allHeroInfo, searchText);

  return (
    <Container>
      <h1 className="container__title">Hero Search Page</h1>
      <SearchText />
      {searchHero.length > 0 ? (
        searchHero.map((hero, i) => {
          return <Card hero={hero} key={i} />;
        })
      ) : (
        <NotFound />
      )}
    </Container>
  );
};
