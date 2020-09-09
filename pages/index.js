import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Wrap
} from '@chakra-ui/core'
import { format } from 'date-fns'

import { ButtonLink } from '../components/ButtonLink'
import { ColorModeButton } from '../components/ColorModeButton'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { colorScheme } from '../theme'
import events from '../events'
import { parseDate } from '../lib/date'

const HomePage = ({ events }) => {
  events = events
    .slice(0)
    .filter(event => parseDate(event.date) >= Date.now())

  const currentEvent = events?.[0]
  const currentEventDate = currentEvent && format(parseDate(currentEvent.date), 'LLLL d')

  const nextEvent = events?.[1]
  const nextEventDate = nextEvent && format(parseDate(nextEvent.date), 'LLLL d')

  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header />
      <Footer />

      <Container maxWidth='lg'>
        <Stack spacing={16} align='center'>

          <Stack spacing={8} align='center'>
            <Heading as='h1' size='xl' mt={[0, 4, 6]}>
              Psst... You've found it.
            </Heading>

            <Text fontSize='xl'>
              This is the JavaScript meetup for 🥼&nbsp;mad science, 🧙‍♂️&nbsp;hacking, and 🧪&nbsp;experiments.
            </Text>

            <Text fontSize='xl'>
              Hang out virtually on <Text as='strong'><Text as='u'>Friday at 4pm Pacific Time</Text></Text> each week.
            </Text>
          </Stack>

          {currentEvent &&
            <Stack spacing={8} align='center'>
              <Heading as='h1' size='lg' textAlign='center'>
                Here's what's going down <Text as='em'><Text as='u'>this Friday</Text></Text> ({currentEventDate})
              </Heading>

              <Event
                event={currentEvent}
              />
            </Stack>}

          <ButtonLink
            colorScheme={colorScheme}
            size='lg'
            href='/buy'
          >
            If you dig it, get a ticket
          </ButtonLink>

          {nextEvent &&
            <Stack spacing={8} align='center'>
              <Heading as='h1' size='lg' textAlign='center'>
                And here's a sneak peak at <Text as='em'><Text as='u'>next Friday</Text></Text> ({nextEventDate})
              </Heading>

              <Event
                event={nextEvent}
              />
            </Stack>}

          <Stack spacing={8} align='center'>
            <Heading as='h1' size='lg' textAlign='center'>
              Ssh... don't tell anyone
            </Heading>

            <Wrap justify='center'>
              <ButtonLink
                href='https://calendar.google.com/calendar?cid=MXNrMmtvOWRqMnNhNzNsN20xbnFudWJydjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
                size='md'
              >
                Add to Google Calendar
              </ButtonLink>
              <ButtonLink
                href='https://calendar.google.com/calendar/ical/1sk2ko9dj2sa73l7m1nqnubrv4%40group.calendar.google.com/public/basic.ics'
                size='md'
              >
                Download .ical file
              </ButtonLink>
              <ButtonLink
                href='https://twitter.com/Speakeasy_JS'
                size='md'
              >
                Follow @Speakeasy_JS
              </ButtonLink>
              <ColorModeButton />
            </Wrap>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomePage

export async function getServerSideProps (ctx) {
  return {
    props: {
      events
    }
  }
}
