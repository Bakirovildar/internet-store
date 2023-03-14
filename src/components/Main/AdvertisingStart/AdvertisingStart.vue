<template>
  <div class="container-fluid pt-5 pb-3">
    <div class="advertisingOl">
      <AdvertisingCard/>
      <AdvertisingCard/>
    </div>
  </div>
</template>

<script>
import AdvertisingCard from "@/components/general/AdvertisingCard/AdvertisingCard";

export default {
  components: {AdvertisingCard}
}
</script>

<style scoped>
.advertisingOl {
  display: flex;
}

@media all and (min-width: 0px) and (max-width: 992px) {
  .advertisingOl {
    display: block;
  }
}
@media all and (min-width: 992px) {
  .advertisingOl {
    display: flex;
  }
}
</style>
