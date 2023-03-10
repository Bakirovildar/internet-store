<template>
  <div class="container-fluid">
    <InfoNav/>
    <HeaderMain/>
    <HeaderCategory/>
  </div>
</template>

<script>
import InfoNav from "@/components/Header/HeaderInfo/InfoNav";
import HeaderMain from "@/components/Header/HeaderMain/HeaderMain";
import HeaderCategory from "@/components/Header/HeaderCategory/HeaderCategory";

export default {
  components: {HeaderCategory, HeaderMain, InfoNav}
}
</script>

<style scoped>

</style>
