import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";
import { SearchText } from "../../components/SearchText/SearchText";
import { useAppSelector } from "../../hooks/redux";
import {
  selectHistory,
  selectUploadingHistory
} from "../../store/selectors/history";
import { Loader } from "../../components/Loader/Loader";

export const History = () => {
  const [searchParams] = useSearchParams();
  const [, setSearchText] = useState(searchParams.get("request") || "");
  const historyList = useAppSelector(selectHistory);
  const uploadingHistory = useAppSelector(selectUploadingHistory);

  useEffect(() => {
    setSearchText(searchParams.get("request") || "");
  }, [searchParams]);

  if (uploadingHistory) {
    return <Loader />;
  }

  return (
    <Container>
      <h1 className="container__title">Your Search History</h1>
      <SearchText visible={false} />
      {historyList.length > 0 ? (
        historyList.map((text, i: number) => {
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
