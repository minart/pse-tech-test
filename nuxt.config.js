export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tech-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  css: ['~/assets/css/layout'],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: [
        'faHome', 
        'faMugHot', 
        'faShoppingCart',
        'faChevronRight',
        'faChevronLeft',
        'faDungeon',
        'faSearch',
        'faPlus',
        'faInfo'
      ],
    }
  },

  googleFonts: {
    families: {
      Roboto: true,
      Caveat: [700],
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
