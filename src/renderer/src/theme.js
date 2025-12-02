import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig,{
  theme: {
    colorMode: {
      initialColorMode: 'dark',
      useSystemColorMode: false
    }
  }
})
export default system
