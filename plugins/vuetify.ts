import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { ThemeDefinition, VuetifyOptions } from "vuetify";
import { ar, en } from "vuetify/locale";

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",

    primary: "#c8a45d",
    accent: "#82b1ff",
    secondary: "#220054",
    info: "#1491e6",
    warning: "#ffc107",
    error: "#e83a3a",
    success: "#4caf50",
    btn: "#220054",
    lightPrimary: "#57407a",
    midGray: "#6b7280",
    darkPrimary: "#1B2534",
    lightDark: "#383e43",
    subtitle: "#777E90",
    cardPrimary: "#fff",
    light: "#ffffff",
  },
};
const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#c8a45d",
    accent: "#82b1ff",
    secondary: "#220054",
    title: "#fff",
    cardPrimary: "#0C0C0C",
    background: "#0C0C0C",
    light: "#0C0C0C",
  },
};
const messages = { ar, en };

const locale = {
  locale: "en",
  fallback: "ar",
  messages,
};
const theme = {
  defaultTheme: "light",
  themes: { light, dark },
};

const vuetifyOptions: VuetifyOptions = {
  ssr: true,
  components,
  directives,
  theme,
  locale,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
};

export default defineNuxtPlugin(({ vueApp, provide }) => {
  const vuetify = createVuetify(vuetifyOptions);
  vueApp.use(vuetify);
  // provide("vuetify", vuetify);
});
