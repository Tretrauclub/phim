<template>
  <div class="header _navbar mb-2" :class="{ _ismobile: $device.isMobile }">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <nuxt-link class="_logo navbar-brand" to="/"
        ><img class="_logoimg" src="/logo.png" alt="hoạt hình trung quốc"
      /></nuxt-link>
      <button class="navbar-toggler bar-stack">
        <span class="navbar-toggler-icon" @click="controllMenuMobile()"></span>
        <div v-show="menuMobile" class="menu-mobile">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ml-3" @click="controllMenuMobile(false)">
              <nuxt-link to="/2d-movies" class="_t-hover-yellow _link"
                >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
              >
            </li>
            <li class="nav-item ml-4 _mt-mb" @click="controllMenuMobile(false)">
              <nuxt-link to="/3d-movies" class="_t-hover-yellow _link"
                >HOẠT HÌNH 3D<span class="sr-only">(current)</span></nuxt-link
              >
            </li>
          </ul>
        </div>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active ml-3">
            <nuxt-link to="/2d-movies" class="_t-hover-yellow"
              >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li class="nav-item ml-4">
            <nuxt-link to="/3d-movies" class="_t-hover-yellow"
              >HOẠT HÌNH 3D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
        </ul>
        <form class="search-form form-inline my-2 my-lg-0">
          <input
            v-model="searchName"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Tìm kiếm tên anime"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-warning my-2 px-4 my-sm-0"
            type="submit"
            @click.prevent="searchMovie()"
          >
            <i class="fas fa-search"></i>
          </button>
          <div
            v-show="searchName && !EmptySearch && !isClickSearch"
            class="_search-result bg-component scroll-yellow--small"
            @click="removeSearchRs()"
          >
            <nuxt-link
              v-for="(rs, index) in searchResult"
              :key="index"
              class="d-flex _movie-rs"
              :to="('/movies/detail/' + rs.name + '?id=' + rs.id) | removeMark"
            >
              <div>
                <img
                  :src="rs.image"
                  :alt="rs.name"
                  :title="rs.name"
                  class="_image"
                />
              </div>
              <div class="_detail">
                <div class="mt-2 d-flex">
                  <i class="_icon fas fa-video"></i>
                  <div class="_detail__name">{{ rs.name }}</div>
                </div>
                <div class="d-flex mt-3">
                  <i class="_icon far fa-calendar-alt"></i>
                  <span>{{ rs.release_date | getYear }}</span>
                </div>
                <div class="_star">
                  <span class="_star__label">Sao:</span>
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="{ active: star <= rs.star }"
                    class="fas fa-star"
                  ></i>
                </div>
              </div>
            </nuxt-link>
          </div>
        </form>
        <!-- <div>
          <div class="nav-item dropdown">
            <a class="nav-lang dropdown-toggle" href="#" role="button">
              Lang
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div> -->
      </div>
      <form
        v-if="$device.isMobile"
        class="search-form _mb form-inline my-lg-0 w-100"
      >
        <div class="d-flex align-items-center w-100">
          <input
            v-model="searchName"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Tìm kiếm tên anime"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-warning my-2 px-4 my-sm-0 ml-2"
            type="submit"
            @click.prevent="searchMovie()"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div
          v-show="searchName && !EmptySearch && !isClickSearch"
          class="_search-result bg-component scroll-yellow--small __mb"
          @click="removeSearchRs()"
        >
          <nuxt-link
            v-for="(rs, index) in searchResult"
            :key="index"
            class="d-flex _movie-rs"
            :to="('/movies/detail/' + rs.name + '?id=' + rs.id) | removeMark"
          >
            <div>
              <img
                :src="rs.image"
                :alt="rs.name"
                :title="rs.name"
                class="_image"
              />
            </div>
            <div class="_detail">
              <div class="mt-2 d-flex">
                <i class="_icon fas fa-video"></i>
                <div class="_detail__name">{{ rs.name }}</div>
              </div>
              <div class="d-flex mt-3">
                <i class="_icon far fa-calendar-alt"></i>
                <span>{{ rs.release_date | getYear }}</span>
              </div>
              <div class="_star">
                <span class="_star__label">Sao:</span>
                <i
                  v-for="star in 5"
                  :key="star"
                  :class="{ active: star <= rs.star }"
                  class="fas fa-star"
                ></i>
              </div>
            </div>
          </nuxt-link>
        </div>
      </form>
      <div
        v-show="searchResult.length > 0"
        class="_full-screen"
        @click="closeSubSearchResult()"
      ></div>
      <div v-show="sink" class="result-search" @click="closeSubSearchResult()">
        <i class="_close fas fa-times"></i>
        <div class="container result-search_layout">
          <h3 class="mb-5 text-warning text-center">Kết quả tìm kiếm</h3>
          <p
            v-show="searchResult.length === 0"
            class="text-center font-weight-bold text-muted"
          >
            không tìm thấy kết quả.
          </p>
          <CommonListCardMovies :movies-arr="searchResult" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import filter from '~/mixins/filters.js'

export default {
  filters: {
    removeMark(value) {
      return value
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .replace(/ /g, '-')
        .toLowerCase()
    },
  },
  mixins: [filter],
  data() {
    return {
      searchName: '',
      isClickSearch: false,
      EmptySearch: false,
      menuMobile: false,
      allMovies: this.$store.state.allMoviesArr,
    }
  },
  computed: {
    allMoviesArr() {
      return this.$store.state.allMoviesArr
    },
    searchResult() {
      if (this.searchName === '') {
        return false
      }
      return this.allMovies.filter((movie) => {
        const newName = this.removeMarkLowerCase(movie.name)
        const newSearchName = this.removeMarkLowerCase(this.searchName)
        return newName.includes(newSearchName)
      })
    },
    // countClick() {
    //   return this.$store.state.countClick
    // },
    sink() {
      return this.$store.state.sink
    },
  },
  watch: {
    searchName() {
      return (this.EmptySearch = false)
    },
    // countClick() {
    //   if (this.searchName) {
    //     setTimeout(() => {
    //       this.searchName = ''
    //       return (this.EmptySearch = true)
    //     }, 200)
    //   }
    // },
  },
  async created() {
    let movies = ''
    if (this.allMovies.length === 0) {
      if (!localStorage.getItem('allMoviesArr')) {
        movies = await this.$axios.get('https://hhtq.tv/api/home')
        return (this.allMovies = movies.data.all_film)
      }
      this.allMovies = JSON.parse(localStorage.getItem('allMoviesArr'))
    }
  },
  methods: {
    removeMarkLowerCase(value) {
      return value
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
    },
    searchMovie() {
      if (this.searchName === '') return

      this.$store.dispatch('setSink', true)
      this.isClickSearch = true
    },
    removeSearchRs() {
      this.searchResult.splice(0, this.searchResult.length)
      this.searchName = ''
      setTimeout(() => {
        this.EmptySearch = true
      }, 0)
    },
    controllMenuMobile(value = 'toggle') {
      if (value === 'toggle') {
        return (this.menuMobile = !this.menuMobile)
      }
      return (this.menuMobile = value)
    },
    closeSubSearchResult() {
      // return this.$store.dispatch('countClick')
      this.isClickSearch = false
      this.searchName = ''
      this.$store.dispatch('setSink', false)
      this.EmptySearch = true
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 96px;
  position: relative;
  // .bar-stack {
  // }
  &._navbar {
    .navbar {
      background: var(--componentbackground);
      width: 100%;
      ._logo {
        ._logoimg {
          height: 38px;
        }
      }
      a {
        color: var(--white);
      }
      .navbar-nav {
        font-weight: bold;
      }
      .nav-lang {
        margin-left: 16px;
        color: var(--gray2);
        font-size: 13px;
      }
      .search-form {
        position: relative;
        input {
          background: var(--dark1);
          border: 2px solid var(--gray1);
        }
        ._search-result {
          width: 100%;
          max-height: 420px;
          padding: 0 10px;
          overflow-y: scroll;
          position: absolute;
          z-index: 99;
          top: 42px;
          ._movie-rs {
            height: 150px;
            border-bottom: 2px solid;
          }
          ._image {
            height: 100%;
            width: 90px;
          }
          ._detail {
            color: var(--gray2);
            padding: 20px 10px 10px 10px;
            ._icon {
              color: var(--yellow1);
              margin-right: 10px;
            }
            &__name {
              text-overflow: ellipsis;
              width: 125px;
              overflow: hidden;
              white-space: nowrap;
            }
            ._star {
              margin-top: 10px;
              &__label {
                font-size: 13px;
                font-weight: bold;
                color: var(--yellow1);
                margin-right: 10px;
              }
            }
          }
        }
      }
      ._full-screen {
        height: calc(100vh - 96px);
        width: 100vw;
        position: fixed;
        overflow-y: scroll;
        top: 96px;
        left: 0;
        // background: #444;
        background: #0000003d;
        z-index: 1;
      }
      .result-search {
        height: calc(100vh - 96px);
        width: 100vw;
        position: fixed;
        overflow-y: scroll;
        top: 96px;
        left: 0;
        z-index: 3;
        ._close {
          font-size: 30px;
          color: #fff;
          padding: 15px;
          position: absolute;
          right: 0;
          top: 0;
          margin: 10px 10px 0 0;
        }
        &_layout {
          padding-top: 60px;
        }
      }
    }
  }
  &._ismobile {
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      ._logo {
        ._logoimg {
          height: 27px;
        }
      }
      .search-form {
        &._mb {
          .form-control {
            height: 32px;
          }
          .btn {
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
              font-size: 12px;
            }
          }
          ._search-result {
            top: 100%;
          }
        }
      }
    }
    .bar-stack {
      .menu-mobile {
        position: absolute;
        right: 0;
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        z-index: 100;
        top: 50px;
        background: #313534e0;
        border-radius: 0 0 20px 20px;
        padding: 12px;
        .navbar-nav {
          width: 100%;
          .nav-item {
            margin: 0 !important;
            width: 100%;
            padding: 25px 0;
            border: 2px solid;
            border-radius: 10px;
            &._mt-mb {
              margin-top: 20px !important;
            }
            ._link {
              // padding: 15px 0;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 991px) and (orientation: landscape) {
  .header._ismobile {
    height: 56px;
    .navbar {
      position: inherit;
      ._logo {
        order: 1;
      }
      .search-form {
        width: auto !important;
        order: 2;
      }
      .bar-stack {
        order: 3;
      }
    }
  }
}
</style>
