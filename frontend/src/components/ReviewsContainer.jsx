import React, { useRef, useState } from 'react'
import Review from './Review'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ReviewsContainer = () => {
    const data = [
        {
            0:[
                {
                  title:"Video Editing",
                  discription:"I recently worked with a video editing team, and I am thrilled with the outcome! They took our raw footage and transformed it into a polished, engaging final product.",
                  review:4.7,
                  img:"https://media.licdn.com/dms/image/v2/D4D03AQHxdN-DfFixng/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1705558678204?e=1736380800&v=beta&t=yZ4iUMwPypgsxk553TzWEYNjrGpcVZwW3cEvxXBGb9w",
                  name:"Runley",
                  company:"Video Editing" 
                },
                {
                    title:"3D Animation",
                    discription:"I collaborated on a 3D animation project, and I couldn't be happier with the results! The team displayed exceptional creativity and technical expertise, bringing our vision to life",
                    review:5,
                    img:"https://filmuix.com/wp-content/uploads/2024/05/Courtroom-Consequences-1.webp",
                    name:"Jessica",
                    company:"3d animation" 
                },
                {
                    title:"Web designing",
                    discription:"I've been working with this agency for a few months, and they are truly exceptional at managing my projects and social media platforms efficiently.The service is fast and i love it",
                    review:4.4,
                    img:"https://media.licdn.com/dms/image/v2/C5603AQFkyOMID-hu6g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1657596924174?e=1736380800&v=beta&t=OPkj1RJvC1baEGnGqNGcOotOjc9j1oJGUZvdpGLyc_8",
                    name:"Sourav Jaiswal",
                    company:"web designing" 
                },
            ],
            1:[
                {
                    title:"3d Modeling",
                    discription:"I recently worked with Palm Online Services for 3D modeling services, and I couldn't be happier! The team was professional, responsive, and truly understood my vision",
                    review:4.6,
                    img:"https://filmuix.com/wp-content/uploads/2024/05/Sejal.webp",
                    name:"Ana Rohodes",
                    company:"3d Model" 
                },
                {
                    title:"SEO",
                    discription:"I hired Palm Online Services for SEO services, and the results have been fantastic! They took the time to understand my business and implemented strategies",
                    review:4.1,
                    img:"https://media.licdn.com/dms/image/v2/D4D03AQGmt8ytmAEj0A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728157355486?e=1736380800&v=beta&t=plG2-_gcrd4A4X7bwoT4kcrnlPKwB8gbXKN7qExmbg0",
                    name:"Mirza Ali",
                    company:"SEO" 
                },
                {
                    title:"Graphic designing",
                    discription:"I had an excellent experience with the graphic design services! The team really understood my vision and delivered stunning visuals that's Perfect",
                    review:4.8,
                    img:"https://media.licdn.com/dms/image/v2/D5603AQG2BG-W0GryjA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722769241154?e=1736380800&v=beta&t=H7GOyFet7UCqFodd4Hc2d1UQ2DLrLygVtIfinv9mfLE",
                    name:"Morris Clarke",
                    company:"Designing" 
                },
            ]
        }
    ]

    const box16 = useRef();
    const box17 = useRef();
    const box18 = useRef();

    const main5 = useRef();

    useGSAP(()=>{
        gsap.from([box16.current,box17.current,box18.current],{
            scale:0,
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const Next = ()=>{
        if(currentIndex >= 1){
            setCurrentIndex(0);
        }else{
            setCurrentIndex(currentIndex+1)
        }
    }

    const Back = ()=>{
        if(currentIndex === 0){
            setCurrentIndex(1);
        }else{
            setCurrentIndex(currentIndex-1)
        }
    }

  return (
    <div ref={main5} className=' relative mb-40 flex flex-wrap gap-10 justify-center mt-20 md:mt-40 '>
      
        <div ref={box16}>
            <Review img={data[0][currentIndex][0].img} review={data[0][currentIndex][0].review} company={data[0][currentIndex][0].company} name={data[0][currentIndex][0].name} title={data[0][currentIndex][0].title} discription={data[0][currentIndex][0].discription} />
        </div>

       <div ref={box17}>
            <Review img={data[0][currentIndex][1].img} review={data[0][currentIndex][1].review} company={data[0][currentIndex][1].company} name={data[0][currentIndex][1].name} title={data[0][currentIndex][1].title} discription={data[0][currentIndex][1].discription} />
       </div>

        <div ref={box18}>
            <Review img={data[0][currentIndex][2].img} review={data[0][currentIndex][2].review} company={data[0][currentIndex][2].company} name={data[0][currentIndex][2].name} title={data[0][currentIndex][2].title} discription={data[0][currentIndex][2].discription} />
        </div>
        <i onClick={Back} className="py-2 px-4 left-[-10px] md:left-0 absolute text-black top-[40%] cursor-pointer bg-gray-300 text-xl md:py-3 md:px-5 rounded-[50px] fa-solid fa-angle-left"></i>
        <i onClick={Next} className=" right-[-10px] md:right-0 absolute text-black top-[40%] cursor-pointer bg-gray-300  text-xl py-2 px-4 md:py-3 md:px-5 rounded-[50px] fa-solid fa-chevron-right"></i>
    </div>
  )
}

export default ReviewsContainer