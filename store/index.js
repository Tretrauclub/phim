export const state = () => ({
  moviesTypes: [],
  allMoviesArr: [],
  moviesLatestArr: [],
  movie: [],
  countClick: 0,
  sink: false,
})

export const mutations = {
  addAllMoviesArr(state, payload) {
    state.allMoviesArr = payload
    localStorage.setItem('allMoviesArr', JSON.stringify(payload))
  },
  addMoviesLatestArr(state, payload) {
    state.moviesLatestArr = payload
  },
  addMovie(state, payload) {
    state.movie = payload
  },
  countClick(state) {
    state.countClick++
  },
  sink(state, payload) {
    state.sink = payload
  },
}

export const actions = {
  async nuxtServerInit(contextVue, context) {
    const moviesLatestArr = await context.$axios
      .$get('https://hhtq.tv/api/top20newest')
      .catch(() => (contextVue.state.moviesLatestArr = []))
    if (moviesLatestArr) {
      contextVue.state.moviesLatestArr = moviesLatestArr
    }
  },
  countClick({ commit }) {
    commit('countClick')
  },
  setSink({ commit }, payload) {
    commit('sink', payload)
  },
}
