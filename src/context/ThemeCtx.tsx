import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

interface ThemeInterface {
  lightTheme: boolean;
  changeTheme: () => void;
}

export const Ctx = createContext<ThemeInterface | null>(null);

export const useThemeCtx = () => {
  const context = useContext(Ctx);

  if (!context) {
    throw new Error("Error context is ThemeCtx.tsx");
  }

  return context;
};

export const ThemeCtx = ({ children }: Props) => {
  const [lightTheme, setLightTheme] = useState(true);

  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <Ctx.Provider value={{ lightTheme, changeTheme }}>{children}</Ctx.Provider>
  );
};
