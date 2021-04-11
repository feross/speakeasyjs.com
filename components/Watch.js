/* global Twitch */
import { Box } from '@chakra-ui/layout'
import { useEffect } from 'react'
import loadScript from 'load-script2'

export const Watch = props => {
  useEffect(() => {
    ;(async () => {
      await loadScript('https://embed.twitch.tv/embed/v1.js')
      window.twitch = new Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 400,
        channel: 'speakeasyjs'
      })
    })()
    return () => {
      const $twitchEmbed = document.querySelector('#twitch-embed')
      if ($twitchEmbed) $twitchEmbed.innerHTML = ''
    }
  }, [])

  return (
    <Box
      id='twitch-embed'
      {...props}
    />
  )
}
