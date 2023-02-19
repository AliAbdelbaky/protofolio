<template>
  <v-app>
    <Toolbar />
    <v-main class="min-h-screen">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Toolbar from "~~/components/website/shared/Toolbar.vue";
useHead({
  title: "nuxt3-startupkit",
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
