import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import { SearchText } from "../../components/SearchText/SearchText";
import { useAppSelector } from "../../hooks/redux";
import { selectHistory } from "../../store/selectors/history";

export const History = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("request") || ""
  );
  const historyList = useAppSelector(selectHistory);

  useEffect(() => {
    setSearchText(searchParams.get("request") || "");
  }, [searchParams]);

  const filterSearchCard = (cards: string[]): string[] => {
    return cards.filter(
      el =>
        el.split("").slice(0, searchText.length).join("").toLowerCase() ===
        searchText.toLowerCase()
    );
  };

  const updateHistoryList = filterSearchCard(historyList);

  return (
    <Container>
      <h1 className="container__title">Your Search History</h1>
      <SearchText visible={false} />
      {updateHistoryList.length > 0 ? (
        updateHistoryList.map((text, i: number) => {
          return <HistoryCard request={text} key={i} />;
        })
      ) : (
        <h1 className="container__favorite-none">
          {"Your query is not in the search history yet, please add it"}
        </h1>
      )}
    </Container>
  );
};
