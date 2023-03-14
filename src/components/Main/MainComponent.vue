<template>
  <div>
    <MainBanner/>
    <FeaturedStart/>
    <CategoriesStart/>
    <ProductStart/>
    <AdvertisingStart/>
    <RecentStart/>
  </div>
</template>

<script>
import MainBanner from "@/components/Main/MainBanner/MainBanner";
import FeaturedStart from "@/components/Main/FeaturedStart/FeaturedStart";
import CategoriesStart from "@/components/Main/CategoriesStart/CategoriesStart";
import ProductStart from "@/components/Main/ProductsStart/ProductStart";
import AdvertisingStart from "@/components/Main/AdvertisingStart/AdvertisingStart";
import RecentStart from "@/components/Main/RecentStart/RecentStart";

export default {
  components: {
    AdvertisingStart,
    ProductStart,
    MainBanner,
    FeaturedStart,
    CategoriesStart,
    RecentStart
  }
}
</script>

<style scoped>

</style>
