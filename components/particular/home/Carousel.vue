<template>
  <VueSlickCarousel :arrows="false" :dots="true" :autoplay="true">
    <div
      v-for="(movie, id) in moviesSlideArrRemake"
      :key="id"
      class="row carousel__slide-atom m-0"
    >
      <div class="_content col-md-8">
        <a href="#">
          <div class="_content_title">{{ movie.name }}</div>
        </a>
        <div class="_content_info mt-2">
          <span class="_star"
            ><i
              v-for="star in 5"
              :key="star"
              :class="{ active: star <= movie.star }"
              class="fas fa-star"
            ></i
          ></span>
          <span class="_episodes mx-3"
            ><i class="fab fa-stack-overflow mr-1 text-warning"></i
            >{{ movie.episodes }} Tập
          </span>
          <span class="_date"
            ><i class="far fa-calendar-alt mr-1 text-warning"></i
            >{{ movie.release_date }}</span
          >
        </div>
        <div class="_description mt-2">
          <p>
            {{ movie.description }}
          </p>
          <p class="_director">
            <span class="text-warning font-weight-bold">Đạo diễn:</span>
            {{ movie.author }}
          </p>
          <p class="_genre">
            <span class="text-warning font-weight-bold">Thể loại:</span>
            <i class="">{{ movie.type_name }}</i>
          </p>
        </div>
      </div>
      <img class="_image-bg" :src="movie.banner" :alt="movie.name" />
      <nuxt-link
        :to="('movies/detail/' + movie.name + '?id=' + movie.id) | removeMark"
        class="carousel__button btn btn-warning text-danger shadow"
        ><i class="fas fa-play-circle"></i><strong>Xem Phim</strong></nuxt-link
      >
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import removeMark from '~/mixins/filters.js'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel,
  },
  mixins: [removeMark],
  props: {
    moviesSlideArr: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {}
  },
  computed: {
    moviesSlideArrRemake() {
      return this.moviesSlideArr.map((movie) => {
        if (movie.description.length > 278) {
          movie.description = `${movie.description.substring(0, 278)} ...`
        }
        return movie
      })
    },
  },
}
</script>

<style lang="scss">
.carousel {
  &__slide-atom {
    position: relative;
    display: block !important;
    ._content {
      position: absolute;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      &_title {
        font-size: 37px;
        color: white;
        font-weight: bold;
      }
    }
    ._image-bg {
      height: 450px;
      width: 855px;
    }
  }
  &__button {
    position: absolute;
    padding: 10px 20px;
    right: 10px;
    bottom: 40px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 3px 8px;
    z-index: 1;
    display: flex;
    align-items: center;
    line-height: 1;
    i {
      font-size: 25px;
      margin-right: 10px;
    }
  }
}
// slick-slider customization
.slick-slider {
  .slick-dots {
    bottom: 15px;
    li {
      button {
        &::before {
          font-size: 12px;
          color: var(--white);
        }
      }
    }
  }
}
</style>
