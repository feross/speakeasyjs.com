import {
  Avatar,
  Box,
  Stack,
  Text
} from '@chakra-ui/react'

import { Link } from '../components/Link'

export const Event = ({ event, ...rest }) => (
  <Stack spacing={[4, null, 8]} {...rest}>
    {event.schedule.map(item => (
      <EventItem key={item.time} item={item} />
    ))}
  </Stack>
)

const EventItem = ({ item }) => {
  const href = item.twitter
    ? `https://twitter.com/${item.twitter}`
    : item.github
      ? `https://github.com/${item.github}`
      : '#'
  const src = item.github
    ? `https://github.com/${item.github}.png`
    : null

  return (
    <Stack spacing={[4, null, 8]} direction={['column', 'row']}>
      <Box
        color='whiteAlpha.600'
        textAlign={['center', 'right']}
        whiteSpace='nowrap'
      >
        {item.time} PM
      </Box>

      <Stack spacing={4}>
        <Box textAlign={['center', 'left']}>
          <Text as='strong' fontSize='xl'>{item.title}</Text>
        </Box>

        {item.name &&
          <>
            <Link href={href} showExternalIcon={false}>
              <Stack
                direction='row'
                justify={['center', 'flex-start']}
                align='center'
                spacing={4}
              >
                <Avatar
                  name={item.name}
                  src={src}
                  size='md'
                />
                <Box fontSize='lg' color='whiteAlpha.800'>
                  {item.name}
                </Box>
              </Stack>
            </Link>
          </>}
      </Stack>
    </Stack>
  )
}
