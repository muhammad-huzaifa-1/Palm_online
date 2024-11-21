import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Title = ({text,title,margin}) => {

  const box2 = useRef();
  const box3 = useRef();
  const main2=useRef();

  useGSAP(()=>{
    gsap.from([box2.current,box3.current],{
      opacity:0,
      y:50,
      stagger:0.6,
      duration:0.5,
      scrollTrigger:{
        trigger:main2.current,
        scroller:"body",
        start:"top 60%"
      }
    })
  })

  return (
    <div ref={main2} className={` flex flex-col items-center text-center ${margin} `}>
        <p ref={box2} className='text-sm md:text-base text-[#7ABB40]'>{text}</p>
        <h1 ref={box3} className='text-xl md:text-[40px] font-semibold text-[#D8D1BD] md:leading-[60px] md:mt-8 mt-4'>{title}</h1>
    </div>
  )
}

export default Title