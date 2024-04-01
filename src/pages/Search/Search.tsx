import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { SingleCard } from "../../components/SingleCard/SingleCard";
import { SearchText } from "../../components/SearchText/SearchText";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("request") || ""
  );

  useEffect(() => {
    setSearchText(searchParams.get("request") || "");
  }, [searchParams]);

  return (
    <Container>
      <h1 className="container__title">Hero Search Page</h1>
      <SearchText visible={true} />
      <SingleCard name={searchText} />
    </Container>
  );
};
