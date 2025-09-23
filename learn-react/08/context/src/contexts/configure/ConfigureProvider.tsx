import { useState } from "react";
import { ConfigContext } from "./configureContext";

export default function ConfigureProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");
  const setDarkMode = () => setTheme("dark");
  const setLightMode = () => setTheme("light");
  return (
    <>
      <ConfigContext value={{ theme, setDarkMode, setLightMode }}>
        {children}
      </ConfigContext>
    </>
  );
}
