/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

'use client'

import { useEffect, useState } from 'react'

const Preloader = () => {
  useEffect(() => {
    const preInner = document.querySelector('.preloader .pre-inner')

    // Fade out .pre-inner element
    fadeOut(preInner, 800, () => {
      // Preload hide
      const preloader =
        document.querySelector('.preloader') ||
        ({
          style: { display: 'none' }
        } as Element)
      preloader.style.display = 'none'

      // Add 'loaded' class to body
      document.body.classList.add('loaded')
    })

    function fadeOut(
      element: HTMLElement,
      duration: number,
      callback: { (): void; (): void }
    ) {
      let opacity = 1
      const interval = 1000 / 60 // 60 frames per second
      const step = opacity / (duration / interval)

      function updateOpacity() {
        opacity -= step
        element.style.opacity = opacity

        if (opacity <= 0) {
          clearInterval(fadeInterval)
          if (typeof callback === 'function') {
            callback()
          }
        }
      }

      var fadeInterval = setInterval(updateOpacity, interval)
    }
  }, [])

  const [text] = useState('loading ...')

  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="pre-inner">
            <div className="load typing-load">
              <p>{text}</p>
            </div>
            <span className="typed-load" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Preloader
