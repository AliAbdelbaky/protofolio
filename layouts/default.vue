<template>
  <v-app>
    <Toolbar />
    <v-main class="min-h-screen">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
  <div class="ball"></div>
</template>

<script setup>
import gsap from "gsap";

import Toolbar from "~~/components/website/shared/Toolbar.vue";
import Footer from "~~/components/website/shared/Footer.vue";
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
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.pageX);
      yTo(e.pageY);
    });
  }
});
</script>

<style lang="scss" scoped>
.ball {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid dodgerblue;
  border-radius: 50%;
  pointer-events: none;
  z-index: 999;
}
</style>
