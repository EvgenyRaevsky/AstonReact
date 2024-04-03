import { ReactNode } from "react";
import { useAppSelector } from "../../hooks/redux";
import { selectAuth } from "../../store/selectors/auth";
import { Navigate } from "react-router";

interface Props {
  children: ReactNode;
}

export const DefaultRoutes = ({ children }: Props) => {
  const userData = localStorage.getItem("user");
  const isAuth = useAppSelector(selectAuth);

  if (isAuth || userData) {
    return <>{children}</>;
  }

  return <Navigate to="/signin" replace />;
};
