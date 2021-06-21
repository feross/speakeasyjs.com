import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  Wrap
} from '@chakra-ui/react'

import { ButtonLink } from '../components/ButtonLink'
import { Event } from '../components/Event'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Watch } from '../components/Watch'

import { theme } from '../theme'
import { getCurrentEvent, getNextEvent, eventIsLive, eventIsLiveSoon, getPastEvents } from '../lib/events'

const { colorScheme } = theme.site

const HomePage = ({ currentEvent, nextEvent, pastEvents }) => {
  // const currentEventDate = currentEvent &&
  //   format(parseDate(currentEvent.date), 'LLL d')
  // const nextEventDate = nextEvent &&
  //   format(parseDate(nextEvent.date), 'LLL d')

  const isLive = eventIsLive()
  const isLiveSoon = eventIsLiveSoon()

  return (
    <Box>
      <Header />
      <Footer />
      <Box
        px={4}
        pt={12}
        pb={32}
        fontSize='lg'
      >
        <Container maxWidth='3xl'>
          <Stack spacing={12} align='center'>
            <Heading as='h2' size='lg' textAlign='center' color='red.300'>
              🚨 NEW TIME: Friday at 10am PT! 🚨
            </Heading>

            <Heading as='h1' fontWeight='normal' size='md' textAlign='center'>
              <chakra.span as='strong'>Speakeasy JS</chakra.span> is the meetup for 🥼&nbsp;mad science, 🧙‍♂️&nbsp;hacking, and 🧪&nbsp;experiments. We&nbsp;hang out virtually on <chakra.span as='strong'><chakra.span as='em'>Friday at 10am Pacific Time</chakra.span></chakra.span> each week.
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
                  Here is what's happening <Text as='em'>this</Text> Friday
                </Heading>

                <Event event={currentEvent} />
              </>}

            {nextEvent &&
              <>
                <Heading as='h2' size='lg' textAlign='center'>
                  And a ✨ sneak peek ✨ of <Text as='em'>next</Text> Friday
                </Heading>

                <Event event={nextEvent} />
              </>}

            <Stack align='center' spacing={4}>
              <Box>
                <ButtonLink
                  colorScheme={colorScheme}
                  size='lg'
                  href='/buy'
                >
                  Get a free ticket
                </ButtonLink>
              </Box>

              <Wrap direction='row' justify='center'>
                <ButtonLink
                  size='sm'
                  href='https://twitter.com/Speakeasy_JS'
                >
                  Follow on Twitter
                </ButtonLink>
                <ButtonLink
                  size='sm'
                  href='https://calendar.google.com/calendar?cid=MXNrMmtvOWRqMnNhNzNsN20xbnFudWJydjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
                >
                  Add to Google Calendar
                </ButtonLink>
                <ButtonLink
                  size='sm'
                  href='https://calendar.google.com/calendar/ical/1sk2ko9dj2sa73l7m1nqnubrv4%40group.calendar.google.com/public/basic.ics'
                >
                  Add to Calendar.app
                </ButtonLink>
              </Wrap>
            </Stack>

            <Heading as='h2' size='lg' align='center'>
              Check out these past talks!
            </Heading>

            {pastEvents.map(event => (
              <Box key={event.date}>
                <Event event={event} isPast />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default HomePage

export async function getServerSideProps (ctx) {
  return {
    props: {
      currentEvent: getCurrentEvent(),
      nextEvent: getNextEvent(),
      pastEvents: getPastEvents().reverse()
    }
  }
}
