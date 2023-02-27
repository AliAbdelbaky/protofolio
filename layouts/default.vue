<template>
  <v-app>
    <Toolbar />
    <v-main class="min-h-screen">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
  <DefaultActions />
</template>

<script setup>
import Toolbar from "~~/components/website/shared/Toolbar.vue";
import Footer from "~~/components/website/shared/Footer.vue";
import DefaultActions from "~~/components/website/shared/DefaultActions.vue";
useHead({
  title: "Ali Abdelbaqy",
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
