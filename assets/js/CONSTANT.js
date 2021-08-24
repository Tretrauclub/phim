const MOVIE_CONSTANT = {
  // object const movie type
  MOVIE_TYPE: {
    MOVIE_TYPE_ALL: '0',
    MOVIE_TYPE_ACTION: '1',
    MOVIE_TYPE_MAGIC: '2',
    MOVIE_TYPE_HAREM: '3',
  },
  MOVIE_CATEGORY: {
    MOVIE_2D: 1,
    MOVIE_3D: 2,
  },
}

const constant = {
  getCostant(contName) {
    let constValue = ''
    MOVIE_CONSTANT.forEach((key, value) => {
      try {
        if (contName === key) {
          return (constValue = value)
        }
        return constValue
      } catch (error) {
        return constValue
      }
    })
  },
}

export { MOVIE_CONSTANT, constant }
