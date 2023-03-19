<template>
  <div
    class="flex md:items-stretch flex-col min-h-[50vh] md:min-h-full md:flex-row warpper transition-all i py-[8%] my-9 px-3"
    ref="wrapperElement"
  >
    <div
      class="desc md:flex-1 flex md:items-center justify-start opacity-0"
      ref="textContainer"
    >
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
        class="_img-container max-w-xs md:max-w-[50%] max-h-80"
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
const imgsSpeed = [0.5, 0.4, 0.5, 0.1];

interface WorkType {
  cardData: SingleWork;
}
// @ts-ignore
const props = defineProps<WorkType>();
// @ts-ignore
const wrapperElement = ref(null);
// @ts-ignore
const imageContainer = ref(null);
// @ts-ignore
const textContainer = ref(null);

const initAnimation = () => {
  const imgsAnimation = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: wrapperElement.value,
        markers: false,
        invalidateOnRefresh: true,
        scrub: 3,
      },
    });
    const imgs = gsap.utils.toArray(
      // @ts-ignore
      imageContainer.value?.querySelectorAll("._img-container")
    );
    tl.to(imgs, {
      y: "-110%",
      // stagger: (i, el) => parseFloat(el.getAttribute("data-speed")),
      duration: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    });
  };
  const textAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperElement.value,
        markers: false,
        invalidateOnRefresh: true,
        scrub: 3,
      },
    });
    tl.to(textContainer.value, { opacity: 1 }, "-=1");
  };

  gsap.registerPlugin(ScrollTrigger);
  imgsAnimation();
  textAnimation();
};
// @ts-ignore
onMounted(() => {
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
