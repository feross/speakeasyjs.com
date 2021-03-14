import { Fragment } from 'react'
import { Avatar, Box, Stack, Text } from '@chakra-ui/react'

import { Link } from '../components/Link'

export const Event = ({ event, ...rest }) => (
  <Stack spacing={[4, null, 8]} {...rest}>
    {event.schedule.map(item => (
      <EventItem key={item.time} item={item} />
    ))}
  </Stack>
)

const EventItem = ({ item }) => {
  let speakers = []

  if (item.speakers) {
    speakers = item.speakers
  }

  if (item.name) {
    speakers = [{
      name: item.name,
      twitter: item.twitter,
      github: item.github
    }]
  }

  speakers = speakers.map(speaker => {
    const href = speaker.twitter
      ? `https://twitter.com/${speaker.twitter}`
      : speaker.github
        ? `https://github.com/${speaker.github}`
        : '#'
    const src = speaker.github ? `https://github.com/${speaker.github}.png` : null

    return {
      href,
      src,
      ...speaker
    }
  })

  return (
    <Stack spacing={[4, null, 8]} direction={['column', 'row']}>
      <Box
        color='whiteAlpha.600'
        textAlign={['center', 'right']}
        whiteSpace='nowrap'>
        {item.time} PM
      </Box>

      <Stack spacing={4}>
        {item.title && (
          <Box textAlign={['center', 'left']}>
            <Text as='strong' fontSize='xl'>
              {item.title}
            </Text>
          </Box>
        )}

        {speakers.map(speaker => (
          <Fragment key={speaker.name}>
            <Link href={speaker.href} showExternalIcon={false}>
              <Stack
                direction='row'
                justify={['center', 'flex-start']}
                align='center'
                spacing={4}
              >
                <Avatar name={speaker.name} src={speaker.src} size='md' />
                <Box fontSize='lg' color='whiteAlpha.800'>
                  {speaker.name}
                </Box>
              </Stack>
            </Link>
          </Fragment>
        ))}
      </Stack>
    </Stack>
  )
}
