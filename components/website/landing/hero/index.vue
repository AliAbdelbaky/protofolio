<template>
  <section class="hero py-[10%] relative">
    <h2 class="hero_text" ref="heroText">developer.</h2>
    <div
      class="text_container flex flex-col text-center justify-center h-full w-full pb-4 ps-8 z-10 relative"
    >
      <h6
        class="uppercase text-secondary text-[0.875rem] leading-5 pt-1 ms-2 font-semibold"
        style="letter-spacing: 0.4em"
        ref="stitle"
      >
        Ali Abdelbaqy
      </h6>
      <h2
        class="title capitalize text-[4.5rem] leading-[3.67rem] pt-1 my-7 font-semibold"
        ref="title"
      >
        Frontend Web Developer
      </h2>
      <h3
        class="subtitle font-semibold text-secondary mt-3 tracking-normal text-[1.5rem]"
        ref="subtitle"
      >
        Over the past 3 years, as an Frontend Developer, I’ve worked with big
        companies and up-and-coming startups to successfully help them reach
        their Goals.
      </h3>
      <div
        class="w-fit gap-3 flex text-secondary flex-wrap justify-between mt-5 mx-auto"
        ref="btnsContainer"
      >
        <a
          @click="scrollTo"
          class="main_hoveralble pb-2 text-primary font-semibold capitalize text-[1.12rem] relative"
        >
          View projects</a
        >
        <span> or </span>
        <nuxt-link
          to="/aboutme"
          class="main_hoveralble pb-2 text-primary font-semibold capitalize text-[1.12rem] relative"
          >Read About Me</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
const scrollTo = () => {
  window.scrollTo(0, 400);
};
const title = ref(null);
const stitle = ref(null);
const subtitle = ref(null);
const btnsContainer = ref(null);
const heroText = ref(null);

const initAnimation = () => {
  gsap.set([stitle.value, title.value, subtitle.value, btnsContainer.value], {
    autoAlpha: 0,
    yPercent: 20,
  });

  gsap.set(heroText.value, {
    opacity: 0,
    yPercent: 10,
  });

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to([stitle.value, title.value, subtitle.value, btnsContainer.value], {
    autoAlpha: 1,
    yPercent: 0,
    stagger: 0.50
  }).to(heroText.value, {
    opacity: 1,
    yPercent: 0,
  });
};
onMounted(() => {
  initAnimation();
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  .hero_text {
    position: absolute;
    bottom: 0rem;
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
</style>
