import { useNavigate } from "react-router-dom";
import { useHistory } from "../../hooks/useHistory";
import { useAppSelector } from "../../hooks/redux";
import { selectUser } from "../../store/selectors/user";
import search from "../../assets/images/search.svg";
import del from "../../assets/images/delete.svg";
import "./HistoryCard.css";

interface Props {
  request: string;
}

export const HistoryCard = ({ request }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const { deleteHistoryRequests } = useHistory();

  const clickSearchBtn = (searchText: string) => {
    navigate(`/search?request=${searchText.trim()}`);
  };

  const clickDeleteBtn = async () => {
    if (user?.email) {
      await deleteHistoryRequests(request, user.email);
    }
  };

  return (
    <div className="history-card">
      <p className="history-card__request">{request}</p>
      <div className="history-card__btn-block">
        <button
          className="history-card__button"
          onClick={() => clickSearchBtn(request)}
        >
          <img src={search} alt="Search" />
        </button>
        <button className="history-card__button" onClick={clickDeleteBtn}>
          <img src={del} alt="Delete" />
        </button>
      </div>
    </div>
  );
};
