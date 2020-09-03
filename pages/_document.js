import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/core'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <ColorModeScript initialValue='system' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
