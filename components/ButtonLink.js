import { Button } from '@chakra-ui/react'

import { Link } from './Link'

export const ButtonLink = ({
  as = Button,
  href,
  prefetch,
  ...rest
}) => {
  const ButtonComponent = as
  return (
    <Link
      href={href}
      prefetch={prefetch}
      showExternalIcon={false}
      textDecoration='none'
      _hover={{
        textDecoration: 'none'
      }}
    >
      <ButtonComponent {...rest} />
    </Link>
  )
}

export default ButtonLink
