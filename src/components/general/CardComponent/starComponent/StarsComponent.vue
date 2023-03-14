<template>
  <div class="d-flex align-items-center justify-content-center mb-1">
    <n-rate readonly :default-value="+average"/>
    <small>({{ +allStars }})</small>
  </div>
</template>

<script>
export default {
  props: ['allStars', 'average']
}
</script>

<style scoped>

</style>
