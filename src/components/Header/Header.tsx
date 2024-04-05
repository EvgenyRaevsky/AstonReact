import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toggleAuth } from "../../store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectAuth } from "../../store/selectors/auth";
import { setFavorites } from "../../store/slice/favoriteSlice";
import { setUser } from "../../store/slice/userSlice";
import { useFavorite } from "../../hooks/useFavorite";
import { setHistory } from "../../store/slice/historySlice";
import { useHistory } from "../../hooks/useHistory";
import { useThemeCtx } from "../../context/ThemeCtx";
import { gettingUserData } from "../../utils/localStorage";
import logoLight from "../../assets/images/logoLight.svg";
import logoDark from "../../assets/images/logoDark.svg";
import sunLight from "../../assets/images/sunLight.svg";
import sunDark from "../../assets/images/sunDark.svg";
import "./Header.css";

interface userState {
  uid: string;
  email: string;
}

export const Header = () => {
  const dispatch = useAppDispatch();
  const { signOutUser } = useAuth();
  const { readFavoritesHeroes } = useFavorite();
  const { readHistoryRequests } = useHistory();
  const { lightTheme, changeTheme } = useThemeCtx();
  const isAuth = useAppSelector(selectAuth);

  const userData = gettingUserData();

  const logo = lightTheme ? logoDark : logoLight;
  const theme = lightTheme ? sunDark : sunLight;

  useEffect(() => {
    if (userData) {
      dispatch(toggleAuth(true));
      const user: userState = JSON.parse(userData || "{}");
      dispatch(setUser(user));
      readFavoritesHeroes(user.email);
      readHistoryRequests(user.email);
    }
  }, []);

  const logout = async () => {
    await signOutUser();
    dispatch(toggleAuth(false));
    dispatch(setFavorites([]));
    dispatch(setHistory([]));
  };

  return (
    <header className={`header ${lightTheme ? "header-light" : "header-dark"}`}>
      <nav className="header__nav">
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        {isAuth || userData ? (
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
                <NavLink
                  to="/signin"
                  className="header__item-no-color"
                  onClick={e => e.preventDefault()}
                >
                  Favorites
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                  to="/signin"
                  className="header__item-no-color"
                  onClick={e => e.preventDefault()}
                >
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
        <img
          className="header__theme"
          src={theme}
          alt="Theme"
          onClick={changeTheme}
        />
      </nav>
    </header>
  );
};
