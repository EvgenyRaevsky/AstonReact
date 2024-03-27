import { ReactNode } from "react";
import "./Layout.css";
import { useThemeCtx } from "../../context/ThemeCtx";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { lightTheme } = useThemeCtx();
  return (
    <main className={`layout ${lightTheme ? "layout-light" : "layout-dark"}`}>
      {children}
    </main>
  );
};
