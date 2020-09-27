import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/core'
import { format } from 'date-fns'

import { Header } from '../components/Header'
import { Event } from '../components/Event'

import { getPastEvents } from '../lib/events'
import { parseDate } from '../lib/date'

const TalksPage = ({ pastEvents }) => {
  return (
    <Box
      px={4}
      py={32}
      fontSize='lg'
    >
      <Header />

      <Container maxWidth='xl'>
        <Stack spacing={20}>
          {pastEvents.map(event => (
            <Box key={event.date}>
              <Heading as='h1' size='lg' textAlign='center' mb={8}>
                {format(parseDate(event.date), 'EEEE LLLL d, yyyy')}
              </Heading>
              <SimpleGrid columns={[1, 1, 2]} spacing={8}>
                <Event
                  event={event}
                />
                {event.youtube &&
                  <iframe
                    width='450'
                    height='255'
                    src={`https://www.youtube-nocookie.com/embed/${event.youtube}`}
                    frameborder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />}
              </SimpleGrid>
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
