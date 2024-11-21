import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const TrustedBussiness = () => {

  const box = useRef();
  const main = useRef();
  useGSAP(()=>{
    gsap.from(box.current,{
      scale:0,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:main.current,
        scroller:"body",
        start:"top 50%",
      }
    })
  })

  return (
    <div ref={main} className=' overflow-x-hidden mb-20 '>
        <div ref={box} className='w-full flex flex-col items-center h-auto py-8 px-5 rounded bg-gradient-to-b from-[#3232327f] from-50% to-[#465c5737] to-100%'>
            <h1 className=' text-lg text-center md:text-3xl font-bold text-[#D8D1BD] md:mb-4 '>Trusted by 5+ businesses for</h1>
            <h1 className=' text-lg text-center md:text-3xl font-bold text-[#D8D1BD] '>exceptional social media branding.</h1>

            <div className=' flex items-center flex-wrap justify-center gap-10 mt-10 '>
                <img className=' w-36 md:w-48 opacity-[0.2] cursor-pointer hover:opacity-[1] transition-all' src="https://filmuix.com/wp-content/uploads/2024/05/inventify.webp" alt="" />
                <img className=' w-36 md:w-48 opacity-[0.2] cursor-pointer hover:opacity-[1] transition-all' src="https://filmuix.com/wp-content/uploads/2024/05/AV-Fitness.webp" alt="" />
                <img className=' w-36 md:w-48 opacity-[0.2] cursor-pointer hover:opacity-[1] transition-all' src="https://filmuix.com/wp-content/uploads/2024/05/SR-Eskilltech.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default TrustedBussiness