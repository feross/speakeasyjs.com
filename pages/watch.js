import {
  Box,
  Container,
  Heading,
  Stack
} from '@chakra-ui/react'

import { ButtonLink } from '../components/ButtonLink'
// import { Event } from '../components/Event'
import { Header } from '../components/Header'

import { theme } from '../theme'
import { Watch } from '../components/Watch.js'
import { eventIsLive, eventIsLiveSoon } from '../lib/events.js'

const { colorScheme } = theme.site

const WatchPage = () => {
  const isLive = eventIsLive()
  const isLiveSoon = eventIsLiveSoon()

  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header showBuyButton={false} />

      <Container maxWidth='4xl'>
        <Stack spacing={20} align='center'>

          {isLive && <Heading size='xl'>🍻 We're live! 🎙 </Heading>}
          {isLiveSoon && <Heading size='xl'>🍻 We're getting started soon! 🎙 </Heading>}

          <Watch width='full' />

          <Stack spacing={8} align='center'>
            <Heading as='h1' size='lg' textAlign='center'>
              Get your ticket to next week's event!
            </Heading>
            <ButtonLink
              colorScheme={colorScheme}
              size='lg'
              href='/buy'
            >
              Get a free ticket
            </ButtonLink>
          </Stack>
        </Stack>

      </Container>
    </Box>
  )
}

export default WatchPage

export async function getServerSideProps (ctx) {
  return {
    props: {
      title: 'Watch Now',
      description: 'Watch Speakeasy JS now'
    }
  }
}
