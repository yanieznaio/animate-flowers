"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

import useDimension from '../useDimension'
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]
const Page = () => {
  useEffect(()=> {
    const lenis = new Lenis()



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, [])

  const container = useRef(null);
  const {height} = useDimension();
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
    }
  )
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  return (
    <main className='bg-[#F77E21]'>
    <div className='h-[100vh] flex justify-center items-center'>
      <h1 className='text-white text-[70px] md:text-[130px]'>GALLERIE</h1>
    </div>
    <div ref={container} className='h-[175vh] bg-[#2d2d2d] flex  gap-[2vw] p-[2vw] box-border overflow-hidden'>
      <Column images={[images[0], images[1], images[2]]} y={y} top="-top-[45%]"/>
      <Column images={[images[3], images[4], images[5]]} y={y2} top="-top-[95%]"/>
      <Column images={[images[6], images[7], images[8]]} y={y3} top="-top-[45%]"/>
      <Column images={[images[9], images[10], images[11]]} y={y4} top="-top-[75%]"/>

    </div>
     <div className='h-[100vh]'></div>
    </main>
  
  )
}

export default Page


const Column = ({images, y=0, top}) => {

  return (
    <motion.div style={{y}} className={`w-[25%] h-full flex flex-col gap-[2vw] md:min-w-[250px] relative ${top}`}>
      {
        images.map((src, i) => {
          return <div key={i} className='h-full w-full relative rounded-[1vw] overflow-hidden'>
            <Image src={`/gallerie/${src}`} fill alt="image" className='object-cover'/>
          </div>
        })

      
      }
    </motion.div>
  )
}