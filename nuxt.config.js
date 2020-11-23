export default {
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
  components: true,
  css: ['~/assets/css/layout'],
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],
  plugins: [
    '~/plugins/app'
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
        'faInfo',
        'faMinus'
      ],
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      Caveat: [700],
    }
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://henri-potier.xebia.fr'
  },
  build: {
  }
}
