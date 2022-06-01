export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Danish Saber",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Danish Saber - Portfolio" },
      { property: "og:url", content: "https://danishsaber.com/" },
      { property: "og:image", content: "https://danishsaber.com/danish-saber.jpg" },
      { property: "og:description", content: "I am a skilled Web3 and Dapp developer with a passion for front-end technologies like Javascript and Vue.js. I can help you in Wallets integration, Smart Contract integration, Website development, DAPP development. Including NFT minting, Token presale rounds & Staking functionalities." },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "https://danishsaber.com/" },
      { name: "twitter:creator", content: "@danishsaber" },
      { name: "twitter:title", content: "Danish Saber - Portfolio" },
      { name: "twitter:image", content: "https://danishsaber.com/danish-saber.jpg" },
      { name: "twitter:description", content: "I am a skilled Web3 and Dapp developer with a passion for front-end technologies like Javascript and Vue.js. I can help you in Wallets integration, Smart Contract integration, Website development, DAPP development. Including NFT minting, Token presale rounds & Staking functionalities." },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  googleAnalytics: {
    id: 'G-6VP71J26WV'
  }
};
