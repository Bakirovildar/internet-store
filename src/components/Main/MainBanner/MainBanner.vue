<template>
  <div class="container-fluid mb-3">
    <div class="row px-xl-5">
      <div class="col-lg-8">
        <SliderBanner/>
      </div>
      <div class="col-lg-4">
        <ComponentShop v-for="shop in shopComponentData" :key="shop" :img="shop.img" :sale="shop.sale" :offer="shop.offer"/>
      </div>
    </div>
  </div>
</template>

<script>
import SliderBanner from "@/components/Main/MainBanner/SliderBanner/SliderBanner";
import ComponentShop from "@/components/general/ComponentShop";

export default {
  components: {ComponentShop, SliderBanner},
  data() {
    return {
      shopComponentData: [
        {
          img: 'https://images.unsplash.com/photo-1624377149599-65e4b8cd6fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          sale: 'SAVE 20%',
          offer: 'Special Offer'
        },
        {
          img: 'https://images.unsplash.com/photo-1624377225030-f0bb343eaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
          sale: 'SAVE 20%',
          offer: 'Special Offer'
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
