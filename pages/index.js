import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { format } from 'date-fns'

import { ButtonLink } from '../components/ButtonLink'
import { ColorModeButton } from '../components/ColorModeButton'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { colorScheme } from '../theme'
import { getCurrentEvent, getNextEvent } from '../lib/events'
import { parseDate } from '../lib/date'

const HomePage = ({ currentEvent, nextEvent }) => {
  const currentEventDate = currentEvent &&
    format(parseDate(currentEvent.date), 'LLLL d')
  const nextEventDate = nextEvent &&
    format(parseDate(nextEvent.date), 'LLLL d')

  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header />
      <Footer />

      <Container maxWidth='4xl'>
        <Stack spacing={20} align='center'>

          <Stack spacing={8} align='center'>
            <Heading as='h1' size='xl' mt={[0, 4, 6]} textAlign='center'>
              Psst... you've found it.
            </Heading>

            <Text fontSize='xl' textAlign='center'>
              <Text as='strong'><Text as='u'>Speakeasy JS</Text></Text> is the JavaScript meetup for 🥼&nbsp;mad science, 🧙‍♂️&nbsp;hacking, and 🧪&nbsp;experiments.
            </Text>

            <Text fontSize='xl' textAlign='center'>
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

          {nextEvent &&
            <Stack spacing={8} align='center'>
              <Heading as='h1' size='lg' textAlign='center'>
                And here's a sneak peak of <Text as='em'><Text as='u'>next Friday</Text></Text> ({nextEventDate})
              </Heading>

              <Event
                event={nextEvent}
              />
            </Stack>}

          <Stack spacing={8} align='center'>
            <Heading as='h1' size='lg' textAlign='center'>
              You're invited, but keep it a secret
            </Heading>
            <ButtonLink
              colorScheme={colorScheme}
              size='lg'
              href='/buy'
            >
              Get a free ticket
            </ButtonLink>
          </Stack>

          <Stack direction='row' align='center'>
            <ButtonLink
              href='/talks'
            >
              Past Talks
            </ButtonLink>
            <ButtonLink
              href='https://twitter.com/Speakeasy_JS'
            >
              Follow @Speakeasy_JS
            </ButtonLink>
            <ButtonLink
              href='https://calendar.google.com/calendar?cid=MXNrMmtvOWRqMnNhNzNsN20xbnFudWJydjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
            >
              Add to Google Calendar
            </ButtonLink>
            <ButtonLink
              href='https://calendar.google.com/calendar/ical/1sk2ko9dj2sa73l7m1nqnubrv4%40group.calendar.google.com/public/basic.ics'
            >
              Add to Calendar.app
            </ButtonLink>
            <ColorModeButton />
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
      currentEvent: getCurrentEvent(),
      nextEvent: getNextEvent()
    }
  }
}
