<template>
  <div class="container-fluid pt-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
        class="bg-secondary pr-3">{{ header }}</span></h2>
    <div class="row px-xl-5 pb-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header']
}
</script>

<style scoped>

</style>
