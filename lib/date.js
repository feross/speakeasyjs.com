import { parseJSON } from 'date-fns'

export const parseDate = dateStr => {
  return parseJSON(`${dateStr}T23:00:00.123Z`)
}

export const currentDate = () => {
  return parseJSON(new Date().toISOString())
}
