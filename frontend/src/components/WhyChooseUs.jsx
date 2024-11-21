import React, { useRef } from 'react'
import Button from './Button'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const WhyChooseUs = ({style,style2,title,heading,heading2,text,btnText}) => {

  const box1 = useRef();
  const main1 = useRef();
  useGSAP(()=>{
    gsap.from(box1.current,{
      x:300,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:main1.current,
        scroller:"body",
        start:"top 40%"
      }
    })
  })

  return (
    <div ref={main1} className={` overflow-x-hidden flex justify-start ${style} `}>
        <div  ref={box1} className={`text-left ${style2} p-4 `}>
            <p className=' text-sm md:text-base text-[#7ABB40] '>{title}</p>
            <h1 className='text-xl md:text-[40px] font-semibold text-[#D8D1BD] mt-8'>{heading}</h1>
            <h1 className='text-xl md:text-[40px] font-semibold text-[#D8D1BD] md:mt-8 '>{heading2}</h1>
            <p className='mt-8 text-[10px] md:text-sm text-[#6B685F]'>{text}</p>
            <Button title={btnText}/>
        </div>
    </div>
  )
}

export default WhyChooseUs