import { useParams } from "react-router";
import { SingleCard } from "../../components/SingleCard/SingleCard";
import { Container } from "../../components/Container/Container";

type QuizParams = {
  name: string;
};

export const ItemCard = () => {
  const { name } = useParams<QuizParams>();

  return (
    <Container>
      <SingleCard name={name || ""} />
    </Container>
  );
};
