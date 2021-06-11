import { useEffect, useState } from 'react'
import {
  Stack,
  Flex,
  Heading,
  Img,
  useBreakpointValue
} from '@chakra-ui/react'

import { ButtonLink } from './ButtonLink'
import { Link } from './Link'

import { theme } from '../theme'
import { siteName, siteImage } from '../config'

const { colorScheme } = theme.site

export const Header = ({
  showBuyButton = true,
  ...rest
}) => {
  const _isDesktop = useBreakpointValue([false, false, true])
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    setIsDesktop(_isDesktop)
  }, [_isDesktop])

  const [scrollY, setScrollY] = useState(0)

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
      p={4}
      top={0}
      left={0}
      right={0}
      justify={['center', null, 'space-between']}
      align='center'
      borderBottom={scrollY > 0 ? '1px solid' : 'none'}
      borderColor='blackAlpha.300'
      style={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
      }}
      {...rest}
    >
      <Link
        href='/'
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Flex align='center' pl={2}>
          <Img
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

      {isDesktop &&
        <Stack direction='row' align='center'>
          {showBuyButton &&
            <ButtonLink
              colorScheme={colorScheme}
              size='lg'
              href='/buy'
            >
              Get a free ticket
            </ButtonLink>}
        </Stack>}

    </Flex>
  )
}
