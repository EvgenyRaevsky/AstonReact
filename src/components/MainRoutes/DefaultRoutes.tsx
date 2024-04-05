import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../../hooks/redux";
import { selectAuth } from "../../store/selectors/auth";
import { gettingUserData } from "../../utils/localStorage";

interface Props {
  children: ReactNode;
}

export const DefaultRoutes = ({ children }: Props) => {
  const userData = gettingUserData();
  const isAuth = useAppSelector(selectAuth);

  if (isAuth || userData) {
    return <>{children}</>;
  }

  return <Navigate to="/signin" replace />;
};
