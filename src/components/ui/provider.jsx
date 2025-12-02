'use client'

import { ColorModeProvider } from "../../components/ui/color-mode"
import { ChakraProvider } from "@chakra-ui/react"
import { system } from "../../renderer/src/theme"

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
