import React from 'react'
import {motion} from "framer-motion"
const variants = {
  'hidden': {
    y:200,
    opacity: 0

  },
  'visible':{
    y:0,
    opacity: 1,
    transition: {
      type: 'ease'
    }
  }
}
const AnimateTitle = () => {
  return (
    <div className='text-[#F8F6F4] text-[91px]  absolute -top-[120px]  right-0 z-10 items-end flex flex-col   w-[70%] leading-[100px] pr-20'>
    <div> <motion.h1 variants={variants} initial="hidden" animate="visible"  className=''>UN-</motion.h1></div>
   
    <motion.h1  className='text-end'>CONDITIONAL</motion.h1>
    <motion.h1  className='text-end'>LOVE FLOWERS</motion.h1>
    <motion.h1  className='text-end'>FLOWERS</motion.h1>
    </div>
  )
}

export default AnimateTitle
