import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ermineral',
  description: 'Ermineral',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
