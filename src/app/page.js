"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from './_compenents/Navbar'
import LastSection from './_compenents/LastSection'
import Hero from './_compenents/Hero'

export default function Home() {

  return (
    <div className="min-h-screen w-full m-auto  bg-[#071952]">
      <div className='min-h-screen max-w-[1200px] m-auto  bg-[#071952] '>
 
     <Hero/>
     <LastSection/>
      </div>
  
    </div>
  )
}
// 61481C
//65451F