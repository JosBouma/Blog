// https://nuxt.com/docs/api/configuration/nuxt-config
const DEV_MODE = 'development' === process.env?.NODE_ENV

interface Font {
  name: string
  sizes: string[]
}

function generateGFontURL(fonts: Font[]): string {
  if(!fonts.length) {
    return  ''
  }
  const url = new URL('https://fonts.googleapis.com/css2')
  for (const font of fonts) {
    url.searchParams.append('family', `${font.name}:wght@${font.sizes.join(';')}`)
  }
  url.searchParams.append('display', 'swap')
  return url.toString()
}

export default defineNuxtConfig({
  devtools: { enabled: DEV_MODE },
  modules: ["@nuxtjs/prismic"],

  prismic: {
    endpoint: "josbouma",
    toolbar: !DEV_MODE
  },

  app: {
    head: {
      link: [
        {
          rel: 'dns-prefetch',
          href: '//fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: generateGFontURL([
            {
              name: 'Poppins',
              sizes: [
                '400',
                '500'
              ]
            }
          ])
        }
      ]
    }
  },

  css: [
    '~/assets/css/base.css'
  ],
})