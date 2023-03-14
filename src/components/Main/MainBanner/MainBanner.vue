<template>
  <div>
    <div class="container-fluid mb-3">
      <div class="row px-xl-5">
        <div class="col-lg-8">
          <SliderBanner/>
        </div>
        <div class="col-lg-4">
          <ComponentShop
              v-for="shop in shopComponentData"
              :key="shop"
              :img="shop.img"
              :sale="shop.sale"
              :offer="shop.offer"
          />
        </div>
      </div>
    </div>

    <div class="container-fluid pt-5">
      <div class="row px-xl-5 pb-3">
        <ComponentFeature
            v-for="item in feature"
            :key="item.id"
            :title="item.title"
        />
      </div>
    </div>

    <ComponentWrapper header="Categories">
      <CategoriesCard
          v-for="card in categoryCard"
          :key="card.id"
          :title="card.categoryName"
          :description="card.howManyProducts"
          :img="card.img"
      />
    </ComponentWrapper>

    <ComponentWrapper header="Featured products">
      <div class="row px-xl-5">
        <ComponentCard
            v-for="card in featuredCard"
            :key="card.id"
            :img="card.img"
            :all-stars="card.allStars"
            :average="card.average"
            :new-price="card.newPrice"
            :old-price="card.oldPrice"
            :product-name="card.productName"
            :id="card.id"
        />
      </div>
    </ComponentWrapper>
  </div>
</template>

<script>
import SliderBanner from "@/components/Main/MainBanner/SliderBanner/SliderBanner";
import ComponentShop from "@/components/general/ComponentShop";
import ComponentFeature from "@/components/general/ComponentFeature";
import {mapGetters} from "vuex";
import ComponentWrapper from "@/components/general/ComponentWrapper";
import CategoriesCard from "@/components/general/CategoriesCard";
import ComponentCard from "@/components/general/CardComponent/ComponentCard";

export default {
  mounted() {
    this.feature = this.featured
    this.categoryCard = this.categoryProducts
    this.featuredCard = this.featuredProduct
  },
  components: {ComponentCard, CategoriesCard, ComponentWrapper, ComponentFeature, ComponentShop, SliderBanner},
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
      ],
      feature: [],
      categoryCard: [],
      featuredCard: []
    }
  },
  computed: {
    ...mapGetters((['featured', 'categoryProducts', 'featuredProduct']))
  }
}
</script>

<style scoped>
</style>
