import React, { useRef } from 'react'
import CardHeader from './CardHeader'
import Card from './Card'
import { assets } from '../assets/assets'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const OurTeamCard = () => {

  const box22 = useRef();
  const box23 = useRef();
  const box24 = useRef();
  const box25 = useRef();

  const main8 = useRef();
  
  useGSAP(()=>{
    gsap.from([box22.current,box23.current,box24.current,box25.current],{
      opacity:0,
      duration:1,
      stagger:0.3,
      scrollTrigger:{
        trigger:main8.current,
        scroller:"body",
        start:"top 40%"
      }
    })
  })

  return (
    <div className=' flex flex-col items-center '>
        <CardHeader heading={"Meet Our Team"} title={"Alone we can do so little, together we can do so much."} />
       <div ref={main8} className=' flex gap-10 flex-wrap justify-center items-center mt-8 ' >
            <div ref={box22}><Card checkNames={"Huzaifa"} image={assets.Huzaifa_small} name={"Muhammad Huzaifa"} Skill={"Web development"} account={""}/></div>
            <div ref={box23}><Card checkNames={"Maaz"} image={assets.Maazi} name={"Muhammad Maaz"} Skill={"3d Modeling"} account={""}/></div>
            <div ref={box24}><Card checkNames={"Umer"} image={assets.Umer} name={"Umer Abbasi"} Skill={"Graphic Designer"} account={""}/></div>
            <div ref={box25}><Card checkNames={"Daniyal"} image={assets.Daniyal} name={"Daniyal Baloch"} Skill={"Video Editing"} account={""}/></div>
       </div>
    </div>
  )
}

export default OurTeamCard;