const moviesSlideArr = [
  {
    id: 1,
    name: 'Vệt nắng cuối trời',
    author: 'N/A',
    country: 'Nhật Bản',
    category: 'Kiếm hiệp, Tình cảm',
    episodes: 25,
    description:
      'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cựcTrong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
    star: '2',
    technology: '3d',
    date: '2021',
    type: '1',
    image:
      'https://167008220.global.cdnfastest.com/storage20/hh247/images/1556074567-hatsune-miku-magical-mirai-2017_slider.jpg',
  },
  {
    id: 2,
    name: 'Ngày mai trời lại sáng',
    author: 'Abx-xxxx',
    country: 'Mỷ',
    category: 'Kiếm hiệp, Tình cảm',
    episodes: 25,
    description:
      'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
    star: '4',
    technology: '3d',
    date: '2021',
    type: '2',
    image:
      'https://167008220.global.cdnfastest.com/storage20/hh247/images/thinh-the-trang-nuong-f2743_slider.jpg',
  },
  {
    id: 3,
    name: 'Vệt nắng cuối trời',
    author: 'N/A',
    country: 'Nhật Bản',
    category: 'Kiếm hiệp, Tình cảm',
    episodes: 25,
    description:
      'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cựcĐược tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
    star: '1',
    technology: '3d',
    date: '2021',
    type: '1',
    image:
      'https://167008220.global.cdnfastest.com/storage20/hh247/images/tham-tu-lung-danh-conan-f439_slider.jpg',
  },
  {
    id: 4,
    name: 'Ngày mai trời lại sáng',
    author: 'N/A',
    country: 'Mỷ',
    category: 'Kiếm hiệp, Tình cảm',
    episodes: 25,
    description:
      'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
    star: '4',
    technology: '3d',
    date: '2021',
    type: '2',
    image:
      'https://167008220.global.cdnfastest.com/storage20/hh247/images/1556074567-hatsune-miku-magical-mirai-2017_slider.jpg',
  },
  {
    id: 5,
    name: 'Vệt nắng cuối trời',
    author: 'N/A',
    country: 'Nhật Bản',
    category: 'Kiếm hiệp, Tình cảm',
    episodes: 25,
    description:
      'Trong một biến cố bất ngờ, cậu học sinh trung học buồn tẻ Hiro Yuuki đã có được trò chơi nhập vai lặn đầy đủ Kiwame Quest. Được tạo ra bởi công nghệ tốt nhất, trò chơi tuyên bố đưa thực tế đến cùng cực',
    star: '4',
    technology: '3d',
    date: '2021',
    type: '2',
    image:
      'https://167008220.global.cdnfastest.com/storage20/hh247/images/1556074567-hatsune-miku-magical-mirai-2017_slider.jpg',
  },
]

const moviesTypes = [
  { code: '0', value: 'Tất cả' },
  { code: '1', value: 'Kiếm hiệp' },
  { code: '2', value: 'Phép thuật' },
  { code: '3', value: 'Harem' },
]

const moviesLatestArr = [
  { id: '1', name: 'Super Cub' },
  {
    id: '1',
    name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA',
  },
  {
    id: '1',
    name: 'Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara',
  },
  { id: '1', name: 'Nanatsu no Taizai: Fundo no Shinpan' },
  { id: '1', name: 'Shadows House' },
  { id: '1', name: 'Osananajimi ga Zettai ni Makenai Love Comedy' },
  { id: '1', name: 'Super Cub' },
  {
    id: '1',
    name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA',
  },
  {
    id: '1',
    name: 'Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara',
  },
  { id: '1', name: 'Nanatsu no Taizai: Fundo no Shinpan' },
  { id: '1', name: 'Shadows House' },
  { id: '1', name: 'Osananajimi ga Zettai ni Makenai Love Comedy' },
  { id: '1', name: 'Super Cub' },
  {
    id: '1',
    name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen OVA',
  },
]

export { moviesTypes, moviesSlideArr, moviesLatestArr }
