'use client'

import { useEffect, useState } from 'react'

const OnePageHeader = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.section_')
      const navLi = document.querySelectorAll('.top-menu li')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id')
        }
      })

      navLi.forEach(li => {
        if (current !== null) {
          li.classList.remove('active')
        }
        if (
          li.getElementsByTagName('a')[0].getAttribute('href') == `#${current}`
        ) {
          li.classList.add('active')
        }
      })
    })
  }, [])

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    document.querySelector('body').classList.toggle('loaded')
    setToggle(!toggle)
  }

  return (
    <header className={toggle ? 'active' : ''}>
      <div className="head-top">
        <button className="menu-btn" type="button" aria-label='menu' onClick={e => onClick(e)}>
          <span />
        </button>
        <div className="top-menu">
          <ul>
            <li className="">
              <a href="#section-resume" className="lnk">
                Resume
              </a>
            </li>
            <li className="">
              <a href="#section-works" className="lnk">
                Portfolio
              </a>
            </li>
            <li className="">
              <a href="#section-blog" className="lnk">
                Blog
              </a>
            </li>
            <li>
              <a href="#section-contacts" className="btn">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default OnePageHeader
