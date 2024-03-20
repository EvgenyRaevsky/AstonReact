import { useParams } from "react-router";
import { SingleCard } from "../../components/SingleCard/SingleCard";
import { useGetGenshinSingleHeroInfoQuery } from "../../store/genshinApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { Loader } from "../../components/Loader/Loader";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import { Container } from "../../components/Container/Container";

interface SingleHeroInfo {
  data: transformSingleHeroResponseType;
  isLoading: boolean;
}

export const ItemCard = () => {
  const { name } = useParams<{ name: string }>();

  const { data: singleHeroInfo, isLoading } =
    useGetGenshinSingleHeroInfoQuery<SingleHeroInfo>(name ?? skipToken);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <SingleCard singleHeroInfo={singleHeroInfo} />
    </Container>
  );
};
