<template>
  <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <a class="text-decoration-none" href="">
      <div class="cat-item d-flex align-items-center mb-4">
        <div class="overflow-hidden" style="width: 100px; height: 100px;">
          <img class="img-fluid" :src="img" alt="">
        </div>
        <div class="flex-fill pl-3">
          <h6>{{ title }}</h6>
          <small class="text-body">{{ description }}</small>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'description']
}
</script>

<style scoped>

</style>
