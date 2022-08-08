import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollTopProps {
  children?: React.ReactNode
}

const ScrollTop = ({ children }: ScrollTopProps) => {
  const location = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  return <>{children}</>
}

export default ScrollTop
