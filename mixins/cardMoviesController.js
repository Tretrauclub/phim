import { moviesTypes, moviesLatestArr } from '@/commonjs/movies.js'
import { MOVIE_CONSTANT } from '~/assets/js/CONSTANT.js'
export default {
  data() {
    return {
      moviesLatestArr,
      moviesTypes,
      moviesSorted: [],
    }
  },
  mounted() {
    this.moviesSorted = this.moviesArr
  },
  methods: {
    getMoviesCodeType(codeType) {
      if (codeType === MOVIE_CONSTANT.MOVIE_TYPE.MOVIE_TYPE_ALL) {
        this.moviesSorted = this.moviesArr
      } else {
        this.moviesSorted = this.moviesArr.filter(
          (movie) => movie.type === codeType
        )
      }
    },
  },
}
