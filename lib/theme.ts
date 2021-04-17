import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
      'body, html': {
        backgroundColor: mode('white', 'black')(props),
        scrollBehavior: 'smooth'
      }
    })
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace, Calibri'
      }
    },
    Text: {
      baseStyle: {
        fontFamily:
          '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
      }
    }
  },
  config: {
    initialColorMode: 'dark'
  }
})

export default theme
