<template>
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
</template>

<script>
import ComponentWrapper from "@/components/general/ComponentWrapper";
import ComponentCard from "@/components/general/CardComponent/ComponentCard";
import {mapGetters} from "vuex";

export default {
  components: {ComponentCard, ComponentWrapper},
  mounted() {
    this.featuredCard = this.featuredProduct
  },
  data() {
    return {
      featuredCard: []
    }
  },
  computed: {
    ...mapGetters((['featuredProduct']))
  }
}

</script>

<style scoped>

</style>
