<template>
  <div>
    <MainBanner/>
    <FeaturedStart/>
    <CategoriesStart/>
    <ProductStart/>
    <AdvertisingStart/>
  </div>
</template>

<script>
import MainBanner from "@/components/Main/MainBanner/MainBanner";
import FeaturedStart from "@/components/Main/FeaturedStart/FeaturedStart";
import CategoriesStart from "@/components/Main/CategoriesStart/CategoriesStart";
import ProductStart from "@/components/Main/ProductsStart/ProductStart";
import AdvertisingStart from "@/components/Main/AdvertisingStart/AdvertisingStart";

export default {
  components: {
    AdvertisingStart,
    ProductStart,
    MainBanner,
    FeaturedStart,
    CategoriesStart
  }
}
</script>

<style scoped>

</style>
