import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux";
import { selectSagest } from "../../store/selectors/history";
import { selectUser } from "../../store/selectors/user";
import { useHistory } from "../../hooks/useHistory";
import "./Sagest.css";

interface Props {
  isFocus: boolean;
  request: string;
  reloud?: boolean | boolean;
  setReloud?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sagest = ({ isFocus, request, setReloud, reloud }: Props) => {
  const navigate = useNavigate();
  const requestsList = useAppSelector(selectSagest);
  const user = useAppSelector(selectUser);
  const { getHistoryRequestsSagest } = useHistory();

  const clickSagest = (searchText: string) => {
    navigate(`/search?request=${searchText}`);
    if (reloud !== undefined && setReloud != undefined) {
      setReloud(!reloud);
    }
  };

  useEffect(() => {
    (async () => {
      if (user?.email) {
        await getHistoryRequestsSagest(request, user.email);
      }
    })();
  }, [request]);

  return (
    requestsList.length > 0 && (
      <div className={`sagest sagest-${isFocus}`}>
        {[...requestsList].map((el, i) => {
          return (
            <p
              className="sagest__request"
              key={i}
              onClick={() => clickSagest(el)}
            >
              {el}
            </p>
          );
        })}
      </div>
    )
  );
};
