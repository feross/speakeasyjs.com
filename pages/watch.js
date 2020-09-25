/* global Twitch */

import { useEffect } from 'react'
import loadScript from 'load-script2'

import {
  Box,
  Container
} from '@chakra-ui/core'

import { Event } from '../components/Event'
import { Header } from '../components/Header'

import events from '../events'
import { parseDate, currentDate } from '../lib/date'

const WatchPage = ({ events }) => {
  useEffect(() => {
    ;(async () => {
      await loadScript('https://embed.twitch.tv/embed/v1.js')
      window.twitch = new Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 600,
        channel: 'speakeasyjs'
      })
    })()
    return () => {
      document.querySelector('#twitch-embed').innerHTML = ''
    }
  }, [])

  events = events
    .slice(0)
    .filter(event => parseDate(event.date) > currentDate())

  const currentEvent = events?.[0]

  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header showBuyButton={false} />

      <Container maxWidth='lg'>
        <Box
          id='twitch-embed'
        />
        <Event
          event={currentEvent}
          mt={10}
        />
      </Container>
    </Box>
  )
}

export default WatchPage

export async function getServerSideProps (ctx) {
  return {
    props: {
      title: 'Watch Now',
      description: 'Watch Speakeasy JS now',
      events
    }
  }
}
