<template>
  <div class="container-fluid">
    <InfoNav/>
    <HeaderMain/>
  </div>
</template>

<script>
import InfoNav from "@/components/Header/HeaderInfo/InfoNav";
import HeaderMain from "@/components/Header/HeaderMain/HeaderMain";

export default {
  components: {HeaderMain, InfoNav}
}
</script>

<style scoped>

</style>
