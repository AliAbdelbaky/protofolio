<template>
  <v-app>
    <v-app-bar name="app-bar" class="justify-center">
      <div class="flex justify-center align-center w-100">
        <div class="logo flex gap-1 items-center cursor-pointer">
          <div
            class="icon p-3 w-14 border-2 rounded-full flex items-center justify-center"
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 902.63 746.39"
            >
              <title>Ali Abdelbaky</title>
              <path
                d="M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z"
                transform="translate(-533.75 -332.61)"
              />
              <path
                d="M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z"
                transform="translate(-533.75 -332.61)"
              />
            </svg>
          </div>
          <div class="text flex text-start capitalize flex-col">
            <span class="title text-lg font-bold">{{ userdata.name }}</span>
            <span class="subtitle text-sm -tracking-tighter">{{
              userdata.title
            }}</span>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <slot />
     
    </v-main>
  </v-app>
</template>

<script setup>
useHead({
  title: "nuxt3-startupkit",
});
const userdata = reactive({
  name: "Ali Abdelbaqy",
  title: "Frontend Developer",
});
const { setTheme } = useThemeHandller();
const { setlang } = useLangHandller();
onMounted(() => {
  if (localStorage) {
    const theme = localStorage.getItem("theme");
    const lang = localStorage.getItem("lang");
    setTheme(theme ? theme : "light");
    setlang(lang ? lang : "en");
  }
});
</script>

<style lang="scss" scoped></style>
