// https://nuxt.com/docs/api/configuration/nuxt-config
const meta = {
  titleTemplate: "%s - Portfolio",
  title: "Ali Abdelbaqy",
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      hid: "description",
      name: "description",
      content: "",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.svg",
    },
  ],
};
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  ssr: false,
  // @ts-ignore
  target: "static",
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://nuxtjs.org",
    },
  },
  css: ["vuetify/styles", "@/assets/css/index.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  buildModules: ["@nuxt/postcss8"],

  //-- meta tags
  app: {
    head: meta,
  },
});
