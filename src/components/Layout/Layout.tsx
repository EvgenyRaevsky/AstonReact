import { ReactNode } from "react";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <main className="layout">{children}</main>;
};
