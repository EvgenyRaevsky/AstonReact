import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toggleAuth } from "../../store/slice/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectAuth } from "../../store/selectors/auth";
import "./Header.css";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { signOutUser } = useAuth();
  const isAuth = useAppSelector(selectAuth);

  const logout = async () => {
    await signOutUser();
    dispatch(toggleAuth(false));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img src="../../../public/favicon.svg" alt="Logo" />
        </div>
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
        {isAuth ? (
          <ul className="header__list header__list_end">
            <li className="header__item">
              <NavLink to="/" onClick={() => logout()} className="header__link">
                Sign Out
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="header__list header__list_end">
            <li className="header__item">
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
