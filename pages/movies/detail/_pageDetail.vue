<template>
  <div class="container detail-movie" :class="{ _ismobile: $device.isMobile }">
    <div class="row">
      <div class="col-md-9 p-0">
        <div class="_banner-wrap">
          <div class="_banner-bg">
            <img
              class="_banner-bg__img"
              :src="movie.banner"
              alt="banner-movie"
            />
            <div class="_banner-bg__blur"></div>
          </div>
          <div class="row _content-wrap">
            <div class="col-md-3 col-sm-3 col-12 _avatar">
              <img class="_img-thumbnail" :src="movie.image" alt="thumbnail" />
              <nuxt-link
                class="btn-wrap"
                :to="`/movies/detail/watch?id=${idMovie}`"
              >
                <i class="far fa-play-circle"></i>
                <button class="btn btn-outline-warning font-weight-bold">
                  XEM PHIM
                </button>
              </nuxt-link>
            </div>
            <div class="col-md-9 col-sm-3 col-12 _content">
              <h5 class="_content__title">{{ movie.name }}</h5>
              <!-- <p class="_content__subtitle">{{ movie.name }}</p> -->
              <div class="_content__description scroll-yellow--small">
                {{ movie.description }}
              </div>
              <div class="row mt-4 text-white _mb-star">
                <div class="col-md-6 _rate">
                  <div class="_rate__label mr-2 text-warning">Đánh giá:</div>
                  <div class="_star">
                    <i
                      v-for="star in 5"
                      :key="star"
                      :class="{ active: star <= movie.star }"
                      class="fas fa-star"
                    ></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <span class="_episodes mr-3"
                    ><i class="fab fa-stack-overflow mr-2 text-warning"></i
                    >{{ movie.episodes }} Tập
                  </span>
                  <span class="_date"
                    ><i class="far fa-calendar-alt mr-2 text-warning"></i
                    >{{ movie.release_date | getYear }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 p-0">
        <div class="home__movies-latest ml-2">
          <CommonListMoviesLatest v-if="!$device.isMobile" />
        </div>
      </div>
    </div>
    <!-- <div class="row bg-component mt-2 _watch"></div> -->
    <div class="row bg-component mt-2">
      <component :is="watchComponent" class="col-md-12 mb-4"></component>
      <div class="detail-movie__navbar col-md-12">
        <span>Thông tin phim</span>
      </div>
      <div class="detail-movie__infor-movie col-md-12">
        <div class="row pt-2">
          <div class="col-md-6 _infor-level-1">
            <ul class="_infor-level-2">
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Trạng thái: </span
                ><span class="text-white">{{ movie.film_status }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Thể loại:</span>
                <span class="text-white">{{ movie.type_name }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Quốc gia:</span>
                <span class="text-white">{{ movie.country_name }}</span>
              </li>
            </ul>
          </div>
          <div class="col-md-6 _infor-level-1">
            <ul class="_infor-level-2">
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Độ phân giải:</span
                ><span class="text-white">{{ movie.type_name }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Ngôn ngữ:</span
                ><span class="text-white">Việt sub</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">IMDb:</span>
                <span class="text-white">{{ movie.imdb }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CommonListMoviesLatest v-if="$device.isMobile" class="mt-2" />
    <div class="col-12 d-flex justify-content-center">
      <div
        class="fb-comments"
        :data-href="`https://hhtq.tv/movies/detail?id=${idMovie}`"
        data-width="100%"
        data-order-by="reverse_time"
        data-numposts="5"
      ></div>
    </div>
  </div>
</template>

<script>
import facebookConfig from '@/mixins/facebookConfig'
import filters from '~/mixins/filters.js'

export default {
  mixins: [filters, facebookConfig],
  async asyncData(context) {
    const idMovie = context.query.id
    const epMovie = context.query.tap || 1
    const movie = await context.$axios.$get(
      `https://hhtq.tv/api/movies/detail/${idMovie}`
    )
    return { movie, epMovie, idMovie }
  },
  data(context) {
    return {
      watchComponent: '',
    }
  },
  head() {
    return {
      title: this.movie.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.movie.description,
        },
        {
          property: 'og:title',
          content: this.movie.name,
        },
        {
          property: 'og:description',
          content: this.movie.description,
        },
        {
          property: 'og:image',
          content: this.movie.banner,
        },
      ],
    }
  },
  mounted() {
    this.$store.commit('addMovie', this.movie)
  },
}
</script>

<style lang="scss" scoped>
.detail-movie {
  ._banner-wrap {
    position: relative;
    ._banner-bg {
      &__img {
        width: 100%;
        height: 448px;
      }
      &__blur {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #000000b6;
      }
    }
    ._content-wrap {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      margin: 0 20px;
      ._avatar {
        position: relative;
        ._img-thumbnail {
          width: 100%;
          max-height: 200px;
        }
        .btn-wrap {
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 100%;
          transition: 0.5s all ease;
          cursor: pointer;
          z-index: 3;
          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 75px;
            color: var(--yellow1);
            opacity: 0;
            transition: 0.5s all ease;
          }
          .btn {
            position: absolute;
            bottom: -50px;
            left: 50%;
            transform: translate(-50%);
          }
          &:hover {
            background: #00000096;
          }
          &:hover i {
            opacity: 1;
          }
        }
      }
      ._content {
        &__title {
          color: var(--yellow1);
          font-weight: bold;
        }
        &__subtitle {
          color: var(--white);
        }
        &__description {
          height: 100px;
          max-height: 117px;
          font-size: 13px;
          overflow-y: scroll;
          color: var(--gray2);
        }
        ._rate {
          display: flex;
        }
      }
    }
  }
  &__navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--yellow1);
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    width: 100%;
    height: 45px;
    border-bottom: 2px solid var(--mainbackground);
  }
  &__infor-movie {
    ul {
      li {
        margin: 10px 0;
      }
    }
  }
  &._ismobile {
    ._banner-wrap {
      ._banner-bg__img {
        height: 580px;
      }
      // ._banner-bg__blur {
      //   height: 525px;
      // }
      ._content-wrap {
        height: 100%;
        ._avatar {
          display: flex;
          justify-content: center;
          ._img-thumbnail {
            width: 125px;
            padding-top: 20px;
          }
        }
        ._content {
          ._content__title {
            margin-top: 60px;
          }
          ._mb-star {
            margin: 0 !important;
            text-align: center;
            ._rate {
              justify-content: center;
            }
          }
        }
      }
    }
    .detail-movie__infor-movie {
      font-size: 12px;
      ._infor-level {
        &-2 {
          padding: 0 !important;
        }
        &-3 {
          text-align: center;
        }
      }
    }
  }
}
</style>
