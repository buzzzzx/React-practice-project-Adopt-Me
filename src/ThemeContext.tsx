import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "purple",
  () => {},
]);

export default ThemeContext;
