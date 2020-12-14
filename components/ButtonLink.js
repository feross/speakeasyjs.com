import { Button, forwardRef } from '@chakra-ui/react'

import { Link } from './Link'

const LinkNoHover = forwardRef((props, ref) => (
  <Link _hover={{ textDecoration: 'none' }} ref={ref} {...props} />
))

export const ButtonLink = forwardRef((props, ref) => (
  <Button
    as={LinkNoHover}
    ref={ref}
    {...props}
  />
))
