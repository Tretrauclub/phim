<template>
  <div class="container">
    <!-- <h1 v-if="error.statusCode === 404" class="text-center text-white"> -->
    <!-- Page not found -->
    <!-- </h1> -->
    <h1 v-if="error" class="text-center text-white 1">{{ error }}</h1>
    <h1 v-else class="text-center text-white">An <b>error</b> occurred</h1>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  props: {
    error: {
      type: String,
      default() {
        // return { statusCode: '' }
      },
    },
  },
}
</script>
