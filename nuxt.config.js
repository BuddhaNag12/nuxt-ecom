const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  transition: 'test',
  mode: 'universal',
  srcDir: 'src',
  buildDir: process.env.NODE_ENV === 'development' ? 'src/.nuxt' : 'functions/.nuxt',

  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: "Tstore" || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // router: {
  //   middleware: 'routerValidate'
  // },
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fireauth.js',
    '~/plugins/getProduct.client.js',
    '~/plugins/fetchFirestore.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',

    // ['@nuxtjs/vuetify', { /* module options */ }]
    ['@nuxtjs/dotenv']
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.NUXT_ENV_Dope,
          authDomain: process.env.NUXT_ENV_auth_domain,
          databaseURL: process.env.NUXT_ENV_databaseUrl,
          projectId: "ecommerce-siteapp",
          storageBucket: "ecommerce-siteapp.appspot.com",
          messagingSenderId: "1000475311038",
          appId: "1:1000475311038:web:c2df59d93f481d113b17ef",
          measurementId: "G-HWH2GG7SG3"
        },
        services: {
          auth:{
            ssr:true
          },// Just as example. Can be any other service.
          firestore: true,
        },
      }

    ]
  ],

  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.grey.darken2,
          accent: colors.grey.darken3,
          secondary: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.red.accent3,
          secondary: colors.grey.darken3,
          anchor: '#8c9eff',
        },
      }
    }
  },

  build: {
    extractCSS: true,
    extend(config, ctx) { }
  }
}