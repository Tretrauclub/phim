<template>
  <div class="list-movies-v">
    <div v-for="(movie, id) in movies" :key="id" class="sub-card">
      <div class="sub-card__title">
        {{ movie.name }}
      </div>
      <div class="sub-card__image mx-auto">
        <img src="@/assets/image/movie-sub-card.png" alt="sub-card" />
      </div>
      <div class="sub-card__content">
        <div class="sub-card__content__detail">
          <span class="_label">Quan tâm: </span>
          <span class="_numview">{{ movie.view }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, name: 'Quá nhanh quá nguy hiểm 9', view: '123.123.456' },
        { id: 2, name: 'Đặc vụ', view: '123.123' },
        { id: 3, name: 'Phim thứ 5', view: '323.129' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.list-movies-v {
  .sub-card {
    background: var(--componentbackground);
    padding: 10px;
    &__image {
      width: 130px;
      img {
        width: 130px;
      }
    }
    &__title {
      color: var(--white);
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }
    &__content {
      color: var(--white);
      &__detail {
        display: flex;
        justify-content: center;
        font-size: 13px;
        ._numview {
          color: var(--yellow1);
        }
      }
    }
    &:not(:first-child) {
      border-top: 1px var(--mainbackground) solid;
    }
  }
}
</style>
