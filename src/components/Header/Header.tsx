import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toggleAuth } from "../../store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectAuth } from "../../store/selectors/auth";
import { setFavorites } from "../../store/slice/favoriteSlice";
import { setUser } from "../../store/slice/userSlice";
import { useFavorite } from "../../hooks/useFavorite";
import { setHistory, setSagest } from "../../store/slice/historySlice";
import { useHistory } from "../../hooks/useHistory";
import "./Header.css";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { signOutUser } = useAuth();
  const { getFavoritesHeroes } = useFavorite();
  const { getHistoryRequests } = useHistory();
  const isAuth = useAppSelector(selectAuth);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      dispatch(setUser(user));
      getFavoritesHeroes(user.email);
      getHistoryRequests(user.email);
      dispatch(toggleAuth(true));
    }
  }, []);

  const logout = async () => {
    await signOutUser();
    dispatch(toggleAuth(false));
    dispatch(setFavorites([]));
    dispatch(setHistory([]));
    dispatch(setSagest([]));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img src="../../../public/favicon.svg" alt="Logo" />
        </div>
        {isAuth ? (
          <>
            <ul className="header__list">
              <li className="header__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/history">History</NavLink>
              </li>
            </ul>
            <ul className="header__list header__list_end">
              <li className="header__item">
                <NavLink
                  to="/"
                  onClick={() => logout()}
                  className="header__link"
                >
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="header__list">
              <li className="header__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/signin" className="header__item-no-color">
                  Favorites
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/signin" className="header__item-no-color">
                  History
                </NavLink>
              </li>
            </ul>
            <ul className="header__list header__list_end">
              <li className="header__item">
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/signin">Sign In</NavLink>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};
