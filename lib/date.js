import { set, parse } from 'date-fns'

export const parseDate = dateStr => {
  const date = parse(dateStr, 'yyyy-MM-dd', new Date())
  return set(date, { hours: 18 })
}
