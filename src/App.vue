<template>
  <HeaderComponent/>
  <MainBanner/>
</template>

<script>

import HeaderComponent from "@/components/Header/HeaderComponent";
import MainBanner from "@/components/Main/MainBanner/MainBanner";

export default {
  name: 'App',
  components: {
    MainBanner,
    HeaderComponent
  }
}
</script>

<style>
@import "styles.css";
</style>
