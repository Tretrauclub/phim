<template>
  <div
    class="container movies3d__wrapper"
    :class="{ _ismobile: $device.isMobile }"
  >
    <div class="row movies3d__filter bg-component py-2">
      <h5
        v-if="$device.isMobile"
        class="col-12 text-muted text-center font-weight-bold"
      >
        Phim 3D
      </h5>
      <CommonFilterMoviesNavbar
        :movies-types="moviesTypes"
        @moviesCodeType="getMoviesCodeType"
      >
        <template slot="category"> 3D </template>
      </CommonFilterMoviesNavbar>
    </div>

    <div class="row bg-component">
      <section class="col-md-9 p-0 p-3 movies3d__card-moves">
        <CommonListCardMovies :movies-arr="moviesSorted" />
      </section>
      <div class="movies3d__movies-latest scroll-dark col-md-3">
        <CommonListMoviesLatest :movies-latest-arr="moviesLatestArr" />
      </div>
    </div>
  </div>
</template>

<script>
import cardMoviesController from '@/mixins/cardMoviesController.js'

export default {
  name: 'Movies3d',
  mixins: [cardMoviesController],

  async asyncData({ $axios }) {
    const moviesArr = await $axios.$get('https://hhtq.tv/api/movies/2')
    return { moviesArr }
  },
  head() {
    return {
      title: 'Phim hoạt hình 3D',
    }
  },
}
</script>
<style lang="scss" scoped>
.movies3d {
  &__filter {
    border-bottom: 2px solid var(--mainbackground);
    ._filter-btn {
      cursor: pointer;
      color: var(--gray2);
      transition: 0.3s all ease;
      &:hover {
        color: var(--white);
      }
    }
  }
  &__card-moves {
    border-right: 2px solid var(--mainbackground);
  }
}
</style>
