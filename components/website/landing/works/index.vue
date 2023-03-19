<template>
  <section class="work">
    <v-container fluid>
      <div v-for="(item, index) in projects" :key="index">
        <WorkCard :cardData="{ index, ...item }" />
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import mobile1 from "~~/assets/imgs/hompage/work/mobile_1.png";
import mobile2 from "~~/assets/imgs/hompage/work/mobile_2.png";
import mobile3 from "~~/assets/imgs/hompage/work/mobile_3.png";
import mobile4 from "~~/assets/imgs/hompage/work/mobile_4.png";

// @ts-ignore
import WorkCard from "./card.vue";

// @ts-ignore
import { SingleWork } from "~~/assets/types/work.type";

// @ts-ignore
const projects = ref<SingleWork[]>([
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
    imgs: [mobile1, mobile2, mobile3, mobile4],
  },
]);

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
</style>
