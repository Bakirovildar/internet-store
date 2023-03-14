<template>
  <ComponentWrapper header="Categories">
    <CategoriesCard
        v-for="card in categoryCard"
        :key="card.id"
        :title="card.categoryName"
        :description="card.howManyProducts"
        :img="card.img"
    />
  </ComponentWrapper>
</template>

<script>
import {mapGetters} from "vuex";
import ComponentWrapper from "@/components/general/ComponentWrapper";
import CategoriesCard from "@/components/general/CategoriesCard";

export default {
  components: {CategoriesCard, ComponentWrapper},
  mounted() {
    this.categoryCard = this.categoryProducts
  },
  data() {
    return {
      categoryCard: []
    }
  },
  computed: {
    ...mapGetters((['categoryProducts']))
  }
}
</script>

<style scoped>

</style>
