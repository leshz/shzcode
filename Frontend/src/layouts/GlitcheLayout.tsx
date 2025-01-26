import Popup from '@/components/popup/Popup'
import Footer from '@/layouts/Footer'
import React from 'react'
import OnePageHeader from './OnePageHeader'

interface Props {
  children: React.ReactNode
}

const GlitcheLayout = ({ children }: Props) => (
    <>
      <Popup />
      <div className="container" style={{ margin: 0 }}>
        <OnePageHeader />
        <div className="wrapper">{children}</div>
        <Footer />
        <div className="line top" />
        <div className="line bottom" />
        <div className="line left" />
        <div className="line right" />
      </div>
    </>
  )
export { GlitcheLayout }
