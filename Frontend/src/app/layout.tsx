import Preloader from '@/layouts/Preloader'
import '@/public/css/animate.css'
import '@/public/css/glitche-basic.css'
import '@/public/css/glitche-layout.css'
import '@/public/css/ionicons.css'
import '@/public/css/magnific-popup.css'
import '@/public/css/template-colors/orange.css'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import State from '../context/context'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata = {
  title: 'Glitche - CV/Resume/Portfolio Template',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

const RootLayout = async ({ children }: Props) => (
    <html lang="en">
      <body className={robotoMono.variable}>
        <Preloader />
        <State>{children} </State>
      </body>
    </html>
  )

export default RootLayout
