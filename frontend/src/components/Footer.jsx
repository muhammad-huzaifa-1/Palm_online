import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
    <div className=' flex gap-y-10 gap-x-10 md:gap-y-10 md:gap-x-20 xl:gap-y-10 xl:gap-x-60 2xl:justify-between border-b flex-wrap py-20 px-3 border-t border-[#ffffff5b]'>
         <div>
            <img className=' w-44 ' src={assets.logo} alt="" />
            <p className=' mt-5 text-[#D8D1BD] text-[13px] ' >Welcome to Palm Online Services, where creativity meets</p>
            <p className='text-[#D8D1BD] text-[13px] '>excellence..</p>
            <div className=' mt-5 '>
                <i className="bg-[#D8D1BD] hover:bg-[#212120] hover:text-[#7ABB40] hover:scale-[1.1] cursor-pointer transition duration-[0.2s]  py-[7.5px] px-[14px] text-2xl rounded-[50px] fa-brands fa-instagram"></i>
            </div>
         </div>

         <div>
                <ul>
                    <li className=' text-white font-semibold '>Services</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 mt-4 '>Video Editing</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Graphic Design</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Website Developing</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>3d Modeling</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>3d Animation</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Social Media Manage</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-4 '>Youtube Automation</li>
                </ul>
         </div>

         <div>
                <ul>
                    <li className=' text-white font-semibold '>Comapny</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 mt-4 '>About us</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Our Team</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Careers</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Article & News</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-1 '>Terms & Conditions</li>
                    <li className=' text-[#D8D1BD] text-[11px] mb-4 '>Privacy Policy</li>
                </ul>
         </div>
    </div>
    <div className=' flex justify-center mt-5 mb-5 '>
        <p className=' text-[#D8D1BD] text-[10px] lg:text-base md:text-sm '>Copyright 2024@ Palm-Online-Services - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer