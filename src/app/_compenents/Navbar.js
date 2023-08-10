"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname }from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='text-white flex justify-between items-center w-full py-4 px-9 z-10 absolute top-0 '>
      <h2 className='text-2xl'>FLOWERS</h2>
      <div className='flex gap-5 font-sans text-xl font-thin'>
        <Link href='/' className={`${pathname == "/" ? "opacity-1" : "opacity-[0.6]"}`}>Orchidée</Link>
    
        <Link href='gallerie' className={`${pathname == "/gallerie" ? "opacity-1" : "opacity-[0.6]"}`}>Gallerie</Link>
      </div>
      <div className='flex gap-4'>
      
        <a href='https://github.com/yanieznaio' target="_blank">Github</a>
      </div>
    </div>
  )
}

export default Navbar
