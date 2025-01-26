'use client'

import Isotope from 'isotope-layout'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Clients = () => {
  const isotope = useRef<Isotope>(null)
  useEffect(() => {
    setTimeout(() => {
      let { current } = isotope
      current = new Isotope('.box-items', {
        itemSelector: '.box-item',
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.box-item'
        }
      })
    }, 1000)
    return () => isotope?.current?.destroy()
  }, [])

  return (
    <div className="section clients">
      <div className="content">
        <div className="title">
          <div className="title_inner">Clients</div>
        </div>
        <div className="box-items">
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_1.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_2.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_3.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_1.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_2.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="box-item">
            <div className="image">
              <Link target="_blank" href="https://www.google.com">
                <img src="images/clients/client_3.png" alt="" />
                <span className="info">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="ion ion-link" />
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  )
}
export default Clients
