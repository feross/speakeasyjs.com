import { Button } from '@chakra-ui/core'

import { Link } from './Link'

export const ButtonLink = ({ href, nextRoute, ...rest }) => (
  <Link
    href={href}
    nextRoute={nextRoute}
    showExternalIcon={false}
    textDecoration='none'
    _hover={{
      textDecoration: 'none'
    }}
  >
    <Button {...rest} />
  </Link>
)

export default ButtonLink
