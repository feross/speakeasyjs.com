import { parseJSON } from 'date-fns'

export const parseDate = dateStr => {
  return parseJSON(`${dateStr}T23:59:59.123Z`)
}

export const getCurrentDate = () => {
  return parseJSON(new Date().toISOString())
}
