require("dotenv").config();
const axios = require("axios");

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
  
    target: "static",
  
    head: {
      title: "Vietnam Factory B2b",
      titleTemplate: "%s",
      htmlAttrs: {
        lang: "en",
      },
     
    },
    ssr: false,
    generate: {
      fallback: true,
    },
    css: [
  
      { src: "~/assets/css/style.css", lang: "css" },
   
    ],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // plugins: [
    //   { src: "~/assets/js/font-awesome-min.js", mode: "client" },
    // ],
  
   
  
 
  
  };
  