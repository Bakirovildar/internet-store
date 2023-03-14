<template>
  <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div
        @click="clickCardHandler(id)"
        class="product-item bg-light mb-4 cardComponent">
      <div class="product-img position-relative overflow-hidden heightImg">
        <img class="img-fluid w-100" :src="img" alt="">
      </div>
      <div class="text-center py-4">
        <a class="h6 text-decoration-none text-truncate" href="">{{ productName }}</a>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <h5>{{ newPrice }}</h5>
          <h6 class="text-muted ml-2">
            <del>{{ oldPrice }}</del>
          </h6>
        </div>
        <StarsComponent :all-stars="allStars" :average="average"/>
      </div>
    </div>
  </div>
</template>

<script>
import StarsComponent from "@/components/general/CardComponent/starComponent/StarsComponent";

export default {
  props: ['img', 'productName', 'oldPrice', 'newPrice', 'allStars', 'average', 'id'],
  components: {StarsComponent},
  methods: {
    clickCardHandler(id) {
      console.log('id', id)
    }
  }
}
</script>

<style scoped>
.cardComponent {
  cursor: pointer;
}

.heightImg {
  height: 320px;
}
</style>
