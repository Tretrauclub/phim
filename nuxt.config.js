export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Phim hoạt hình Trung Quốc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Phim hoạt hình Trung Quốc mới' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://hhtq.tv' },
      { property: 'fb:app_id', content: '766566871423551' },
      {
        property: 'og:image:url',
        content: 'https://i.ibb.co/Hzkt1m7/logo.png',
      },
      {
        property: 'og:description',
        content:
          'Những bộ phim hoạt hình 3D 2D Trung Quốc với đồ họa đẹp mắt, nội dung hấp hẫn. Top những bộ phim hoạt hình 3D 2D Trung Quốc kinh điển, hay nhất mọi thời đại!',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Những bộ phim hoạt hình 3D 2D Trung Quốc với đồ họa đẹp mắt, nội dung hấp hẫn. Top những bộ phim hoạt hình 3D 2D Trung Quốc kinh điển, hay nhất mọi thời đại!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,regular,italic,500,700,900%7CCatamaran:100,200,300,regular,500,600,700,800,900%7CNunito:regular&amp;subset=latin,vietnamese',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
    ],
    script: [
      // api google
      {
        type: 'text/javascript',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-DS9GNTH1W1',
        async: true,
      },
      {
        type: 'text/javascript',
        src: '/plugin/google.js',
        body: true,
      },
      // facebook plugin
      {
        type: 'text/javascript',
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        src: 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=766566871423551&autoLogAppEvents=1',
        nonce: 'lkWHkJaC',
      },
      // ads
      {
        type: 'text/javascript',
        async: true,
        src: 'https://api.flygame.io/sdk/widget/hhtq.1141.js',
        body: true,
      },
    ],
  },
  router: {
    linkExactActiveClass: '_active',
  },

  // Custom process bar
  loading: { color: '#ffc107' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/bootstrap.min.css', '@/assets/css/root.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'jquery/',
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap/',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
