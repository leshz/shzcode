'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Typed from 'typed.js'

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('.typed-subtitle', {
      strings: [
        'Front-end Director',
        'Fullstack developer',
        'Ux/ui designer',
        'Cryptocurrency enthusiast',
        'Based in Colombia',
        'I love coding'
      ],
      loop: true,
      typeSpeed: 80
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="section started" style={{ height: '96vh' }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div
              className="h-title glitch-effect"
              data-text="I'm Jeff Barragán"
            >
              I&apos;m <span>Jeff Barragán</span>
            </div>
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>

      <Link href="#resume" className="mouse_btn">
        <span className="ion ion-mouse" />
      </Link>
    </div>
  )
}
export default Hero
