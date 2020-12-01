import {
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'

import { ButtonLink } from './ButtonLink'

import { colorScheme } from '../theme'

export const Footer = props => {
  const isDesktop = useBreakpointValue([false, false, true])

  if (isDesktop) return null

  return (
    <Flex
      position='fixed'
      zIndex={10}
      px={8}
      py={4}
      bottom={0}
      left={0}
      right={0}
      justify='center'
      borderTop='1px solid'
      borderColor='blackAlpha.300'
      style={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
      {...props}
    >
      <ButtonLink
        colorScheme={colorScheme}
        size='lg'
        href='/buy'
      >
        Get a free ticket
      </ButtonLink>
    </Flex>
  )
}
