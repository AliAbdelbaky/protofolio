import { useTheme } from "vuetify";
export default function () {
  const theme = useTheme();

  const toggleTheme = () => {
    // toggle theme for vueify first  1
    theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark";
    // toggle theme for tailliwnd css 2
    document
      .querySelector("body")
      ?.classList.remove(theme.global.current.value.dark ? "light" : "dark");
    document
      .querySelector("body")
      ?.classList.add(theme.global.current.value.dark ? "dark" : "light");

    // save theme data
    localStorage.setItem(
      "theme",
      theme.global.current.value.dark ? "dark" : "light"
    );
  };

  const setTheme = (globalTheme: string) => {
    theme.global.name.value = globalTheme;
    document
      .querySelector("body")
      ?.classList.remove(globalTheme == "dark" ? "light" : "dark");
    document.querySelector("body")?.classList.add(globalTheme);
    document
      .querySelector("html")
      ?.classList.remove(globalTheme == "dark" ? "light" : "dark");
    document.querySelector("html")?.classList.add(globalTheme);
  };

  return { theme, toggleTheme, setTheme };
}
