<template>
    <n-carousel autoplay>
      <img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
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
          src="https://images.unsplash.com/photo-1563391506244-af91a410fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      >
      <img
          class="carousel-img" src="https://images.unsplash.com/photo-1563391506244-af91a410fcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80">
    </n-carousel>
</template>

<script>

export default {

}
</script>

<style>
.carousel-img {
  width: 100%;
  height: 430px;
  object-fit: cover;
}
.n-carousel.n-carousel--bottom .n-carousel__dots {
  transform: translateX(-50%);
  bottom: 40px;
  left: 50%;
}
</style>
