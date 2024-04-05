import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectUser } from "../../store/selectors/user";
import { useHistory } from "../../hooks/useHistory";
import { useDebounce } from "../../hooks/useDebounce";
import Suggest from "../Suggest/Suggest";
import search from "../../assets/images/search.svg";
import "./SearchText.css";

export const SearchText = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const { addHistoryRequests } = useHistory();
  const [isFocus, setIsFocus] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("request") || ""
  );

  useEffect(() => {
    setSearchText(searchParams.get("request") || "");
  }, [searchParams]);

  const request = useDebounce(searchText, 800);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchText.trim().length) {
      if (user?.email) {
        await addHistoryRequests(searchText, user.email);
      }
      setSearchParams({ request: searchText });
      navigate(`/search?request=${searchText.trim()}`, { replace: true });
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
      <Suggest isFocus={isFocus} request={request} />
      <button className="search-container__btn">
        <img src={search} alt="Search" />
      </button>
    </form>
  );
};
