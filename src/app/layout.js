import './globals.css'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import Navbar from './_compenents/Navbar'
const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
export const metadata = {
  title: 'animate flowers',
  description: 'A website made for tracking my animation skills threw time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={lora.className} >
      <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
