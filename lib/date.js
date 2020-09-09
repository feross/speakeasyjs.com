import { parse } from 'date-fns'

export const parseDate = date => {
  return parse(date, 'yyyy-MM-dd', new Date())
}
