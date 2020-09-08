import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/core'

import { Link } from '../components/Link'

export const Event = ({ event, ...rest }) => (
  <Stack spacing={8} {...rest}>
    {event.schedule.map(item => (
      <EventItem key={item.time} item={item} />
    ))}
  </Stack>
)

const EventItem = ({ item }) => {
  const grayColor = useColorModeValue('blackAlpha.700', 'whiteAlpha.700')

  return (
    <Stack direction={['column', 'row']}>
      <Box
        color={grayColor}
        mr={[0, 6]}
        mb={[4, 0]}
        textAlign={['center', 'right']}
      >
        {item.time} PM
      </Box>

      <Stack
        maxWidth='md'
      >
        <Box textAlign={['center', 'left']}>
          <Text as='strong'>{item.title}</Text>
        </Box>

        {item.name &&
          <>
            <Link href={item.site || `https://twitter.com/${item.twitter}`} showExternalIcon={false}>
              <Stack
                direction='row'
                justify={['center', 'flex-start']}
                align='center'
              >
                <Avatar
                  name={item.name}
                  src={item.twitter ? `https://twivatar.glitch.me/${item.twitter}` : null}
                  size='sm'
                />
                <Box fontSize='md' color={grayColor}>
                  {item.name}
                </Box>
              </Stack>
            </Link>
          </>}
      </Stack>
    </Stack>
  )
}
