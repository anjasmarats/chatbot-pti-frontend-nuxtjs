export default defineNuxtConfig({
  runtimeConfig: {
    // Kunci privat (hanya dapat diakses di server)
    apiSecret: '123',
    // Kunci publik (terekspos ke client dan server)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:5000" // [citation:2]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/styles/style.css',
    // '~/assets/styles/dark-mode.css',
  ],
  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
          'Access-Control-Allow-Headers': 'Authorization, Content-Type'
        }
      }
    }
  },
  modules:['@pinia/nuxt'],
  app: {
    head: {
      title: 'Chatbot inf ust',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Chatbot inf ust.' 
        }
      ],
      link: [
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap' 
        },
        {
          rel:'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        }
      ]
    }
  },
})