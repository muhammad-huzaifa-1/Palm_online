import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ExperinceBars = () => {
  const box29 = useRef();
  const box30 = useRef();
  const box31 = useRef();
  const box32 = useRef();
  const box33 = useRef();
  const box34 = useRef();

  const main7 = useRef();
  const main8 = useRef();


  useGSAP(()=>{

    gsap.from(main7.current,{
      opacity:0,
      scale:0.5,
      y:500,
      duration:1,
      scrollTrigger:{
        trigger:main7.current,
        scroller:"body",
        start:"top 100%"
      }
    })

    gsap.from(box29.current,{
      opacity:0,
      x:-200,
      duration:1,
      delay:0.5,
      scrollTrigger:{
        trigger:main8.current,
        scroller:'body',
        start:'top 40%'
      }
    })

    gsap.from([box30.current, box31.current,box32.current,box33.current,box34.current],{
      opacity:0,
      duration:0.5,
      delay:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:main8.current,
        scroller:'body',
        start:"top 40%"
      }
    })
  })

  return (
    <div ref={main8}>
          <div ref={main7} className=' p-10 w-full bg-[#222222] mt-36 '>
        <div>
            <div ref={box29} className=' lg:w-[80%] xl:w-[40%] '>
                <p className=' text-[11px] text-[rgb(122,187,64)] md:text-lg font-semibold '>OUR VALUE</p>
                <h1 className=' text-xl md:text-3xl lg:text-[38px] md:leading-[45px] lg:leading-[50px] mt-4 text-[#D8D1BD] font-semibold '>Experience You Can Trust. Contact us to discuss your project.</h1>
                <p className=' mt-8 text-[11px] md:text-[12px] lg:text-sm text-[#d8d1bda4]'>We’ve been there. We’ve tackled tight deadlines, overcome unexpected challenges, and created impactful videos for a wide range of clients across diverse industries. Our experience allows us to anticipate your needs, navigate potential roadblocks, and deliver exceptional video content that achieves your marketing goals.</p>
            </div>

            <div className=' mt-10 '>

                <div  ref={box30}  className=' md:w-[90%] lg:[70%]  xl:w-[40%] '>
                  <div  className=' text-[10px] flex justify-between mb-4 text-white md:text-sm '>
                    <h1>Web development</h1>
                    <p>90%</p>
                  </div>
                  <div className='p-[3px] overflow-hidden md:p-[5px] before:p-[3px] rounded-[50px] bg-[#737373] relative  before:content before:w-[90%] md:before:p-[5px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-gradient-to-l from-[#02aabd] from-[0%] to-[#00e696] to-[100%] '></div>
                </div>
                <div ref={box31} className=' md:w-[90%] lg:[70%]  xl:w-[40%] mt-8'>
                  <div  className=' text-[10px] flex justify-between mb-4 text-white md:text-sm '>
                    <h1>3d Modeling</h1>
                    <p>87%</p>
                  </div>
                  <div  className='p-[3px] overflow-hidden md:p-[5px] before:p-[3px] rounded-[50px] bg-[#737373] relative  before:content before:w-[87%] md:before:p-[5px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-gradient-to-l from-[#02aabd] from-[0%] to-[#00e696] to-[100%]  '></div>
                </div>
                <div  ref={box32} className=' md:w-[90%] lg:[70%]  xl:w-[40%] mt-8'>
                  <div className=' text-[10px] flex justify-between mb-4 text-white md:text-sm '>
                    <h1>3d Animation</h1>
                    <p>81%</p>
                  </div>
                  <div  className='p-[3px] overflow-hidden md:p-[5px] before:p-[3px] rounded-[50px] bg-[#737373] relative  before:content before:w-[81%] md:before:p-[5px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-gradient-to-l from-[#02aabd] from-[0%] to-[#00e696] to-[100%]  '></div>
                </div>
                <div ref={box33}  className=' md:w-[90%] lg:[70%]  xl:w-[40%] mt-8'>
                  <div className=' text-[10px] flex justify-between mb-4 text-white md:text-sm '>
                    <h1>Video Editing</h1>
                    <p>94%</p>
                  </div>
                  <div  className='p-[3px] overflow-hidden md:p-[5px] before:p-[3px] rounded-[50px] bg-[#737373] relative  before:content before:w-[94%] md:before:p-[5px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-gradient-to-l from-[#02aabd] from-[0%] to-[#00e696] to-[100%]'></div>
                </div>
                <div ref={box34} className=' md:w-[90%] lg:[70%]  xl:w-[40%] mt-8'>
                  <div  className=' text-[10px] flex justify-between mb-4 text-white md:text-sm '>
                    <h1>Graphic Designing</h1>
                    <p>92%</p>
                  </div>
                  <div  className='p-[3px] overflow-hidden md:p-[5px] before:p-[3px] rounded-[50px] bg-[#737373] relative  before:content before:w-[92%] md:before:p-[5px] before:absolute before:top-0 before:left-0 before:rounded-[50px] before:bg-gradient-to-l from-[#02aabd] from-[0%] to-[#00e696] to-[100%]  '></div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default ExperinceBars