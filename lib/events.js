import { events } from '../events'
import { getCurrentDate, parseDate } from './date'

export { events } from '../events'

export const getFutureEvents = () => (
  events
    .filter(event => parseDate(event.date) > getCurrentDate())
)

export const getPastEvents = () => (
  events
    .filter(event => parseDate(event.date) < getCurrentDate())
)

export const getCurrentEvent = () => getFutureEvents()?.[0] || null
export const getNextEvent = () => getFutureEvents()?.[1] || null
