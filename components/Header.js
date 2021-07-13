import { useEffect, useState } from 'react'
import {
  Stack,
  Flex,
  Heading,
  Img,
  useBreakpointValue,
  Container
} from '@chakra-ui/react'

import { theme } from '../theme'
import { siteName, siteImage } from '../config'

import { useScroll } from '../hooks/useScroll.js'

import { ButtonLink } from './ButtonLink'
import { Link } from './Link'

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

  const { scrollY } = useScroll()

  // The percent that the header is visible, from 0 to 1
  const headerVisibility = Math.max(0, Math.min(1, scrollY / 150))

  return (
    <Flex
      position='sticky'
      zIndex={10}
      top={0}
      pt='max(env(safe-area-inset-top), var(--chakra-space-4))'
      pb={4}
      pl='env(safe-area-inset-left)'
      pr='env(safe-area-inset-right)'
      align='center'
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerVisibility * 0.3})`,
        backdropFilter:
          (scrollY > 0) && `blur(${headerVisibility * 10}px)`,
        WebkitBackdropFilter:
          (scrollY > 0) && `blur(${headerVisibility * 10}px)`
      }}
      {...rest}
    >
      <Container
        as={Flex}
        maxW='6xl'
        align='center'
        justify={['center', null, 'space-between']}
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
            <ButtonLink
              href='https://docs.google.com/forms/d/e/1FAIpQLSf3TUtLlUoKsoLrhEWBBZXh5g5Rb_s-soMp8ElSX9Huk3xtvQ/viewform?usp=sf_link'
              size='lg'
            >
              Nominate a speaker
            </ButtonLink>
            {showBuyButton &&
              <ButtonLink
                colorScheme={colorScheme}
                size='lg'
                href='/buy'
              >
                Get a free ticket
              </ButtonLink>}
          </Stack>}
      </Container>
    </Flex>
  )
}
