<template>
  <div class="main-title">
    <h5 class="apacing_h">{{ title }}</h5>
    <h1 class="bigText">{{ subtitle }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style lang="scss" scoped>
.apacing_h {
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--secoundry);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-top: 5px;
  margin-left: 7px;
  font-weight: 600;
}
.bigText {
  color: var(--primary);
  font-size: 4.5rem;
  line-height: 4.6875rem;
  padding-top: 1px;
  padding-bottom: 4px;
  padding-left: 4px;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
