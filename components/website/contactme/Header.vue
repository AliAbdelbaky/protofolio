<template>
  <section class="header">
    <div class="map-container relative h-screen flex">
      <div class="text-container" ref="textRef">
        <i v-for="(item, index) in slogan" :key="index">
          {{ item }}
        </i>
      </div>
      <div class="img-container w-full overflow-hidden relative">
        <GlobeVue />
      </div>
    </div>
  </section>
</template>

<script setup>
import GlobeVue from "./globe.vue";
import gsap from "gsap";
const slogan = "letsworktogether".split("");
const textRef = ref(null);
onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 0.2 } });
  const textArr = gsap.utils.toArray(textRef.value.querySelectorAll("i"));

  textArr.forEach((el) => {
    tl.fromTo(el, { opacity: 0, y: 19 }, { opacity: 1, y: 0 });
  });
});
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
    pointer-events: none;
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
  pointer-events: none;
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
</style>
