import Debug from 'debug'

const debug = Debug('speakeasy:analytics')

export const track = (
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
  fieldsObject
) => {
  window.ga(
    'send',
    'event',
    eventCategory,
    eventAction,
    eventLabel,
    eventValue,
    fieldsObject
  )
  debug('%o %o %o %o %o', eventCategory, eventAction, eventLabel, eventValue, fieldsObject)
}
