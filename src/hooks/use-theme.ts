import { useCallback, useEffect, useState } from "react";
import { Nullable } from "@/lib/types";

export type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Nullable<Theme>>(null);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (typeof window === "object") {
      setTheme(window.__theme);
    }

    window.__onThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
    };
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
