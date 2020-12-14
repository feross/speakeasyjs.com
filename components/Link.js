import NextLink from 'next/link'
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react'

import { ExternalLinkIcon } from './icons'

const EXAMPLE_ORIGIN = 'http://example.com:9999'

export const Link = forwardRef(({
  href,
  showExternalIcon,
  children,
  prefetch,
  ...rest
}, ref) => {
  const url = new URL(href, EXAMPLE_ORIGIN)
  const isExternal = url.origin !== EXAMPLE_ORIGIN

  if (showExternalIcon == null) showExternalIcon = isExternal

  const externalIcon = showExternalIcon
    ? <ExternalLinkIcon ml={2} />
    : null

  if (isExternal) {
    return (
      <ChakraLink href={href} isExternal ref={ref} {...rest}>
        {children}
        {!!externalIcon && ' '}
        {externalIcon}
      </ChakraLink>
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
        <ChakraLink ref={ref} {...rest}>
          {children}
          {externalIcon}
        </ChakraLink>
      </NextLink>
    )
  }
})
