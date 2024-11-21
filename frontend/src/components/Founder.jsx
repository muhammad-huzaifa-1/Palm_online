import React from 'react'
import {useRef} from 'react'
import { assets } from '../assets/assets'
import Button from './Button'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Founder = () => {

  const founder = useRef();
  const cont = useRef();
  const main5 = useRef();

  useGSAP(()=>{
    
    gsap.from(founder.current,{
      x:-300,
      opacity:0,
      duration:0.8,
      scrollTrigger:{
        trigger:main5.current,
        scroller:"body",
        start:"top 40%",
      }
    });
    gsap.from(cont.current,{
      x:300,
      opacity:0,
      duration:0.8,
      delay:0.5,
      scrollTrigger:{
        trigger:main5.current,
        scroller:"body",
        start:"top 40%",
      }
    });


  })

  return (
    <div ref={main5} className=' overflow-x-hidden flex gap-10 lg:gap-14 flex-wrap  items-center justify-center '>
        <div ref={founder}  className=' bg-[#36353355] w-[300px] lg:w-[400px] xl:w-[550px] border border-[#79bb4034] rounded-[10px] p-[20px] flex flex-col items-center '>
            <h1 className=' mb-[25px] text-[#D8D1BD] lg:text-[45px] font-semibold'>Founder</h1>
            <img className=' w-[500px] rounded-[5px] ' src={assets.Huziafa_Pic} alt="" />
            <p className=' mt-[25px] text-[#D8D1BD] text-[10px] lg:text-sm text-center '>With 5 years of experience in Video Production Industry , I brings a wealth of knowledge and expertise to Filmuix.</p>
        </div>
        <div ref={cont} className=' flex flex-col items-center xl:block xl:w-[30%]'>
            <p className=' mb-4 text-[#7ABB40] '>WHO WE ARE</p>
            <h1 className=' text-center xl:text-left xl:leading-[50px] lg:text-[24px] xl:text-[36px] font-semibold text-[#D8D1BD] '>Helping the World's Greatest Creators Create.</h1>
            <p className=' text-center xl:text-left text-[10px] md:text-[12px] xl:text-base text-[#d8d1bd98] mt-4 '>Taking content creation to the next level with our post production and growth strategy services</p>
            <Button title={"DISCOVER MORE!"}/>
        </div>
    </div>
  )
}

export default Founder