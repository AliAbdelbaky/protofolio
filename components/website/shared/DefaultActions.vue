<template>
  <div class="ball"></div>
  <div
    :class="{ '--scroll': scrollPosition > 300 }"
    class="fixed bottom-0 left-0 right-0 z-20 p-3 flex items-center justify-between"
  >
    <nuxt-link
      to="/contactme"
      class="btn email cursor-pointer bg-[var(--primary)] w-[46px] h-[46px] p-[13px] rounded-full opacity-0 transition-all -translate-y-4"
    >
      <svg
        class="float-left"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        space="preserve"
      >
        <path
          fill="var(--bg)"
          d="M16,17H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3H16a2,2,0,0,1,2,2V15A2,2,0,0,1,16,17Zm0-2V7.619l-6,4.242L4,7.619V15H16ZM4,5V5.705l6,3.429,6-3.429V5H4Z"
        ></path>
      </svg>
      <span
        class="capitalize text-bg overflow-hidden text-xs leading-5 font-medium float-left w-0 opacity-0 transition-all block"
      >
        contact me
      </span>
    </nuxt-link>
    <div
      @click="scrollTop"
      class="btn cursor-pointer bg-[var(--primary)] w-[46px] h-[46px] p-[13px] rounded-full opacity-0 transition-all -translate-y-4"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        space="preserve"
      >
        <path
          fill="var(--bg)"
          d="M18.008,7.667L16.606,9,11,3.627V20H9V3.627L3.392,9l-1.4-1.336L10-.012Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const scrollPosition = ref(null);
const scrollTop = () => {
  window.scrollTo(0, 0);
};
onMounted(() => {
  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.pageX);
    yTo(e.pageY);
  });
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
});
</script>

<style lang="scss" scoped>
.ball {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid dodgerblue;
  border-radius: 50%;
  pointer-events: none;
  z-index: 999;
}
.--scroll {
  .btn {
    opacity: 0.8 !important;
    transform: translateY(0px) !important;
    &:hover {
      opacity: 1 !important;
    }
    &.email {
      &:hover {
        background: #0f141e;
        width: 135px;
        transition: all 0.2s cubic-bezier(0.3, 0, 0.5, 1);
        span {
          margin-inline-start: 11px;
          width: auto !important;
          opacity: 1;
          transition: width 0s linear 0.2s,
            opacity 0.2s cubic-bezier(0.3, 0, 0.5, 1) 0.2s;
        }
      }
    }
  }
}
</style>
