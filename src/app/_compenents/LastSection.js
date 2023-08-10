"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import flower from "../../../assets/flower6.jpg"
import flower2 from "../../../assets/flower7.jpg"
import flower3 from "../../../assets/flower5.jpg"
import AnimatedTextWord from './AnimatedTextWord'
import {motion} from "framer-motion"
const LastSection = () => {
  const [isInView, setIsInView] = useState(false)
  const img ={
    hidden: {
      y:500
    },
    visible:{
      y:0,
      transition:{
        type: "spring",
        damping: 12,
        stiffness: 40
    }
    }
  }
  return (
    <div className='text-[#F8F6F4] relative pb-4'>
      <div className='text-[51px] md:text-[91px] md:w-1/2 -mt-11 leading-[50px] md:leading-[100px] md:ml-24'>
        <AnimatedTextWord text={["ORCHIDEES ", "ORCHIDACEES"]}/>
     
      </div>
      <motion.div whileInView={() => setIsInView(true)} viewport={{once: true}} className='flex flex-col md:flex-row justify-between md:items-end gap-5'>
        <motion.p initial={{opacity: 0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{type: "spring"}} className=' w-4/5 md:w-1/3 md:ml-24 text-sm '>
        Ce sont des plantes herbacées, de type divers, autotrophes ou mycohétérotrophes, à feuilles réduites, à écailles, ou développées, terrestres ou épiphytes, pérennes, rhizomateuses ou tubéreuses, des régions tempérées à tropicales. La symbiose, qu'elle soit de type autotrophique, saprophytique, voire parasitique, se fait avec un champignon microscopique qui permet à la plante de pallier l'absence de toute réserve dans ses graines ainsi que l'absence de radicelles au niveau de ses racines.
        </motion.p>
        <div className='flex gap-3'>
          <div className='  bg-[#0081C9] overflow-hidden rounded-t-full flex justify-center items-center'>
            <motion.div  variants={img} initial="hidden" animate={isInView &&"visible"} className='w-[250px] h-[350px]  relative'>
            <Image  src={flower} fill={true} alt=""  className='rounded-t-full'></Image>
            </motion.div>
    
          </div>
          <div  className=' w-[250px] h-[350px] bg-[#0081C9] overflow-hidden rounded-full flex justify-center items-center'>
            <motion.div variants={img} initial="hidden" animate={isInView &&"visible"} className='w-[250px] h-[350px] relative'>
            <Image src={flower2} fill={true} alt="" className='rounded-full'></Image>
            </motion.div>

          </div>
          <div className=' w-[250px] h-[350px]  bg-[#0081C9] overflow-hidden rounded-t-full flex justify-center items-center'>
            <motion.div variants={img} initial="hidden" animate={isInView &&"visible"} className='w-[250px] h-[350px] relative '>
            <Image src={flower3} fill={true} alt="" className='rounded-t-full'></Image>
            </motion.div>
       
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LastSection
