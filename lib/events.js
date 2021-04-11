import { events } from '../events'

export { events } from '../events'

const START_BUFFER = 30 * 60 * 1000 // 30 minutes before start
const EVENT_DURATION = 70 * 60 * 1000 // 70 minutes duration

export const getFutureEvents = () => (
  events
    .filter(event => +parseDate(event.date) + EVENT_DURATION > +new Date())
)

export const getPastEvents = () => (
  events
    .filter(event => +parseDate(event.date) + EVENT_DURATION < +new Date())
)

export const getCurrentEvent = () => getFutureEvents()?.[0] || null
export const getNextEvent = () => getFutureEvents()?.[1] || null

export const eventIsLiveSoon = () => {
  const eventDate = +parseDate(getCurrentEvent().date)
  const now = +new Date()
  return (eventDate - START_BUFFER < now) && (now < eventDate)
}

export const eventIsLive = () => {
  const eventDate = +parseDate(getCurrentEvent().date)
  const now = +new Date()
  return (eventDate <= now) && (now < eventDate + EVENT_DURATION)
}

export const parseDate = dateStr => {
  let [year, month, day] = dateStr.split('-').map(val => Number(val))
  month -= 1 // JS Date months are zero-indexed
  return new Date(Date.UTC(year, month, day, 23, 0, 0))
}
