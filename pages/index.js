import {
  Box,
  Center,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  Wrap
} from '@chakra-ui/react'
import { format } from 'date-fns'

import { ButtonLink } from '../components/ButtonLink'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Watch } from '../components/Watch'

import { theme } from '../theme'
import { getCurrentEvent, getNextEvent, eventIsLive, parseDate, eventIsLiveSoon } from '../lib/events'

const { colorScheme } = theme.site

const HomePage = ({ currentEvent, nextEvent }) => {
  const currentEventDate = currentEvent &&
    format(parseDate(currentEvent.date), 'LLL d')
  const nextEventDate = nextEvent &&
    format(parseDate(nextEvent.date), 'LLL d')

  const isLive = eventIsLive()
  const isLiveSoon = eventIsLiveSoon()

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
          <Heading as='h1' fontWeight='normal' size='md' textAlign='center'>
            <chakra.span as='strong'>Speakeasy JS</chakra.span> is the JavaScript meetup for 🥼&nbsp;mad science, 🧙‍♂️&nbsp;hacking, and 🧪&nbsp;experiments. We&nbsp;hang out virtually on <chakra.span as='strong'><chakra.span as='em'>Friday at 4pm Pacific Time</chakra.span></chakra.span> each week.
          </Heading>

          {(isLive || isLiveSoon) && (
            <>
              {isLive && <Heading size='xl'>🍻 We're live! 🎙 </Heading>}
              {isLiveSoon && <Heading size='xl'>🍻 We're getting started soon! 🎙 </Heading>}
              <Watch w='full' />
            </>
          )}

          {currentEvent &&
            <>
              <Heading as='h2' size='lg' textAlign='center'>
                Here is what's happening <Text as='em'>this</Text> Friday ({currentEventDate})
              </Heading>

              <Event
                event={currentEvent}
                w={['full', null, 'xl']}
              />
            </>}

          {nextEvent &&
            <>
              <Heading as='h2' size='lg' textAlign='center'>
                And a ✨ sneak peek ✨ of <Text as='em'>next</Text> Friday ({nextEventDate})
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

          <Wrap direction='row' justify='center'>
            <ButtonLink
              href='/talks'
            >
              Past Talks
            </ButtonLink>
            <ButtonLink
              href='https://twitter.com/Speakeasy_JS'
            >
              Follow on Twitter
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
          </Wrap>
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
