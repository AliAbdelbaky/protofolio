<template>
  <v-footer class="d-flex flex-column">
    <div class=" pt-5 text-primary border-t-2 border-secondary d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2  text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Ali Abdelbaqy</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>

