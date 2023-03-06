<template>
  <section class="min-h-screen flex items-center">
    <v-container class="text-center">
      <h5
        class="uppercase text-secondary text-[0.875rem] leading-5 pt-1 ms-2 font-semibold mb-2"
        style="letter-spacing: 0.4em"
      >
        {{ pageData.title }}
      </h5>
      <h1 class="text-primary text-4xl font-bold my-4">
        {{ pageData.subtitle }}
      </h1>
      <p class="text-1xl text-primary">
        {{ pageData.tailText }}
      </p>
    </v-container>
  </section>
</template>

<script setup>
const pageData = {
  title: "a few words about me",
  subtitle:
    "I’m Ali Abdelbaqy, a frontend web developer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.",
  tailText:
    "Over the past 9 years I have been working with big companies and rising startups around the world as a designer and art director, working solo and leading small design teams. In my spare time I enjoy photography and motorcycle adventures.",
};
</script>

<style lang="scss" scoped></style>
