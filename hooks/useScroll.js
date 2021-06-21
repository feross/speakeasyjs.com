import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    scrollX: 0,
    scrollY: 0
  })

  useEffect(() => {
    const handleScroll = () => {
      setScroll({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}
