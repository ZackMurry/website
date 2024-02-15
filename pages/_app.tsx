import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import theme from 'lib/theme'
import 'public/globals.css'

interface Props {
  Component?: React.ComponentType
  pageProps?: any
}

const App: NextPage<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Zack Murry</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
