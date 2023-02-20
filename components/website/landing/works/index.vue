<template>
  <section class="mywork mt-4" ref="myWork">
    <v-container fluid>
      <MainTitle title="My Projects" subtitle="Selected Projects" />
      <div class="wrapper flex gap-1 mt-8 h-screen">
        <div class="projects-info flex-1 relative overflow-hidden h-[80vh]">
          <div
            v-for="(item, index) in projects"
            :key="`p-info${index}`"
            class="text-container absolute top-0 w-full h-full translate-y-[100%]"
            :class="{ last: projects.length - 1 == index }"
          >
            <div class="sort py-8 px-4 font-bold">{{ `0${index + 1}` }}</div>
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
        <div class="projects-imgs flex-1 relative overflow-hidden h-[80vh]">
          <div
            v-for="(project, index) in projects"
            :key="`p-imgs${index}`"
            class="_img-container absolute w-full h-full overflow-hidden"
            :class="{ last: projects.length - 1 == index }"
          >
            <img
              v-for="(item, index) in project.imgs"
              :key="index"
              :src="item"
              alt="my projects"
              :data-delay="0.01 * index"
              :style="imgsStyled(index)"
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
  // let bodyScrollBar = Scrollbar.init(document.body, {
  //   damping: 0.1,
  //   delegateTo: document,
  // });
  gsap.set(pImgs.querySelectorAll("._img-container"), {
    zIndex: (i, target, targets) => targets.length - i,
  });

  let images = gsap.utils.toArray(
    pImgs.querySelectorAll("._img-container:not(.last)")
  );

  images.forEach((image, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => "top -" + window.innerHeight * (i + 0.5),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });

    tl.to(image, { height: '0%' });
  });

  //- text aniamtion
  gsap.set(pInfo.querySelectorAll(".text-container"), {
    zIndex: (i, target, targets) => targets.length - i,
  });
  let textArray = gsap.utils.toArray(pInfo.querySelectorAll(".text-container"));

  textArray.forEach((text, i) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,
      },
    });
    if (textArray.length - 1 !== i) {
      tl.to(text, { duration: 0.33, opacity: 1, y: "0%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    } else {
      tl.to(text, { duration: 0.33, opacity: 1, y: "0%" });
    }
  });
  ScrollTrigger.create({
    trigger: section,
    scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + (images.length + 1) * window.innerHeight,
    invalidateOnRefresh: true,
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
const imgsStyled = (i) => {
  const defObj = { height: "80vh", transform: "scale(0.7)" };
  if (i == 0) {
    const style = Object.assign({ left: "2vw", filter: "blur(0.8px)" }, defObj);
    return style;
  }
  if (i == 1) {
    const style = Object.assign(
      { right: "5vw", filter: "blur(1.2px)" },
      defObj
    );
    return style;
  }
  if (i == 2) {
    const style = Object.assign(
      { right: "2vw", filter: "blur(0.6px)" },
      defObj
    );
    return style;
  }
  if (i == 3) {
    const style = Object.assign({ left: "0vw" }, defObj);
    return style;
  }
};
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  initAnimation();
});
</script>

<style lang="scss" scoped>
.projects-imgs {
  position: relative;
  img {
    position: absolute;
    object-fit: contain;
    transition: transform 0.2s ease-out 0s;
  }
}
</style>
