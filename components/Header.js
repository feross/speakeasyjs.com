import {
  Flex,
  Image,
  Heading,
  useBreakpointValue
} from '@chakra-ui/core'

import { ButtonLink } from '../components/ButtonLink'
import { Link } from '../components/Link'
import { colorScheme } from '../theme'
import { siteName, siteImage } from '../config'

export const Header = props => {
  const showBuyButton = useBreakpointValue([false, true, true])

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
      backgroundColor='rgba(255, 255, 255, 0.5)'
      borderBottom='1px solid'
      borderColor='gray.200'
      style={{
        backdropFilter: 'blur(5px)'
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

      {showBuyButton &&
        <ButtonLink
          colorScheme={colorScheme}
          size='lg'
          href='/buy'
        >
          Get a free ticket
        </ButtonLink>}
    </Flex>
  )
}
