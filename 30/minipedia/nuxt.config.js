module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  serverMiddleware: [
   {
     path: '/api',
     handler: '~/api/index.js'
   }
  ],
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
   '~/assets/global.css'
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
    'nuxt-basic-auth-module',
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'es',
        file: 'es-ES.js'
      },
      {
        code: 'fr',
        file: 'fr-FR.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
 },
  basic: {
    name: process.env.USERNAME,
    pass: process.env.PASSWORD,
    enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
   baseURL: 'http://localhost:8000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   babel:{
     plugins: [
       ['@babel/plugin-proposal-private-methods', { loose: true }]
     ]
   }
 }
}
