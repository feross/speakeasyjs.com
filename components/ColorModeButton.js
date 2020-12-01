import {
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import { FaMoonIcon, FaSunIcon } from './icons'

export const ColorModeButton = props => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoonIcon, FaSunIcon)

  return (
    <IconButton
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
      {...props}
    />
  )
}
