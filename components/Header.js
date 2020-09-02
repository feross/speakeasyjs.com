import { useEffect, useState } from 'react'
import {
  IconButton,
  Flex,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/core'

import { ButtonLink } from '../components/ButtonLink'
import { Link } from '../components/Link'
import { colorScheme } from '../theme'
import { siteName, siteImage } from '../config'
import { FaMoonIcon, FaSunIcon } from './icons'

export const Header = props => {
  const showBuyButton = useBreakpointValue([false, true, true])
  const [scrollY, setScrollY] = useState(0)
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoonIcon, FaSunIcon)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Flex
      position='fixed'
      zIndex={10}
      px={8}
      py={4}
      top={0}
      left={0}
      right={0}
      justify={['center', 'space-between']}
      align='center'
      borderBottom={scrollY > 0 ? '1px solid' : 'none'}
      borderColor='blackAlpha.300'
      style={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
      {...props}
    >
      <Link
        href='/'
        nextRoute='/'
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Flex align='center'>
          <Image
            src={siteImage}
            alt={siteName}
            height={10}
            width={10}
            htmlWidth={160}
            htmlHeight={160}
            display='block'
          />
          <Heading as='h1' size='lg' ml={3}>
            {siteName}
          </Heading>
        </Flex>
      </Link>

      <Stack direction='row' spacing={4}>
        {showBuyButton &&
          <ButtonLink
            colorScheme={colorScheme}
            size='lg'
            href='/buy'
          >
            Get a free ticket
          </ButtonLink>}

        <IconButton
          size='lg'
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
        />
      </Stack>
    </Flex>
  )
}
