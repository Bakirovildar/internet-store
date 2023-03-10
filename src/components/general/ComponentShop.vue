<template>
  <div class="product-offer mb-30" style="height: 200px;">
    <img class="img-fluid" :src="img" alt="">
    <div class="offer-text">
      <h6 class="text-white text-uppercase">{{ sale }}</h6>
      <h3 class="text-white mb-3">{{ offer }}</h3>
      <a href="" class="btn btn-primary">Shop Now</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sale', 'offer', 'img']

}
</script>

<style scoped>

</style>
