export default {
  props: { baseUrl: { type: String, required: true, default: '' } },
  mounted() {
    window.fbAsyncInit = function () {
      // eslint-disable-next-line no-undef
      FB.init({
        appId: '766566871423551',
        cookie: true,
        xfbml: true,
        version: 'v4.0',
      })
    }
    ;(function (d, s, id) {
      let js
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      // eslint-disable-next-line prefer-const
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/es_ES/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')

    setTimeout(() => {
      this.initCreationFacebookComments()
    }, 3000)
  },
  methods: {
    initCreationFacebookComments() {
      // eslint-disable-next-line no-undef
      FB.XFBML.parse() // Refres comments the XFBML
    },
  },
}

// export default {
//   data() {
//     return { isFBReady: false }
//   },
//   mounted() {
//     // debugger
//     // this.isFBReady = Vue.FB != undefined
//     window.addEventListener('fb-sdk-ready', this.onFBReady)
//   },
//   beforeDestroy() {
//     window.removeEventListener('fb-sdk-ready', this.onFBReady)
//   },
//   methods: {
//     onFBReady() {
//       this.isFBReady = true
//     },
//   },
// }
