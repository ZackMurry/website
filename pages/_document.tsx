import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from 'lib/theme'
import { ColorModeScript } from '@chakra-ui/react'

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang='en'>
        <Head>
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..800;1,400..800&display=swap'
            rel='stylesheet'
            as='Open Sans'
          />
          {/* <link href='https://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' as='Garamond' /> */}
          {/* <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' as='Open Sans' /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
