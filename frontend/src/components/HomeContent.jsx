import React, { useRef } from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const HomeContent = () => {
  const welcome = useRef();
  const heading = useRef();
  const heading2 = useRef();
  const heading3 = useRef();
  const text = useRef();
  const btn = useRef();
  useGSAP(()=>{
    const tl = gsap.timeline({duration:1});

    tl.fromTo(welcome.current,{y:200, opacity:0},{y:0,opacity:1});
    tl.fromTo(heading.current,{scale:2.3,opacity:0},{scale:1,opacity:1});
    tl.fromTo(heading2.current,{opacity:0},{opacity:1});
    tl.fromTo(heading3.current,{opacity:0},{opacity:1});
    tl.fromTo(text.current,{y:-30,opacity:0},{y:0,opacity:1});
    tl.fromTo(btn.current,{opacity:0},{opacity:1})
  })

  return (
    <div className='overflow-x-none w-full flex justify-center h-[80vh] items-center '>
        <div className='p-4 flex flex-col items-center w-auto '>
            <p ref={welcome} className=' text-[11px] p-1 px-3 text-[#D8D1BD] rounded-[50px] md:px-5 md:text-sm md:py-2 border border-[#7ABB40] '>Welcome To</p>
            <h1 ref={heading} className= 'text-center mt-6 text-[25px] md:text-[52px] text-[#7ABB40] font-bold '>Palm <span className=' text-[#D8D1BD] '>Online</span> Services</h1>
            <h2 ref={heading2} className=' text-[#D8D1BD] md:text-3xl font-semibold text-center mt-5'>Helping the World's Greatest</h2>
            <h2 ref={heading3} className='text-[#D8D1BD] text-sm md:text-2xl font-semibold md:mt-2 text-center  '>Creators Create.</h2>
            <p  ref={text} className='text-[#6B6860] text-[10px] md:text-sm text-center mt-5'>Taking content creation to the next level with our post production and growth
            strategy service</p>
            <button ref={btn} className=' hover:shadow-[0px_4px_10px_3px_#ffffff3e] hover:bg-gradient-to-r hover:from-[#00e696] hover:from-0% hover:to-[#02aabd] transition-all hover:to-100% bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% mt-10 text-center text-white py-[5px] px-5 text-[11px] md:text-base md:py-3 md:px-8 rounded-[50px] '><i className="fa-brands fa-google-drive fa-bounce ml-[-2px] cursor-pointer mr-1"></i> Portfolio Link</button>
        </div>
    </div>
  )
}

export default HomeContent