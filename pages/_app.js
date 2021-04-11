// import { useEffect } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../theme'
import { track } from '../lib/analytics'

import {
  isProd,
  siteName,
  siteDesc,
  socialImage,
  siteTwitter,
  origin,
  tokenAnalytics
} from '../config'

globalThis.theme = theme
const { primaryColor } = theme.site

function MyApp ({ Component, pageProps }) {
  let {
    title,
    description
  } = pageProps

  if (title == null) title = `${siteName} - ${siteDesc}`
  else title += ` - ${siteName}`

  if (description == null) description = siteDesc

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <meta name='description' content={description} />

        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='application-name' content={siteName} />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color={primaryColor} />
        <meta name='msapplication-TileColor' content={primaryColor} />
        <meta name='theme-color' content={primaryColor} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={origin} />
        <meta property='og:image' content={socialImage} />
        <meta property='og:site_name' content={siteName} />
        <meta property='og:type' content='website' />

        <meta name='twitter:title' content={title} />
        <meta name='twitter:image' content={socialImage} />
        <meta name='twitter:site' content={siteTwitter} />
        <meta name='twitter:card' content='summary_large_image' />

        <link rel='icon' href='/favicon.ico' />

        <script dangerouslySetInnerHTML={{
          __html: `
            window.GoogleAnalyticsObject = 'ga'
            function ga () {
              window.ga.q.push(arguments)
            }
            window.ga.q = window.ga.q || []
            window.ga.l = Date.now()
            window.ga('create', '${tokenAnalytics}', 'auto')
            window.ga('set', 'transport', 'beacon')
            window.ga('send', 'pageview')
          `
        }}
        />
        {isProd &&
          <script async src='https://www.google-analytics.com/analytics.js' />}
      </Head>
    </ChakraProvider>
  )
}

export default MyApp

export function reportWebVitals ({ id, name, label, value }) {
  if (!isProd) return

  track(
    label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    name,
    id, // id unique to current page load
    Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    { nonInteraction: true } // avoids affecting bounce rate
  )
}
