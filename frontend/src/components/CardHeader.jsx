import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const CardHeader = ({heading, title}) => {

  const box21=useRef();

  useGSAP(()=>{
    gsap.from(box21.current,{
      scale:1.4,
      opacity:0,
      duration:0.8,
      scrollTrigger:{
        trigger:box21.current,
        scroller:"body",
        start:"top 40%",
      }
    })
  })

  return (
    <div ref={box21} className=' flex gap-3 md:gap-8 items-center  '>
        <h1 className=' text-center md:text-3xl font-semibold text-[#D8D1BD] border-r px-2 md:px-6 py-4 '>{heading}</h1>
        <p className=' text-[8px] md:text-sm w-[200px] md:w-[350px] text-[#d8d1bd9c] '>{title}</p>
    </div>
  )
}

export default CardHeader