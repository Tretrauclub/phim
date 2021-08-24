<template>
  <div class="container detail-movie" :class="{ _ismobile: $device.isMobile }">
    <div class="row">
      <div class="col-md-9 p-0">
        <div class="_banner-wrap">
          <div class="_banner-bg">
            <img
              class="_banner-bg__img"
              :src="movie.film.banner"
              alt="banner-movie"
            />
            <div class="_banner-bg__blur"></div>
          </div>
          <div class="row _content-wrap">
            <div class="col-md-3 col-sm-3 col-12 _avatar">
              <img
                class="_img-thumbnail"
                :src="movie.film.image"
                alt="thumbnail"
              />
            </div>
            <div class="col-md-9 col-sm-3 col-12 _content">
              <h5 class="_content__title">{{ movie.film.name }}</h5>
              <!-- <p class="_content__subtitle">{{ movie.film.name }}</p> -->
              <div class="_content__description scroll-yellow--small">
                {{ movie.film.description }}
              </div>
              <div class="row mt-4 text-white _mb-star">
                <div class="col-md-6 col-6 _rate">
                  <div class="_rate__label mr-2 text-warning">Đánh giá:</div>
                  <div class="_star">
                    <i
                      v-for="star in 5"
                      :key="star"
                      :class="{ active: star <= movie.film.star }"
                      class="fas fa-star"
                    ></i>
                  </div>
                </div>
                <div class="col-md-6 col-6">
                  <span class="_episodes mr-3"
                    ><i class="fab fa-stack-overflow mr-2 text-warning"></i>
                    {{ movie.film.episodes }} Tập
                  </span>
                  <span class="_date"
                    ><i class="far fa-calendar-alt mr-2 text-warning"></i
                    >{{ movie.film.release_date | getYear }}</span
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
      <!-- <component :is="watchComponent" class="col-md-12 mb-4"></component> -->
      <div class="watch-wrap">
        <ParticularWatchMovie
          class="col-md-12 mb-4"
          :eps="movie.eps"
          :film="movie.film"
        />
      </div>
      <div class="detail-movie__navbar col-md-12">
        <span>Thông tin phim</span>
      </div>
      <div class="detail-movie__infor-movie col-md-12">
        <div class="row pt-2">
          <div class="col-md-6 _infor-level-1">
            <ul class="_infor-level-2">
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Danh mục: </span
                ><span class="text-white">{{ movie.film.category_name }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Thể loại:</span>
                <span class="text-white">{{ movie.film.type_name }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Quốc gia:</span>
                <span class="text-white">{{ movie.film.country_name }}</span>
              </li>
            </ul>
          </div>
          <div class="col-md-6 _infor-level-1">
            <ul class="_infor-level-2">
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Độ phân giải:</span
                ><span class="text-white">{{ movie.film.type_name }}</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">Ngôn ngữ:</span
                ><span class="text-white">Việt sub</span>
              </li>
              <li class="_infor-level-3">
                <span class="text-warning mr-2">IMDb:</span>
                <span class="text-white">{{ movie.film.imdb }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <div
        class="fb-comments"
        :data-href="`https://hhtq.tv/movies/detail/watch?id=${idMovie}`"
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
      `https://hhtq.tv/api/movies/detail/episodes/${idMovie}`
    )
    return { movie, epMovie, idMovie }
  },
  data() {
    return {
      watchComponent: 'ParticularWatchWatchMovie',
      movie: [],
    }
  },
  head() {
    return {
      title: this.movie.film.name,
      meta: [
        {
          property: 'og:title',
          content: this.movie.film.name,
        },
        {
          property: 'og:description',
          content: this.movie.film.description,
        },
        {
          property: 'og:image',
          content: this.movie.film.banner,
        },
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=766566871423551&autoLogAppEvents=1',
          async: true,
          defer: true,
          crossorigin: 'anonymous',
          nonce: 'D0kcS3T7',
        },
      ],
    }
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
          max-height: 210px;
        }
      }
      ._content {
        padding: 0;
        &__title {
          color: var(--yellow1);
          font-weight: bold;
        }
        &__subtitle {
          color: var(--white);
        }
        &__description {
          height: 100px;
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
  .watch-wrap {
    width: 100%;
    ._watch {
      padding: 0;
    }
  }
  &._ismobile {
    ._banner-wrap {
      ._content-wrap {
        ._avatar {
          position: relative;
          margin-top: 0 !important;
          ._img-thumbnail {
            width: 150px;
            display: block;
            margin: 0 auto;
            border-radius: 10px;
          }
        }
        ._content {
          padding-top: 20px;
          ._mb-star {
            font-size: 13px;
            margin-top: 15px !important;
          }
          ._content__title {
            font-size: 20px;
          }
          ._rate {
            justify-content: flex-end;
          }
          .mb-subinfo {
            display: flex;
            justify-content: flex-end;
          }
          &__description {
            max-height: 212px;
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
    ._watch {
      margin-top: 0 !important;
      ._eps-control {
        ._eps {
          font-size: 12px !important;
        }
      }
    }
  }
}

@media only screen and (max-width: 360px) {
  .detail-movie {
    &._ismobile {
      ._banner-wrap {
        ._content-wrap {
          ._content {
            ._mb-star {
              font-size: 11px;
              margin-top: 13px !important;
              ._star {
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
