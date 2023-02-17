<template>
  <div class="bg-black text-center">
    <div class="text-center text-primary">homepage</div>
    <!-- <v-icon icon="home" /> -->
  </div>
  <v-alert
    type="error"
    title="Alert title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
  ></v-alert>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style scoped></style>
