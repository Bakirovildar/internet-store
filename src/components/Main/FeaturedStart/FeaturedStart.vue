<template>
  <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
      <ComponentFeature
          v-for="item in feature"
          :key="item.id"
          :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import ComponentFeature from "@/components/general/ComponentFeature";

export default {
  mounted() {
    this.feature = this.featured
  },
  components: {ComponentFeature},
  data() {
    return {
      feature: []
    }
  },
  computed: {
    ...mapGetters(['featured'])
  }
}
</script>

<style scoped>

</style>
