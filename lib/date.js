export const parseDate = dateStr => {
  let [year, month, day] = dateStr.split('-').map(val => Number(val))
  month -= 1 // JS Date months are zero-indexed
  return new Date(Date.UTC(year, month, day, 23, 0, 0))
}
