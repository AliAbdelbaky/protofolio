<template>
  <website-landing-hero />
  <website-landing-works />
  <section class=" min-h-screen flex items-center">
    <v-container class="text-center">
      <h5
        class="tracking-[0.4em] uppercase text-secondary text-sm font-semibold mb-4"
      >
        need a developer?
      </h5>
      <nuxt-link
        to="/contactme"
        class="contactLink main_hoveralble pb-2 text-primary text-7xl capitalize font-semibold"
      >
        Let’s work together
        <v-icon icon="mdi-arrow-right"></v-icon>
      </nuxt-link>
    </v-container>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
<style lang="scss" scoped>
.contactLink{
  position: relative;
  &:hover{
    font-style: italic;
  
  }
}
</style>
