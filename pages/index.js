import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import { format } from 'date-fns'

import { ButtonLink } from '../components/ButtonLink'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { theme } from '../theme'
import { getCurrentEvent, getNextEvent } from '../lib/events'
import { parseDate } from '../lib/date'

const { colorScheme } = theme.site

const HomePage = ({ currentEvent, nextEvent }) => {
  const currentEventDate = currentEvent &&
    format(parseDate(currentEvent.date), 'LLL d')
  const nextEventDate = nextEvent &&
    format(parseDate(nextEvent.date), 'LLL d')

  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header />
      <Footer />

      <Container maxWidth='4xl'>
        <Stack spacing={16} align='center'>

          <Heading as='h1' size='xl' mt={[0, 4, 6]} textAlign='center'>
            Psst... you've found it.
          </Heading>

          <Text fontSize='xl' textAlign='center'>
            <Text as='strong'><Text as='u'>Speakeasy JS</Text></Text> is the JavaScript meetup for 🥼&nbsp;mad science, 🧙‍♂️&nbsp;hacking, and 🧪&nbsp;experiments.<br />We hang out virtually on <Text as='strong'><Text as='u'>Friday at 4pm Pacific Time</Text></Text> each week.
          </Text>

          {currentEvent &&
            <>
              <Heading as='h2' size='lg' textAlign='center'>
                ✨ Here's what's happening <Text as='em'><Text as='u'>this Friday</Text></Text> {currentEventDate} ✨
              </Heading>

              <Event
                event={currentEvent}
                w={['full', null, 'xl']}
              />
            </>}

          {nextEvent &&
            <>
              <Heading as='h2' size='lg' textAlign='center'>
                ✨ And here's a sneak peek of <Text as='em'><Text as='u'>next Friday</Text></Text> {nextEventDate} ✨
              </Heading>

              <Event
                event={nextEvent}
                w={['full', null, 'xl']}
              />
            </>}

          <>
            <Heading as='h1' size='lg' textAlign='center'>
              🎟 You're invited, but shhh... keep it a secret 🎟
            </Heading>
            <ButtonLink
              colorScheme={colorScheme}
              size='lg'
              href='/buy'
            >
              Get a free ticket
            </ButtonLink>
          </>

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
