import { NextPage } from 'next'

interface Props {
  Component?: React.ComponentType
  pageProps?: any
}

const App: NextPage<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
