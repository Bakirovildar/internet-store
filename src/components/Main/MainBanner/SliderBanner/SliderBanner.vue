<template>
  <div class="col-lg-8">
    <n-carousel autoplay>
      <div><img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
        <span class="text-carousel">Hello</span>
      </div>
      <img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
      <img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 430px;
  object-fit: cover;
}

.text-carousel {
  position: absolute;
  left: auto;

  top: 50%;
  color: white;
  font-size: 46px;
}
</style>
