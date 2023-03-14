<template>
  <ComponentWrapper header="Recent products">
    <ComponentCard
        v-for="card in recentProducts"
        :key="card.id"
        :product-name="card.productName"
        :old-price="card.oldPrice"
        :new-price="card.newPrice"
        :average="card.average"
        :all-stars="card.allStars"
        :img="card.img"
        :id="card.id"
    />
  </ComponentWrapper>
</template>

<script>
import ComponentWrapper from "@/components/general/ComponentWrapper";
import {mapGetters} from "vuex";
import ComponentCard from "@/components/general/CardComponent/ComponentCard";
export default {
  mounted() {
    this.recentProducts = this.recentProduct
  },
  components: {ComponentCard, ComponentWrapper},
  data() {
    return {
      recentProducts: []
    }
  },
  computed: {
    ...mapGetters(['recentProduct'])
  }
}
</script>

<style scoped>

</style>
