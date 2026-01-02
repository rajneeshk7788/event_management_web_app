"use client"

import { useEffect, useState } from "react"
import Aos from "aos"

export function AosInit() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Initialize AOS after component has mounted (post-hydration)
    Aos.init({
      duration: 800,
      easing: "ease-in-out-cubic",
      once: true,
      offset: 100,
      mirror: false,
    })

    return () => {
      Aos.refresh()
    }
  }, [mounted])

  return null
}

