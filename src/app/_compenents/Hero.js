"use client"
import React from 'react'
import flower from "../../../assets/flower5.jpg"
import Image from 'next/image'
import {motion} from 'framer-motion'
import AnimateTitle from './AnimateTitle'
import AnimatedTextWord from './AnimatedTextWord'


const Hero = () => {
  return (
    <div className='flex flex-col  items-center  relative pt-48 '>

      <div className='md:w-[700px] text-[60px] md:text-[100px] text-[#F8F6F4] leading-[60px] md:leading-[90px] text-end absolute top-[100px]   right-2 md:right-11 z-10'>
      <AnimatedTextWord text={["UN-", "CONDITIONAL", "LOVE FOR", "FLOWER"]}/>
      </div>
  
 
      <motion.div className='rounded-t-full md:w-[900px] p-9 h-auto  bg-gradient-to-r  from-[#FF8303] via-[#C8AE7D] to-[#876445] z-0 flex justify-center'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type: "spring"}} className='relative w-[80vw] md:w-[900px] h-[600px] md:h-[900px]'>
        <Image src={flower} alt="" fill={true} className='rounded-t-full  '></Image>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Hero
