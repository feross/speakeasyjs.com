/* global Twitch */

import { useEffect } from 'react'
import loadScript from 'load-script2'

import {
  Avatar,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Wrap,
  useColorModeValue
} from '@chakra-ui/core'

import { ButtonLink } from '../components/ButtonLink'
import { ColorModeButton } from '../components/ColorModeButton'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Link } from '../components/Link'

import { colorScheme } from '../theme'
import events from '../events'

const WatchPage = ({ events }) => {
  useEffect(() => {
    ; (async () => {
      await loadScript('https://embed.twitch.tv/embed/v1.js')
      const twitch = new Twitch.Embed('twitch-embed', {
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
