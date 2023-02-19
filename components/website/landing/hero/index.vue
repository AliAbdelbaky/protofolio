<template>
  <section class="hero">
    <h2 class="hero_text">developer.</h2>
    <v-container fluid class="z-10 relative">
      <v-row>
        <v-col cols="12" md="6">
          <div
            class="text_container flex flex-col justify-end h-full w-full pb-4 ps-8"
          >
            <h6
              class="uppercase text-secondary text-[0.875rem] leading-5 pt-1 ms-2 font-semibold mb-2"
              style="letter-spacing: 0.4em"
            >
              Ali Abdelbaqy
            </h6>
            <h2
              class="title capitalize text-[4.5rem] leading-[3.67rem] pt-1 font-semibold"
            >
              Frontend Web Developer
            </h2>
            <h3
              class="subtitle font-semibold text-secondary mt-3 tracking-normal text-[1.5rem]"
            >
              Over the past 3 years, as an Frontend Developer, I’ve worked with
              big companies and up-and-coming startups to successfully help them
              reach their Goals.
            </h3>
            <div
              class="w-fit gap-3 flex text-secondary flex-wrap justify-between mt-5"
            >
              <a
                href="#projects "
                class="text-primary font-semibold capitalize text-[1.12rem] relative"
              >
                View projects</a
              >
              <span> or </span>
              <nuxt-link
                to="/about"
                class="text-primary font-semibold capitalize text-[1.12rem] relative"
                >Read About Me</nuxt-link
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="img-container">
            <v-img width="1000" :aspect-ratio="1" :src="heroImg" cover></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import heroImg from "~~/assets/images/header.png";
</script>

<style lang="scss">
.hero {
  position: relative;
  .hero_text {
    position: absolute;
    top: 6rem;
    font-size: 17rem;
    width: 120%;
    font-weight: 600;
    color: transparent;
    background: #fff;
    -webkit-background-clip: text;
    z-index: 0;
    filter: drop-shadow(18px 18px 16px #f7f7f7);
    pointer-events: none;
  }
}
.img-container {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    // z-index: 2
    background: #000010;
    background: linear-gradient(0deg, #fff 1%, rgba(0, 0, 0, 0) 40%);
  }
  .v-img__img {
    filter: grayscale(1) drop-shadow(6px 18px 49px #f7f7f7);
  }
}
</style>
