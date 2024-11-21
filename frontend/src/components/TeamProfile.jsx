import React, { useContext, useRef } from 'react'
import { assets } from "../assets/assets";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { ShopContext } from '../context/ShopContext';
const TeamProfile = () => {

    const {bodyPop,HideProfile,profileData} = useContext(ShopContext);

    const show = useRef();

    const showCertificate = ()=>{
        gsap.fromTo(show.current,{left:"100%",opacity:0.5},{zIndex:50,left:"0%",opacity:1,duration:0.5})
    };

    const HideCertificate = ()=>{
        gsap.fromTo(show.current,{left:"0%",opacity:1},{zIndex:50,left:"100%",opacity:0,duration:0.5})
    }


    return (
        <div ref={bodyPop} className=' hidden justify-center items-center fixed top-0 backdrop-blur-[3px]  bg-[#ffffff15] left-0 w-full h-[100vh] z-50'>

            <div className='relative rounded-[10px] inline-block overflow-x-hidden overflow-y-hidden bg-[white] w-full md:w-[70%] lg:w-[50%] 2xl:w-[30%] '>
                <div>
                    <i onClick={HideProfile} className="absolute text-3xl right-[25px] cursor-pointer text-gray-500 hover:text-black transition-all top-[20px] fa-solid fa-xmark"></i>

                    <div className=' bg-[#e2cec3] w-[100%] h-[200px] '></div>
                    <div className='absolute top-[50px] flex w-full justify-center'>
                        <img className=' shadow-2xl w-[200px] rounded-[10px]' src={profileData.img} alt="" />
                    </div>
                    <div className=' mt-16 p-4 md:p-8 '>
                        <div className=' pb-3 border-b border-black '>
                            <h1 className='text-base lg:text-xl text-[#7ABB40] font-semibold '>{profileData.name}</h1>
                            <p className=' text-base lg:text-base  text-gray-500 mt-2'>{profileData.skill}</p>
                        </div>
                        <button onClick={showCertificate} className=' w-full hover:bg-black hover:text-[white] transition-all text-center mt-4 border cursor-pointer rounded p-2 '>View Certificate</button>

                        <div className=' flex flex-col gap-8  mt-10 '>
                            <div className='justify-start flex gap-3 items-center '><i className=" text-[22px] text-gray-800 fa-solid fa-envelope"></i><p className=' text-left text-[12px] md:text-sm text-gray-600 '>{profileData.email}</p></div>
                            <div className='justify-start flex gap-3 items-center '><i className=" text-[22px] text-gray-800 fa-solid fa-mobile"></i><p className=' text-left text-[12px] md:text-sm text-gray-600 '>{profileData.number}</p></div>
                            <div className='justify-start flex gap-3 items-center '><i className=" text-[22px] text-gray-800 fa-solid fa-location-dot"></i><p className=' text-left text-[12px] md:text-sm text-gray-600 '>{profileData.location}</p></div>
                        </div>
                    </div>
                </div>

                <div ref={show} className=' absolute z-50 overflow-y-scroll left-[100%] w-[100%] h-[100%] bg-[#ffffff] top-0 '>
                    <i onClick={HideCertificate} className=" text-3xl z-[99] top-[20px] left-[20px] text-gray-500 hover:text-black cursor-pointer absolute  fa-solid fa-backward"></i>
                    <div className=' absolute w-full flex justify-center '>
                        <i className="text-[100px] mt-14 text-[#303030] fa-solid fa-ribbon"></i>
                    </div>
                    <div className=' bg-[#e2cec3] w-[100%] h-[200px] '></div>
                    <div className='mt-4 p-4 '>
                        <h1 className=' font-semibold border-b border-black pb-6 text-xl xl:text-2xl '>Certificates</h1>
                        <div className='mt-8 flex flex-col gap-10'>
                            <img className=' border-[4px] border-[black] w-full rounded-[10px] ' src={profileData.certificate} alt="" />
                           
                            { profileData.certificate2?<img className=' border-[4px] border-[black] w-full rounded-[10px] ' src={profileData.certificate2} alt="" />:<></>}

                             {profileData.certificate3?<img className=' border-[4px] border-[black] w-full rounded-[10px] ' src={profileData.certificate3} alt="" />:<></>}
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamProfile