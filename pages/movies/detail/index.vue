<template>
  <div class="container">
    <div class="row">
      <div class="detail__direct col-md-12"></div>
    </div>
    <div class="row">
      <div class="col-dm-9">
        <h1 class="text-center">{{ movie.name }}</h1>
      </div>
      <div class="col-dm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: this.$route.params,
    }
  },
}
</script>

<style>
.ads-h {
  width: 146px;
  background: #333;
}
</style>
