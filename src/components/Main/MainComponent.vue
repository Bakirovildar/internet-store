<template>
  <div>
    <MainBanner/>
    <FeaturedStart/>
    <CategoriesStart/>
    <ProductStart/>
  </div>
</template>

<script>
import MainBanner from "@/components/Main/MainBanner/MainBanner";
import FeaturedStart from "@/components/Main/FeaturedStart/FeaturedStart";
import CategoriesStart from "@/components/Main/CategoriesStart/CategoriesStart";
import ProductStart from "@/components/Main/ProductsStart/ProductStart";

export default {
  components: {
    ProductStart,
    MainBanner,
    FeaturedStart,
    CategoriesStart
  }
}
</script>

<style scoped>

</style>
