import { useGetGenshinHeroQuery } from "../../store/genshinApi";
import { Container } from "../../components/Container/Container";
import { Card } from "../../components/Card/Card";

export const Home = () => {
  const { data = [], isLoading } = useGetGenshinHeroQuery(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      {data &&
        data.slice(0, 20).map((hero, i: number) => {
          return <Card hero={hero} key={i} />;
        })}
    </Container>
  );
};
