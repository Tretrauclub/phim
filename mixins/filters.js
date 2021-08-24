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
    getYear(value) {
      return new Date(value).getFullYear()
    },
  },
}
