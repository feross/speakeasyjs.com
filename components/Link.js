import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

import { ExternalLinkIcon } from './icons'

const EXAMPLE_ORIGIN = 'http://example.com:9999'

export const Link = ({
  as = ChakraLink,
  href,
  showExternalIcon,
  children,
  prefetch,
  ...rest
}) => {
  const url = new URL(href, EXAMPLE_ORIGIN)
  const isExternal = url.origin !== EXAMPLE_ORIGIN

  if (showExternalIcon == null) showExternalIcon = isExternal

  const externalIcon = showExternalIcon
    ? <ExternalLinkIcon ml={2} />
    : null

  const LinkComponent = as

  if (isExternal) {
    return (
      <LinkComponent href={href} isExternal {...rest}>
        {children}
        {!!externalIcon && ' '}
        {externalIcon}
      </LinkComponent>
    )
  } else {
    const nextLinkProps = {}
    if (prefetch === false) nextLinkProps.prefetch = false
    return (
      <NextLink
        href={href}
        passHref
        {...nextLinkProps}
      >
        <LinkComponent {...rest}>
          {children}
          {externalIcon}
        </LinkComponent>
      </NextLink>
    )
  }
}
