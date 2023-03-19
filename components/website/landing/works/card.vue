<template>
  <div
    class="flex md:items-stretch flex-col min-h-[50vh] md:min-h-full md:flex-row warpper i py-[8%] px-3 border-2"
    ref="wrapperElement"
  >
    <div class="desc md:flex-1 flex md:items-center justify-start">
      <div class="info-wrapper">
        <div class="text-container w-full h-full">
          <div class="sort py-2 px-4 font-bold">
            {{ `0${cardData.index + 1}` }}
          </div>
          <div
            class="info flex flex-col flex-nowrap"
            style="padding: 5% 5% 5% 10%"
          >
            <h2 class="text-7xl font-semibold mb-5">{{ cardData.name }}</h2>
            <h5 class="text-5xl mb-5">{{ cardData.role }}</h5>
            <p class="text-2xl">
              {{ cardData.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pics flex flex-1 relative md:h-[50vh]" ref="imageContainer">
      <div
        v-for="(_item, _index) in cardData.imgs"
        :key="_index"
        class="_img-container max-w-xs max-h-80"
        :data-speed="imgsSpeed[_index]"
      >
        <img :src="_item" class="w-full h-full object-contain max-h-80" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// @ts-ignore
import { SingleWork } from "~~/assets/types/work.type";
const imgsSpeed = [0.25, 0.4, 0.2, 0.1];

interface WorkType {
  cardData: SingleWork;
}
// @ts-ignore
const props = defineProps<WorkType>();
// @ts-ignore
const wrapperElement = ref(null);
// @ts-ignore
const imageContainer = ref(null);

const initAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperElement.value,
      markers: false,
      invalidateOnRefresh: true,
      scrub: 1,
    },
  });
  const imgs = gsap.utils.toArray(
    imageContainer.value?.querySelectorAll("._img-container")
  );
  tl.to(imgs, {
    y: "-100%",
    ease: "easeInOut",
    stagger: (i, el) => parseFloat(el.getAttribute("data-speed")),
  });
  // imgs.forEach((img, i) => {
  //   tl.to(img, {
  //     y: "-100%",
  //     ease: "none",
  //     stagger: 0.5,
  //   });
  // });

  // tl.to(imgs, {
  //   y: "100px",
  //   ease: "none",

  //   delay: (i, el) => parseFloat(el.getAttribute("data-speed")),
  // });
  // const wrapperArray = gsap.utils.toArray(
  //   wrapperRef.value.querySelectorAll(".warpper")
  // );
  // const wrapper = wrapperRef.value.querySelectorAll(".pics ._img-container");
  // gsap.to("[data-speed]", {
  //   y: (i, el) =>
  //     -(1 - parseFloat(el.getAttribute("data-speed"))) *
  //     ScrollTrigger.maxScroll(wrapperRef.value),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: wrapperRef.value,
  //     markers: true,
  //     start: 0,
  //     end: "max",
  //     invalidateOnRefresh: true,
  //     scrub: 4,
  //   },
  // });
  // wrapperArray.forEach((wrapper, $wIndex) => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: wrapper,
  //       markers: true,
  //       start: 0,
  //       end: "max",
  //       invalidateOnRefresh: true,
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });
  //   const imgList = gsap.utils.toArray(
  //     wrapper.querySelectorAll(".pics ._img-container")
  //   );
  //   tl.to(imgList, {
  //     y: (i, el) =>
  //       -(10 - parseFloat(el.getAttribute("data-speed"))) *
  //       ScrollTrigger.maxScroll(wrapperRef.value),
  //     ease: "none",
  //   });
  // });
};
// @ts-ignore
onMounted(() => {
  // requestAnimationFrame(initAnimation);
  initAnimation();
});
</script>

<style lang="scss" scoped>
._img-container {
  position: absolute;
  &:nth-child(1) {
    top: 20%;
    left: 1%;
    z-index: 2;
    filter: blur(0.5px) drop-shadow(2px 4px 6px black);
  }
  &:nth-child(2) {
    bottom: -20%;
    left: 8%;
    height: 70%;
    transform: scale(1.2);
    filter: drop-shadow(2px 4px 6px black);
    z-index: 2;
  }
  &:nth-child(3) {
    z-index: 2;
    top: 10%;
    right: 1%;
    transform: scale(1.5);
    filter: drop-shadow(2px 4px 6px black);
  }
  &:nth-child(4) {
    bottom: -30%;
    right: 2%;
    filter: blur(0.6px) drop-shadow(2px 4px 6px black);
    transform: scale(0.9);
  }
}
</style>
