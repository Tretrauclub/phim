<template>
  <!-- ListCardMovies -->
  <div class="row card-moves">
    <!-- <div v-show="!(moviesArr.length > 0)" class="col-12 text-center text-muted">
      <p>Đang cập nhật dữ liệu ...</p>
    </div> -->
    <article
      v-for="(movie, index) in moviesArr"
      :key="index"
      class="col-md-3 col-sm-6 col-6 _card"
    >
      <nuxt-link
        :to="
          `/movies/detail/${movie.name}?id=${movie.film_id || movie.id}&tap=${
            movie.ep_name || 'all'
          }` | removeMark
        "
      >
        <div>
          <figure class="Objf TpMvPlay AAIco-play_arrow">
            <img
              :src="movie.image"
              :alt="movie.name"
              :title="movie.name"
              class="_image"
            />
          </figure>
        </div>
        <div class="_episodes">
          <span class="font-weight-bold">{{
            movie.ep_name || movie.episodes || ''
          }}</span>
        </div>
        <h2 :title="movie.name" class="_title m-0">{{ movie.name }}</h2>
        <div class="_rate-group">
          <div class="_star">
            <i
              v-for="star in 5"
              :key="star"
              :class="{ active: star <= movie.star }"
              class="fas fa-star"
            ></i>
          </div>
          <span class="_date">
            <i class="far fa-calendar-alt"></i
            >{{ movie.release_date | getYear }}</span
          >
        </div>
      </nuxt-link>
    </article>
  </div>
</template>

<script>
import filters from '~/mixins/filters.js'

export default {
  name: 'ListCardMovies',
  mixins: [filters],
  props: {
    moviesArr: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.card-moves {
  ._card {
    position: relative;
    padding-bottom: 25px;
  }
  ._image {
    width: 100%;
    border-radius: 3px;
  }
  ._title {
    color: var(--white);
    font-size: 14px;
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
  }
  ._rate-group {
    line-height: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ._date {
      font-size: 13px;
      text-align: center;
      color: var(--gray1);
      i {
        font-size: 14px;
        color: var(--gray1);
        margin-right: 5px;
      }
    }
  }
  ._episodes {
    position: absolute;
    top: 0;
    background: #ffc107;
    padding: 3px 8px;
    border-radius: 20px;
    color: #e91e63;
    margin: 5px;
    box-shadow: rgb(2 2 2 / 30%) 0 3px 8px;
    & :not(:first-child) {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
