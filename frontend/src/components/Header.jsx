import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
const Header = ({title, text}) => {

  const {header} = useContext(ShopContext);

  useGSAP(()=>{
      gsap.from(header.current,{scale:0})
  })

  return (
    <div ref={header} className=' mb-36 rounded-b-[50px] md:rounded-b-[80px] overflow-hidden relative before:absolute before:content before:w-[120px] before:h-[120px] before:bg-[#79bb40af] before:rounded-[90px] before:z-[-9] before:top-[50px] before:left-[40%] after:absolute after:content after:w-[150px] after:h-[150px]  after:rounded-[90px] after:bg-[#02aabd9d] after:z-[-9] after:top-[70px] after:left-[50%]   '>
        <div className=' flex-col overflow-hidden flex  backdrop-blur-[70px] items-center justify-center w-full border border-t-none lg:rounded-b-[100px] rounded-b-[50px] h-[150px] md:rounded-b-[80px] border-[#ffffff4d] md:h-[200px] lg:h-[300px] '>
            <h1 className=' text-center text-[18px] md:text-3xl lg:text-[40px] font-semibold text-[#D8D1BD] '>{title}</h1>
            <p className='mt-2 md:mt-5 w-[250px] md:w-auto text-center text-[10px] md:text-sm text-[#D8D1BD] '>{text}</p>
        </div>
    </div>
  )
}

export default Header