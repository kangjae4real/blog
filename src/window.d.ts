declare global {
  interface Window {
    __theme: "light" | "dark";
    __setPreferredTheme: (newTheme: "light" | "dark") => void;
    __onThemeChange: (newTheme: "light" | "dark") => void;
  }
}

window.__theme = window.__theme || "light";
window.__setPreferredTheme = window.__setPreferredTheme || void 0;
window.__onThemeChange = window.__onThemeChange || void 0;

export {};
