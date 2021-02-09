import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

const colorScheme = 'yellow'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  site: {
    colorScheme: colorScheme,
    primaryColor: chakraTheme.colors[colorScheme]['500']
  }
})
