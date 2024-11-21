import React, { useRef } from 'react'
import CardHeader from './CardHeader'
import Card from './Card'
import { assets } from '../assets/assets'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const FounderCardContainer = () => {

  const myCard = useRef();
  const main7 = useRef();

  useGSAP(()=>{
    gsap.from(myCard.current,{
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:main7.current,
        scroller:"body",
        start:"top 40%"
      }
    })
  })

  return (
    <div ref={main7} className=' flex justify-center flex-col items-center  mt-20 md:mt-48 '>
        <CardHeader heading={"Founder"} title={"With 5 years of experience in Video Production Industry , I brings a wealth of knowledge and expertise to Palm online services."}/>
        <div ref={myCard} >
            <Card  checkNames={"Huzaifa"} image={assets.Huzaifa_small} name={"Muhammad Huzaifa"} Skill={"Founder"} account={""}/>
        </div>
    </div>
  )
}

export default FounderCardContainer