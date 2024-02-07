import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { parse } from 'cookie'
import theme from 'lib/theme'

interface Props {
  Component?: React.ComponentType
  pageProps?: any
  cookies: any
}

const App: NextPage<Props> = ({ Component, pageProps, cookies }) => {
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

export const getInitialProps = async ({ ctx }) => {
  const { req } = ctx
  if (req) {
    const parsed = parse(req.headers?.cookie ?? '')
    return {
      jwt: parsed?.jwt,
      id: parsed?.id,
      cookies: req.headers?.cookie ?? ''
    }
  }
  return {
    cookies: ''
  }
}

export default App
