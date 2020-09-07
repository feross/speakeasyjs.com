import { useEffect, useState } from 'react'
import {
  Stack,
  Flex,
  Heading,
  Image,
  useBreakpointValue
} from '@chakra-ui/core'

import { ButtonLink } from './ButtonLink'
import { Link } from './Link'

import { colorScheme } from '../theme'
import { siteName, siteImage } from '../config'

export const Header = ({ showBuyButton = true, ...rest }) => {
  const isMobile = useBreakpointValue([true, false])
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
      justify={['center', 'space-between']}
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
        nextRoute='/'
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Flex align='center' pl={2}>
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

      <Stack direction='row'>
        <ButtonLink
          size='lg'
          href='/talks'
          variant='ghost'
        >
          Past Talks
        </ButtonLink>
        {showBuyButton && !isMobile &&
          <ButtonLink
            colorScheme={colorScheme}
            size='lg'
            href='/buy'
          >
            Get a free ticket
          </ButtonLink>}
      </Stack>

    </Flex>
  )
}
