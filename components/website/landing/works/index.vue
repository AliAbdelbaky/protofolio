<template>
  <section class="work" ref="wrapperRef">
    <v-container fluid>

      <div
        v-for="(item, index) in projects"
        :key="`p-info${index}`"
        class="flex items-center warpper"
      >
        <div class="desc flex-1">
          <div class="info-wrapper h-screen opacity-0">
            <div
              class="text-container w-full h-full"
              :class="{ last: projects.length - 1 == index }"
            >
              <div class="sort py-2 px-4 font-bold">{{ `0${index + 1}` }}</div>
              <div
                class="info flex flex-col flex-nowrap"
                style="padding: 5% 5% 5% 10%"
              >
                <h2 class="text-7xl font-semibold mb-5">{{ item.name }}</h2>
                <h5 class="text-5xl mb-5">{{ item.role }}</h5>
                <p class="text-2xl">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pics flex-1">
          <div class="imgs-wrapper h-screen relative w-full">
            <div
              v-for="(_item, _index) in item.imgs"
              :key="_index"
              class="_img-container absolute max-w-xs max-h-80"
            >
              <img
                :src="_item"
                class="w-full h-full object-contain max-h-80"
                alt=""
                :data-scrub="0.5 * _index"
              />
            </div>
          </div>
        </div>
      </div>

    </v-container>
  </section>
</template>

<script setup>
import mobile1 from "~~/assets/imgs/hompage/work/mobile_1.png";
import mobile2 from "~~/assets/imgs/hompage/work/mobile_2.png";
import mobile3 from "~~/assets/imgs/hompage/work/mobile_3.png";
import mobile4 from "~~/assets/imgs/hompage/work/mobile_4.png";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const wrapperRef = ref(null);
const initAnimation = () => {
  const wrappers = wrapperRef.value.querySelectorAll(".warpper");
  const wrapperArray = gsap.utils.toArray(wrappers);
  wrapperArray.forEach((wrapper, $wIndex) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        scrub: 1,
        toggleActions: "play none reverse none",
        toggleClass: "active",
      },
    });
    const imgList = gsap.utils.toArray(
      wrapper.querySelectorAll(".pics .imgs-wrapper ._img-container")
    );

    imgList.forEach((img, $imgIndex) => {
      tl.to(
        img,
        {
          ease: "power3",
          duration: 3,
          y: "-100%",
        },
        `+= ${parseFloat(img.dataset.scrub) || 0.1}`
      );
    });
  });
};

const projects = ref([
  {
    name: "Grand community",
    role: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eaque?",
    imgs: [mobile1, mobile2, mobile3, mobile4],
  },
  {
    name: "Grand community",
    role: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eaque?",
    imgs: [mobile4, mobile1, mobile3, mobile2],
  },
  {
    name: "Grand community",
    role: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eaque?",
    imgs: [mobile4, mobile1, mobile3, mobile2],
  },
  {
    name: "Grand community",
    role: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eaque?",
    imgs: [mobile4, mobile1, mobile3, mobile2],
  },
]);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  initAnimation();
});
</script>

<style scoped lang="scss">
.warpper {
  .info-wrapper {
    transition: all 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateY(-20px);
  }
  &.active {
    .info-wrapper {
      opacity: 1 !important;
      transform: translateY(0px);
    }
  }
}
.imgs-wrapper {
  ._img-container {
    &:nth-child(1) {
      top: 20vh;
      left: 1vw;
      z-index: 2;
      filter: blur(0.5px) drop-shadow(2px 4px 6px black);
    }
    &:nth-child(2) {
      bottom: -20vh;
      left: 8vw;
      height: 70vh;
      transform: scale(1.2);
      filter: drop-shadow(2px 4px 6px black);
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 2;
      top: 10vh;
      right: 1vw;
      transform: scale(1.5);
      filter: drop-shadow(2px 4px 6px black);
    }
    &:nth-child(4) {
      bottom: -30vh;
      right: 2vw;
      filter: blur(0.6px) drop-shadow(2px 4px 6px black);
      transform: scale(0.9);
    }
  }
}
</style>
