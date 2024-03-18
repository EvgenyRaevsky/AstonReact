import { NavLink, useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { useAuth } from "../../hooks/useAuth";
import { useFormError } from "../../hooks/useFormError";
import st from "./auth.module.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const { signUpUser } = useAuth();
  const { error, setError } = useFormError();

  const handlerClick = async (email: string, password: string) => {
    const user = await signUpUser(email, password);
    if (user) {
      navigate("/signin");
    } else {
      setError(true);
    }
  };

  return (
    <div className={st.container}>
      <h1 className={st.container__title}>Sign Up</h1>
      <Form title="Register" handlerClick={handlerClick} />
      <p className={st.container__text}>
        Do you already have an account?
        <NavLink to="/signin" className={st.container__link}>
          Sign In
        </NavLink>
      </p>
      {error && <p className={st.error}>Such an account already exists</p>}
    </div>
  );
};
