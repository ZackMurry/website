import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
      'body, html': {
        backgroundColor: mode('#eeeeee', '#181a1b')(props),
        color: mode('#000000', '#e8e6e3')(props),
        scrollBehavior: 'smooth'
      }
    })
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: '"Open Sans", Calibri, serif, sans-serif'
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
