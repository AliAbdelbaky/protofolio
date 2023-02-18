<template>
  <v-toolbar
    density="comfortable"
    class="bg-transparent pt-8 px-7 pb-4 !sticky top-0 z-40"
    style="transition: all 0.1s ease-in-out"
    :class="{ '--scroll': scrollPosition > 50 }"
  >
    <nav class="w-full h-full flex flex-1 justify-between items-center">
      <div class="flex justify-center align-center">
        <div class="logo flex gap-2 items-center cursor-pointer">
          <div
            class="icon px-[10px] py-[12px] w-[51px] border-4 border-primary rounded-full flex items-center justify-center"
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 902.63 746.39"
            >
              <title>Ali Abdelbaky</title>
              <path
                d="M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z"
                transform="translate(-533.75 -332.61)"
              />
              <path
                d="M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z"
                transform="translate(-533.75 -332.61)"
              />
            </svg>
          </div>
          <div class="flex text-start capitalize flex-col">
            <span class="title text-[26px] text-primary font-semibold">{{
              userdata.name
            }}</span>
            <span
              class="subtitle text-[11px] font-bold uppercase"
              style="letter-spacing: 3px"
              >{{ userdata.title }}</span
            >
          </div>
        </div>
      </div>

      <div class="flex justify-end items-center">
        <div
          class="menu flex gap-4 justify-end items-center cursor-pointer text-primary relative transition-all"
        >
          <span class="text pt-1 font-semibold uppercase"> Menu </span
          ><b class="icon block h-[19px] w-[30px] relative">
            <i
              class="block w-full top-0 h-[2px] left-0 bg-primary absolute"
            ></i>
            <i
              class="block w-full top-[9.5px] h-[2px] left-0 bg-primary absolute"
            ></i>
            <i
              class="block w-full top-[19px] h-[2px] left-0 bg-primary absolute"
            ></i>
          </b>
        </div>
        <!-- <v-btn icon>
         <v-icon>mdi-magnify</v-icon>
       </v-btn>
       <v-btn icon @click="setlang(locale == 'ar' ? 'en' : 'ar')">
             {{ locale == "ar" ? "en" : "ar" }}
           </v-btn>
       <v-btn icon @click="toggleTheme">
         <v-icon> mdi-theme-light-dark </v-icon>
       </v-btn> -->
      </div>
    </nav>
  </v-toolbar>
</template>
<script setup>
const scrollPosition = ref(null);
const userdata = reactive({
  name: "Ali Abdelbaqy",
  title: "Frontend Developer",
});
onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
});
</script>
<style lang="scss" scoped>
.--scroll {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
</style>
