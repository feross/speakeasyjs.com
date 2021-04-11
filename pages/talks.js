import {
  Box,
  Container,
  Heading,
  Stack
} from '@chakra-ui/react'
import { format } from 'date-fns'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Event } from '../components/Event'

import { getPastEvents, parseDate } from '../lib/events'

const TalksPage = ({ pastEvents }) => {
  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header showPastTalksButton={false} />
      <Footer />

      <Container maxWidth='4xl'>
        <Stack spacing={20}>
          <Heading align='center'>Past Talks</Heading>

          {pastEvents.map(event => (
            <Box key={event.date}>
              <Heading as='h1' size='lg' textAlign='center' mb={8}>
                {format(parseDate(event.date), 'EEEE LLL d, yyyy')}
              </Heading>
              <Stack
                spacing={8}
                direction={['column', null, 'row']}
                justify={['center', null, 'space-between']}
                align='center'
              >
                <Event
                  event={event}
                  w={['full', 'full', 'xl']}
                />
                {event.youtube &&
                  <iframe
                    width='400'
                    height='200'
                    src={`https://www.youtube-nocookie.com/embed/${event.youtube}`}
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    style={{
                      maxWidth: '100%'
                    }}
                  />}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default TalksPage

export async function getServerSideProps (ctx) {
  return {
    props: {
      title: 'Past Talks',
      description: 'Watch past talks from Speakeasy JS',
      pastEvents: getPastEvents().reverse()
    }
  }
}
