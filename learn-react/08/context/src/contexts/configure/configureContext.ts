import { createContext } from "react";

type ConfigContextType = {
  theme: string;
  setDarkMode: () => void;
  setLightMode: () => void;
};

export const ConfigContext = createContext<ConfigContextType | null>(null);
