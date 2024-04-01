import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux";
import { selectSagest } from "../../store/selectors/history";
import { selectUser } from "../../store/selectors/user";
import { useHistory } from "../../hooks/useHistory";
import "./Suggest.css";

interface Props {
  isFocus: boolean;
  request: string;
  reloud?: boolean | boolean;
  setReloud?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Suggest = ({ isFocus, request }: Props) => {
  const navigate = useNavigate();
  const requestsList = useAppSelector(selectSagest);
  const user = useAppSelector(selectUser);
  const { readHistoryRequestsSagest } = useHistory();

  const clickSuggest = (searchText: string) => {
    navigate(`/search?request=${searchText}`);
  };

  useEffect(() => {
    (async () => {
      if (user?.email) {
        await readHistoryRequestsSagest(request, user.email);
      }
    })();
  }, [request]);

  return (
    requestsList.length > 0 && (
      <div className={`suggest suggest-${isFocus}`}>
        {[...requestsList].map((el, i) => {
          return (
            <p
              className="suggest__request"
              key={i}
              onClick={() => clickSuggest(el)}
            >
              {el}
            </p>
          );
        })}
      </div>
    )
  );
};
