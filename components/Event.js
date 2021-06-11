import { Avatar, Box, Center, Heading, Stack, Tag, TagLabel } from '@chakra-ui/react'

import { Link } from '../components/Link'
import { parseDate } from '../lib/events.js'
import { format } from 'date-fns'

export const Event = ({ event, isPast = false, ...rest }) => (
  <Box
    w={['full', null, isPast ? '3xl' : '2xl']}
    p={7}
    backgroundColor='whiteAlpha.200'
    borderRadius='xl'
    {...rest}
  >
    <Stack
      direction={['column', null, 'row']}
      justify={['center', null, 'space-between']}
      spacing={4}
    >
      <Stack spacing={3} flex={1}>
        <Heading as='h3' size='sm' color='whiteAlpha.500' textAlign={['center', 'left']}>
          {format(parseDate(event.date), isPast ? 'LLL d, yyyy' : 'LLL d')}
        </Heading>
        {event.schedule.map(item => (
          <EventItem key={item.time} item={item} />
        ))}
      </Stack>

      {event.youtube &&
        <Box w='300'>
          <Center>
            <iframe
              loading='lazy'
              width='300'
              height='158'
              src={`https://www.youtube-nocookie.com/embed/${event.youtube}`}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              style={{
                maxWidth: '100%'
              }}
            />
          </Center>
        </Box>}
    </Stack>
  </Box>
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
    <Stack spacing={4}>
      {item.title && (
        <Box textAlign={['center', 'left']}>
          <Heading as='h4' size='md'>
            {item.title}
          </Heading>
        </Box>
      )}

      {speakers.map(speaker => (
        <Box key={speaker.name} textAlign={['center', 'left']}>
          <Link
            href={speaker.href}
            showExternalIcon={false}
            _hover={{
              textDecoration: 'none'
            }}
          >
            <Tag
              size='lg'
              colorScheme='orange'
              borderRadius='full'
              transition='transform 0.2s linear'
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Avatar name={speaker.name} src={speaker.src} size='xs' ml={-1} mr={2} />
              <TagLabel>
                {speaker.name}
              </TagLabel>
            </Tag>
          </Link>
        </Box>
      ))}
    </Stack>
  )
}
