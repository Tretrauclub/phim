<template>
  <div
    class="
      filter-nav
      col-md-9
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <span v-if="!$device.isMobile" class="filter-nav__label"
      >PHIM
      <span class="font-weight-bold"><slot name="category"></slot></span>
      MỚI CẬP NHẬT <i class="fas fa-chevron-right pl-2"></i
    ></span>
    <span
      v-for="(type, index) in moviesTypes"
      :key="index"
      class="_filter-btn text-muted"
      :class="{ _active: filterActiveCode == type.code }"
      @click="setMoviesCodeType(type.code)"
      >{{ type.value }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    moviesTypes: {
      type: Array,
      default() {},
    },
  },
  data() {
    return {
      filterActiveCode: '0',
    }
  },
  methods: {
    setMoviesCodeType(codeType) {
      this.filterActiveCode = codeType
      this.$emit('moviesCodeType', codeType)
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-nav {
  &__label {
    color: var(--yellow1);
    font-size: 24px;
    text-transform: uppercase;
    i {
      font-size: 16px;
    }
  }
  ._filter-btn {
    font-size: 17px;
  }
}
</style>
