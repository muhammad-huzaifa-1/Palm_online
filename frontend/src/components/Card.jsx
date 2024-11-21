import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import Button from './Button'
import { ShopContext } from '../context/ShopContext'

const Card = ({image, name, Skill,checkNames }) => {

  const {ShowProfile} = useContext(ShopContext)

  return (
    <div className=' w-[200px] md:w-[250px]  bg-gradient-to-b border-[#79bb4038] from-[#5f5f5f7f] from-50% to-[#465c579f] to-100% mt-20 border p-4 rounded-[10px] '>
      <img className=' rounded-[10px] ' src={image} alt="" />
      <h1 className=' text-[12px] md:text-xl  font-[600] text-center mt-4 text-[#7ABB40]'>{name}</h1>
      <h1 className=' text-center text-[10px] md:text-lg mt-1 text-[#d8d1bd] font-[600] '>{Skill}</h1>

      <div className=' mb-[-15px] flex justify-center overflow-visible mt-4 '>
        <i className=" bg-white md:py-2 py-1 px-2   md:px-[14px] hover:text-white hover:bg-[#191919] hover:scale-[1.1] transition-all rounded-[50px] duration-[0.3s] cursor-pointer text-sm md:text-xl fa-brands fa-linkedin-in"></i>
      </div>
       <div className=' flex justify-center mb-[5px] '>
          <div onClick={()=>ShowProfile(checkNames)}><Button title={"SEE MORE!"}/></div>
       </div>
    </div>
  )
}

export default Card