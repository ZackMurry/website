import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import {ColorModeScript} from '@chakra-ui/react'
import theme from 'lib/theme'

export default class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..800;1,400..800&display=swap"
            rel="stylesheet"
            as="Open Sans"
          />
          <meta name="title" content="Zack Murry" />
          <meta
            name="description"
            content="CS+Math at University of Missouri. Research assistant in drone technology and cloud computing at the VIMAN Lab."
          />
          <meta
            name="keywords"
            content="zack,murry,zackmurry,columbia,springfield,missouri,software,research,computing"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English"></meta>
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
