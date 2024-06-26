import { NavLink, useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/redux";
import { toggleAuth } from "../../store/slice/authSlice";
import { useFormError } from "../../hooks/useFormError";
import { useFavorite } from "../../hooks/useFavorite";
import { useHistory } from "../../hooks/useHistory";
import { savingUserData } from "../../utils/localStorage";
import st from "./auth.module.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { signInUser } = useAuth();
  const { error, setError } = useFormError();
  const { readFavoritesHeroes } = useFavorite();
  const { readHistoryRequests } = useHistory();

  const handlerClick = async (email: string, password: string) => {
    const user = await signInUser(email, password);
    if (user?.email) {
      savingUserData(user);
      await readFavoritesHeroes(user.email);
      await readHistoryRequests(user.email);
      dispatch(toggleAuth(true));
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className={st.container}>
      <h1 className={st.container__title}>Sign In</h1>
      <Form title="Login" handlerClick={handlerClick} />
      <p className={st.container__text}>
        Or create a new account
        <NavLink to="/signup" className={st.container__link}>
          Sign Up
        </NavLink>
      </p>
      {error && <p className={st.error}>There is no such account</p>}
    </div>
  );
};
