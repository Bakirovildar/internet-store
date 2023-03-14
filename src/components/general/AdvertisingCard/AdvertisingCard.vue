<template>
  <div class="advertising-wrapper col-md-6">
    <div class="aa1-a ace1">
      <div class="xd6 dx9 xd8" style="color: rgb(255, 255, 255); background-color: rgba(3, 8, 13, 0.48);">
        <span>Реклама</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path fill="currentColor"
                d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1 2v3a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0Z"></path>
        </svg>
      </div>
    </div>
    <img loading="lazy" src="https://ir.ozone.ru/s3/cms/4c/t45/wc700/huawei_1392x400.jpg"
         style="height: 200px;">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.advertising-wrapper {
  border-radius: 12px;
  cursor: pointer;
  flex-grow: 1;
  margin: 10px 5px;
  overflow: hidden;
  position: relative;
}

.advertising-wrapper img {
  width: 100%;
}

.ace1 {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 6px;
  z-index: 5;
}

@media all and (min-width: 0px) and (max-width: 992px) {
  .advertising-wrapper {
    min-width: 100%;
  }
}
@media all and (min-width: 992px) {
  .advertising-wrapper {
    min-width: 300px;
  }
}

</style>
