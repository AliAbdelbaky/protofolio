<template>
  <section class="mywork mt-4" ref="myWork">
    <v-container fluid>
      <MainTitle title="My Projects" subtitle="Selected Projects" />
      <div class="wrapper flex gap-1 mt-5">
        <div class="projects-info flex-1">
          <div class="p">
            <div class="sort py-8 px-4 font-bold">01</div>
            <div
              class="info flex flex-col flex-nowrap"
              style="padding: 5% 5% 5% 10%"
            >
              <h2 class="text-7xl font-semibold mb-5">Grand Community</h2>
              <h5 class="text-5xl mb-5">Frontend</h5>
              <p class="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                eaque?
              </p>
            </div>
          </div>
        </div>
        <div class="projects-imgs flex-1">
          <div class="p-1 h-screen relative">
            <img
              v-for="(item, index) in images"
              :key="index"
              :src="item"
              alt="my projects"
              :data-delay="0.01 * index"
            />
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import MainTitle from "../../shared/MainTitle.vue";
import mobile1 from "~~/assets/images/hompage/work/mobile_1.png";
import mobile2 from "~~/assets/images/hompage/work/mobile_2.png";
import mobile3 from "~~/assets/images/hompage/work/mobile_3.png";
import mobile4 from "~~/assets/images/hompage/work/mobile_4.png";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const myWork = ref(null);
const initAnimation = () => {
  const section = myWork.value.querySelector(".wrapper");
  const pInfo = section.querySelector(".projects-info");
  const pImgs = section.querySelector(".projects-imgs");
  gsap.set(section, { autoAlpha: 0, yPercent: -5 });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: myWork.value,
      start: "top +=200", // when the top of the trigger hits the top of the viewport
        end: "bottom +=200", // end after scrolling 500px beyond the start
      scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
      markers: true,
      pin:true,
      snap: false,
      onUpdate: () => {
        console.log("sss");
      },
    },
  });
  tl.to(section, 0.1, { yPercent: 0, autoAlpha: 1 });
  tl.to(pInfo, 0.1, { yPercent: 0, autoAlpha: 1 });
  tl.to(pImgs, 0.1, { yPercent: 0, autoAlpha: 1 });
  // pImgs.querySelectorAll("img").forEach((element) => {
  //   tl.to(
  //     element,
  //     0.1,
  //     { yPercent: "-100%", autoAlpha: 1 },
  //     `-=${Number(element.getAttribute("data-delay") + 1)}`
  //   );
  // });
};
const images = ref([mobile1, mobile2, mobile3, mobile4]);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  initAnimation();
});
</script>

<style lang="scss" scoped>
.projects-imgs {
  img {
    position: absolute;
    object-fit: contain;
    transition: transform 0.2s ease-out 0s;
    &:nth-child(1) {
      bottom: -75vh;
      left: 2vw;
      position: absolute;
      height: 80vh;
      filter: blur(0.8px);
    }
    &:nth-child(2) {
      bottom: -55vh;
      right: 5vw;
      height: 80vh;
      filter: blur(1.2px);
    }
    &:nth-child(3) {
      bottom: -45vh;
      right: 2vw;
      height: 80vh;
      filter: blur(0.6px);
    }
    &:nth-child(4) {
      bottom: -90vh;
      left: 0vw;
      height: 80vh;
    }
  }
}
</style>
