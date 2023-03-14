<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>

import HeaderComponent from "@/components/Header/HeaderComponent";
import MainComponent from "@/components/Main/MainComponent";

export default {
  name: 'App',
  components: {
    MainComponent,
    HeaderComponent
  }
}
</script>

<style>
@import "styles.css";
</style>
