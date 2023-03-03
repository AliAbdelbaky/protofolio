<template>
  <section class="header">
    <div class="map-container relative h-screen flex">
      <div class="text-container">
        <i v-for="(item, index) in slogan" :key="index">
          {{ item }}
        </i>
      </div>
      <div class="img-container w-full overflow-hidden relative">
        <img
          :src="Africaimg"
          alt=" contact me header ali abdelbaqy location"
          class="w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Africaimg from "~~/assets/imgs/contactme/africa.svg";

import Three from "./Three.vue";
const slogan = "letsworktogether".split("");
</script>

<style lang="scss" scoped>
.map-container {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000010;
    background: linear-gradient(0deg, #fff 2%, rgba(0, 0, 0, 0) 31%);
  }
}
.text-container {
  filter: drop-shadow(6px 19px 71px #00000096);
  position: absolute;
  top: 0;
  right: 0;
  width: 664px;
  height: 630px;
  z-index: 22;
  i {
    position: relative;
    float: left;
    display: block;
    width: 80px;
    height: 80px;
    font-family: "Helvestica Now Display DW", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 4.5rem;
    line-height: 5.25rem;
    color: #cfd0d2;
    text-align: center;
    margin: 110px 84px 0 0;
    text-transform: uppercase;
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 0px 84px 0 0;
    }
    &:nth-child(3) {
      &::after {
        position: absolute;
        display: block;
        top: 0;
        right: -13px;
        content: "\2019";
      }
    }
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      color: var(--secoundry);
    }
    &:nth-child(8) {
      color: var(--primary);
    }
  }
}
.img-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    transform: translate(-8vw, 10px);
    filter: blur(0.6px);
  }
  &::after,
  &::before {
    position: absolute;
    content: "";
    top: 9rem;
    right: 34rem;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
  &::after {
    animation-name: fade;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
  }
  &::before {
    animation-name: fade-two;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform: scale(0.4);
    z-index: 30;
  }
}
@keyframes fade {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
}
@keyframes fade-two {
  0%,
  100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 0;
  }
} ;
</style>
