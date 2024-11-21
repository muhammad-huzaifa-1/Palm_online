import React, { useRef } from 'react'
import ServiceProvided from './ServiceProvided'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ServicesContainer = () => {

  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();
  const box7 = useRef();
  const box8 = useRef();
  const box9 = useRef();

  const main4 = useRef();

  useGSAP(()=>{
    gsap.from([box4.current,box5.current,box6.current,box7.current,box8.current,box9.current],{
      scale:1.2,
      opacity:0,
      duration:0.5,
      stagger:0.3,
      scrollTrigger:{
        trigger:main4.current,
        scroller:"body",
        start:"top 40%"
      }
    })
  })

  return (
    <div ref={main4} className=' flex flex-wrap justify-center mt-10 lg:mt-36 gap-10 '>

        <div ref={box4}>
        <ServiceProvided icon={"fa-laptop-code"} title={"Web Development"} discription={"We will Create a powerful online presence with our custom website development services, offering responsive and user-friendly designs tailored to your business needs."} />
        </div>

        <div ref={box5}>
        <ServiceProvided icon={"fa-photo-film"} title={"Video Editing"} discription={"Transform raw footage into polished masterpieces with our expert video editing services, delivering visually stunning and engaging content for all platforms and Medias."}/>
        </div>

        <div ref={box6}>
        <ServiceProvided icon={"fa-wand-magic-sparkles"} title={"Graphic Designing"} discription={"Elevate your brand with our creative graphic design solutions, offering eye-catching visuals that communicate your message effectively and attract your target audience."}/>
        </div>

        <div ref={box7}>
        <ServiceProvided icon={"fa-cube"} title={"3d Modeling"} discription={" These services utilize advanced software to create detailed and realistic 3D models that can enhance marketing materials, prototypes, and virtual environments. Whether for gaming, film, or industrial etc"}/>
        </div>

        <div ref={box8}>
        <ServiceProvided icon={"fa-bullseye"} title={"Search Engine Optimization"} discription={"Improve your website's ranking and organic traffic with our advanced SEO strategies, designed to enhance visibility and drive targeted audience engagement and many more..    "}/>
        </div>

        <div ref={box9}>
        <ServiceProvided icon={"fa-clapperboard"} title={"3d Animation"} discription={"Looking for a skilled 3D animator! I specialize in character modeling, rigging, and animation for films, games, and promotional content. With attention to detail and a passion for storytelling."}/>
        </div>

    </div>
  )
}

export default ServicesContainer