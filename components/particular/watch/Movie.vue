<template>
  <div class="mt-2 _watch">
    <!-- idea: truyền vào 1 prop chứa các link frame. khi click vào mỗi tập sẽ thay thế frame vào -->
    <div class="_wrap">
      <div v-if="!$device.isMobile">
        <div
          class="_previous btn"
          :class="{ 'btn-secondary': isEpMin, 'btn-warning': !isEpMin }"
        >
          <span @click="previousEp()"
            ><i class="fas fa-step-backward mr-2"></i>Tập trước</span
          >
        </div>
        <div
          class="_next btn"
          :class="{ 'btn-secondary': isEpMax, 'btn-warning': !isEpMax }"
        >
          <span @click="nextEp()"
            >Tập tiếp<i class="fas fa-step-forward ml-2"></i
          ></span>
        </div>
      </div>
      <iframe
        :src="frameSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="_eps-control mt-2">
      <div v-if="$device.isMobile">
        <div class="float-left ml-2 mb-2 btn btn-sm btn-warning">
          <span @click="previousEp()"
            ><i class="fas fa-step-backward mr-2"></i>Tập trước</span
          >
        </div>
        <div class="float-right mr-2 mb-2 btn btn-sm btn-warning">
          <span @click="nextEp()"
            >Tập tiếp<i class="fas fa-step-forward ml-2"></i
          ></span>
        </div>
      </div>
      <div>
        <div class="col-md-12 d-flex p-0">
          <div
            class="_server col-3"
            :class="{ '_active _server-active': serverName === 1 }"
            @click="changeServer(1)"
          >
            <p class="text-center">Server 1</p>
          </div>
          <div
            class="_server col-3"
            :class="{ '_active _server-active': serverName === 2 }"
            @click="changeServer(2)"
          >
            <p class="text-center">Server 2</p>
          </div>
          <div
            class="_server col-3"
            :class="{ '_active _server-active': serverName === 3 }"
            @click="changeServer(3)"
          >
            <p class="text-center">Server 3</p>
          </div>
          <div
            class="_server col-3"
            :class="{ '_active _server-active': serverName === 4 }"
            @click="changeServer(4)"
          >
            <p class="text-center">Server 4</p>
          </div>
        </div>
        <div class="_eps">
          <div v-show="serverName === 1" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              :ref="`sv1-${index}`"
              class="_sub"
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_1, index)"
            >
              {{ ep.name }}
            </div>
          </div>
          <div v-show="serverName === 2" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              :ref="`sv2-${index}`"
              class="_sub"
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_2, index)"
            >
              {{ ep.name }}
            </div>
          </div>
          <div v-show="serverName === 3" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              :ref="`sv3-${index}`"
              class="_sub"
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_3, index)"
            >
              {{ ep.name }}
            </div>
          </div>
          <div v-show="serverName === 4" class="_ep">
            <div
              v-for="(ep, index) in eps"
              :key="index"
              :ref="`sv4-${index}`"
              class="_sub"
              :class="{ _active: linkActive == index }"
              @click="selectLink(ep.link_4, index)"
            >
              {{ ep.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eps: {
      type: Array,
      default() {},
    },
    film: {
      type: [Object, Array],
      default() {},
    },
  },
  data() {
    return {
      serverName: 1,
      hideYoutobeLogo: '?modestbranding=1',
      link: null,
      epActive: this.eps.length - 1,
      linkActive: this.eps.length - 1,
      isEpMax: false,
      isEpMin: false,
    }
  },
  computed: {
    frameSrc() {
      return this.movieSrc + this.hideYoutobeLogo
    },
    movieSrc() {
      if (this.link != null) {
        return this.link
      }
      const lastEp = this.eps.length - 1
      return this.eps[lastEp].link_1
    },
  },
  methods: {
    changeServer(server) {
      const ref = this.$refs
      ref[`sv${server}-${this.epActive}`][0].click()
      return (this.serverName = server)
    },
    selectLink(link = '', index) {
      this.link = link
      this.linkActive = index
      this.epActive = index
    },
    previousEp() {
      if (this.epActive === 0) return (this.isEpMin = true)
      this.isEpMin = false
      this.isEpMax = false
      this.epActive = this.epActive - 1
      const ref = this.$refs
      ref[`sv${this.serverName}-${this.epActive}`][0].click()
    },
    nextEp() {
      if (this.epActive === this.eps.length - 1) return (this.isEpMax = true)
      this.isEpMax = false
      this.isEpMin = false
      this.epActive = this.epActive + 1
      const ref = this.$refs
      ref[`sv${this.serverName}-${this.epActive}`][0].click()
    },
  },
}
</script>
<style lang="scss" scoped>
._watch {
  ._wrap {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    ._previous {
      position: absolute;
      top: 0;
      left: 0;
      margin-left: 10px;
      margin-top: 10px;
      visibility: hidden;
      opacity: 0;
      z-index: 9999;
      transition: all 0.3s ease 0s;
    }
    ._next {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 10px;
      margin-top: 10px;
      visibility: hidden;
      opacity: 0;
      z-index: 9999;
      transition: all 0.3s ease 0s;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:hover ._previous {
      visibility: unset;
      opacity: 1;
    }
    &:hover ._next {
      visibility: unset;
      opacity: 1;
    }
  }
  ._eps-control {
    ._server {
      color: var(--gray2);
      font-weight: bold;
      border-bottom: 5px solid;
      padding-top: 15px;
      cursor: pointer;
    }
    ._eps {
      min-height: 160px;
      background: var(--dark1);
      ._active {
        background: #ffc107 !important;
        color: #335666 !important;
      }
      ._ep {
        color: var(--yellow1) !important;
        padding: 15px;
        ._sub {
          display: inline-block !important;
          background: var(--dark3);
          padding: 8px 10px;
          margin: 5px;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background: var(--yellow2);
            color: var(--dark3);
            transition: 0.3s all ease;
          }
        }
      }
    }
  }
  ._server-active {
    background: var(--dark1);
  }
}
</style>
