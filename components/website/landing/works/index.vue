<template>
  <div class="hhh">
    <h2>hiiiii</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const initAnimation = () => {
  const dives = document.querySelector(".hhh");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: dives,
        start: "top +=200", // when the top of the trigger hits the top of the viewport
        end: "bottom +=200", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
        markers: true,
        snap: true,
        onUpdate: () => {console.log('sss')},
      },
    });
    tl.fromTo(
      dives,
      0.1,
      { yPercent: 0, autoAlpha: 1 },
      { yPercent: -20, autoAlpha: 0 }
    );
};

onMounted(() => {
  initAnimation();
});
</script>

<style lang="scss" scoped></style>
