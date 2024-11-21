import React from 'react'
import { assets } from '../assets/assets'
import Button from './Button'

const Portfolio = () => {
  return (
    <div className=' rounded-[10px] relative border overflow-hidden lg:max-w-[400px] max-w-[350px] max-h-[500px] lg:max-h-[600px] hover:border-[#79bb40] transition-all cursor-pointer border-[#79bb4073] '>
        <div className='bg-[#221A2F] py-4 px-4'>
            <h1 className=' text-[13px] lg:text-lg font-[600] text-[#7ABB40]'>Video Editing</h1>
            <h1 className=' text-[13px] lg:text-2xl mt-3 text-[#D8D1BD] '>Logo Animation</h1>
        </div>
        <img className=' h-[650px] object-cover grayscale-[100%] hover:grayscale-[0%] transition-all' src={assets.pazookie} alt="" />

        <div className=' absolute w-full h-[400px]  lg:h-[450px] bottom-[-35%] hover:bottom-0 transition-all bg-[#241d2ff6] py-6 px-4 '>

            <div className=' flex justify-between pr-20 border-b pb-4 md:pb-5 border-[#ffffff8e] '>
                <div>
                    <h2 className=' text-[#7ABB40] mb-1 font-[500] text-[12px] lg:text-sm ' >Client</h2>
                    <p className=' text-[#D8D1BD] text-[12px] lg:text-sm '>Abdullah</p>

                    <h2 className='text-[#7ABB40] mb-1 font-[500]  text-[12px] lg:text-sm  mt-2'>Location</h2>
                    <p className=' text-[#D8D1BD] text-[12px] lg:text-sm '>Lahore</p>
                </div>
                <div>
                    <h2 className=' text-[#7ABB40] mb-1 font-[500] text-[12px] lg:text-sm ' >Date</h2>
                    <p className=' text-[#D8D1BD] text-[12px] lg:text-sm '>24 june 2024</p>

                    <h2 className=' text-[#7ABB40] mb-1 font-[500] text-[12px] md:text-sm  mt-2'>Rating</h2>
                    <p className=' text-[#D8D1BD] text-[12px] lg:text-sm '>5.0<i className=" ml-1 mb-1s fa-solid fa-star text-[orange]"></i></p>
                </div>
            </div>
            
            <p className=' lg:text-[14px] leading-[23px] mb-[-10px] lg:leading-[30px] text-[#D8D1BD] mt-3 lg:mt-4 text-[12px] '>
                We are proud to work with Adullah, one of our most polite and esteemed clients. We specialize in editing his Logo Animation videos, ensuring each one is polished and engaging. Our ongoing collaboration with Abdullah reflects our commitment to quality and client satisfaction.
            </p>
            <Button title={"LEARN MORE!"}/>
        </div>
    </div>
  )
}

export default Portfolio