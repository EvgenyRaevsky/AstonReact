import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main style={{ width: "100%", height: "calc(100dvh - 160px)" }}>
      {children}
    </main>
  );
};
