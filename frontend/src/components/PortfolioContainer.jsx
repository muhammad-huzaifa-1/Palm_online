import React, { useRef } from 'react'
import Portfolio from './Portfolio'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const PortfolioContainer = () => {

  const box10 = useRef();
  const box11 = useRef();
  const box12 = useRef();
  const box13 = useRef();
  const box14 = useRef();
  const box15 = useRef();

  const main5 = useRef();


  useGSAP(()=>{
    gsap.from([box10.current,box11.current,box12.current,box13.current,box14.current,box15.current],{
      y:50,
      opacity:0,
      duration:0.8,
      stagger:0.3,
      scrollTrigger:{
        trigger:main5.current,
        scroller:"body",
        start:"top 40%"
      }
    })
  })

  return (
    <div ref={main5} className=' mt-20 lg:mt-40 mb-40 flex flex-wrap justify-center gap-10 '>
        <div ref={box10}><Portfolio/></div>
        <div ref={box11}><Portfolio/></div>
        <div ref={box12}><Portfolio/></div>
        <div ref={box13}><Portfolio/></div>
        <div ref={box14}><Portfolio/></div>
        <div ref={box15}><Portfolio/></div>
    </div>
  )
}

export default PortfolioContainer