<template>
  <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
    <div class="d-flex align-items-center bg-light mb-4" style="padding: 30px;">
      <IconDone color="#FFD333" v-if="title === 'Quality Product'"/>
      <IconShip color="#FFD333" v-if="title === 'Free Shipping'"/>
      <IconReturn color="#FFD333" v-if="title === '14-Day Return'"/>
      <IconSupport color="#FFD333" v-if="title === '24/7 Support'"/>
      <h5 class="font-weight-semi-bold pl-2 m-0">{{ title }}</h5>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import IconDone from "@/icons/IconDone";
import IconShip from "@/icons/IconShip";
import IconReturn from "@/icons/IconReturn";
import IconSupport from "@/icons/IconSupport";

export default defineComponent({
  props: ['title'],
  components: {
    IconSupport,
    IconReturn,
    IconShip,
    IconDone

  }
})
</script>

<style scoped>

</style>
