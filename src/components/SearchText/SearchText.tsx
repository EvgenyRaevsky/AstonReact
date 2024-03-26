import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectUser } from "../../store/selectors/user";
import { useHistory } from "../../hooks/useHistory";
import { useDebounce } from "../../hooks/useDebounce";
import { Sagest } from "../Sagest/Sagest";
import search from "../../assets/images/search.svg";
import "./SearchText.css";

interface Props {
  visible: boolean;
  reloud?: boolean | boolean;
  setReloud?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchText = ({ visible, reloud, setReloud }: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const { addHistoryRequests } = useHistory();
  const [isFocus, setIsFocus] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("request") || ""
  );

  const request = useDebounce(searchText, 500);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    setSearchParams({ request: value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user?.email) {
      await addHistoryRequests(searchText, user.email);
    }
    navigate(`/search?request=${searchText}`);
    if (reloud !== undefined && setReloud !== undefined) {
      setReloud(!reloud);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-container__input"
        placeholder="Example: Albedo, Hu Tao, Yae Miko, Traveler Dendro"
        value={searchText}
        onChange={e => onChangeInput(e)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setTimeout(() => setIsFocus(false), 300)}
      />
      {visible && (
        <Sagest
          isFocus={isFocus}
          request={request}
          setReloud={setReloud}
          reloud={reloud}
        />
      )}
      <button className="search-container__btn">
        <img src={search} alt="Search" />
      </button>
    </form>
  );
};
