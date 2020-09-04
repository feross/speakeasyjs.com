/* global Twitch */

import { useEffect } from 'react'
import loadScript from 'load-script2'

import {
  Box,
  Container
} from '@chakra-ui/core'

import { Header } from '../components/Header'

const WatchPage = ({ events }) => {
  useEffect(() => {
    ; (async () => {
      await loadScript('https://embed.twitch.tv/embed/v1.js')
      window.twitch = new Twitch.Embed('twitch-embed', {
        width: 1024,
        height: 600,
        channel: 'speakeasyjs'
      })
    })()
  }, [])
  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header showBuyButton={false} />

      <Container maxWidth='lg'>
        <div id='twitch-embed' />
      </Container>
    </Box>
  )
}

export default WatchPage
