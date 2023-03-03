<template>
  <v-app>
    <Toolbar />
    <v-main class="min-h-screen">
        <slot />
    </v-main>
    <Footer />
  </v-app>
  <DefaultActions />
</template>

<script setup lang="ts">
// @ts-ignore
import Toolbar from "~~/components/website/shared/Toolbar.vue";
// @ts-ignore
import Footer from "~~/components/website/shared/Footer.vue";
// @ts-ignore
import DefaultActions from "~~/components/website/shared/DefaultActions.vue";
import useLangHandler from "~/composables/layout/useLangHandler";

const { locale, setlang } = useLangHandler();

onMounted(() => {
  if (process.client) {
    const lang = localStorage.getItem("lang") || "en";
    setlang(lang);
  }
});
</script>
