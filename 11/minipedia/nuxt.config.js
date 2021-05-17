export default {
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Minipedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  }, 
  server: {
   port: 8000,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   {
    src: '~/plugins/v-tooltip.js', mode: 'client'
   }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
   '~/modules/envalid.js'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-basic-auth-module'
  ],
  basic: {
    name: process.env.USERNAME,
    pass: process.env.PASSWORD,
    enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   babel:{
     plugins: [
       ['@babel/plugin-proposal-private-methods', { loose: true }]
     ]
   }
 }
}
