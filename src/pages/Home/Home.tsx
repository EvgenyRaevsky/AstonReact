import { useGetGenshinHeroQuery } from "../../store/genshinApi";
import { Container } from "../../components/Container/Container";
import { Card } from "../../components/Card/Card";
import { Loader } from "../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { endLenCard, showMoreCard } from "../../store/slice/moreCardSlice";
import { selectEndCard, selectMoreCard } from "../../store/selectors/moreCard";
import { transformSingleHeroResponseType } from "../../types/HeroData";
import { SearchText } from "../../components/SearchText/SearchText";

interface AllHeroInfo {
  data: transformSingleHeroResponseType[];
  isLoading: boolean;
}

export const Home = () => {
  const { data: allHeroInfo, isLoading } =
    useGetGenshinHeroQuery<AllHeroInfo>();
  const dispatch = useAppDispatch();
  const lengthCards = useAppSelector(selectMoreCard);
  const lengthCardsEnd = useAppSelector(selectEndCard);

  const showMore = () => {
    if (lengthCards + 20 > allHeroInfo.length) {
      dispatch(showMoreCard(allHeroInfo.length));
      dispatch(endLenCard());
    } else {
      dispatch(showMoreCard(lengthCards + 20));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <h1 className="container__title">Genshin Impact Heroes</h1>
      <SearchText visible={true} />
      {allHeroInfo &&
        allHeroInfo.slice(0, lengthCards).map((hero, i: number) => {
          return <Card hero={hero} key={i} />;
        })}
      <button
        className="container__btn"
        onClick={showMore}
        disabled={lengthCardsEnd}
      >
        More
      </button>
    </Container>
  );
};
