"use client"
import React from 'react'
import {motion} from "framer-motion"



const AnimatedTextWord = ({text}) => {
    const words = text;
    
    const container = {
        hidden: {opacity: 0,},
        visible: (i=1) => ({
            opacity:1,
       
            transition: {staggerChildren: 0.12, delayChildren: 0.04 * i}
        })
    }

    const child ={
        visible: {
            opacity: 1,
            y: 0,
            transition:{
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    }
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} className=' overflow-hidden flex flex-col'>
      {
        words.map((word, i) => <motion.span variants={child} key={i}>{word}</motion.span>)
      }
    </motion.div>
  )
}

export default AnimatedTextWord
