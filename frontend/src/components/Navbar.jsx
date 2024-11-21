import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
// import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

  const {ShowNotification,DisplayUserProfile} = useContext(ShopContext);
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState('hidden');
  const userName = JSON.parse(localStorage.getItem('user'));

  const logoutUser = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("productId");
    ShowNotification("LogoutUser")
    navigate('/login')
  }

  return (
    <div>
      {/* for medium a onClick={()=>setShowNav('hidden')}nd large devices */}
       <div className='flex py-5 border-b border-[#d8d1bd46] items-center justify-between '>
          <img src={assets.logo} className=' w-32 mt-3 md:mt-0 md:w-40' alt="" />

          <ul className=' mt-5 hidden md:flex gap-5  text-sm md:text-sm text-[#D8D1BD] font-medium '>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p >ABOUT</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
            </NavLink>
            
            <NavLink to='/services' className='flex flex-col items-center gap-1'>
                <p>SERVICES</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
            </NavLink>

            <NavLink to='/portfolio' className='flex flex-col items-center gap-1'>
                <p>PORTFOLIO</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
            </NavLink>

            <NavLink to='/ourteam' className='flex flex-col items-center gap-1'>
                <p>OURTEAM</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
            </NavLink>
          </ul>

          <div className=' flex items-center gap-x-6 '>
            {/* <i className="fa-solid fa-phone text-[#D8D1BD] text-3xl mt-5 hover:text-[#7ABB40] cursor-pointer"></i> */}
            <div className='relative '>
              <span className='group h-[40px] relative'><i className="fa-regular fa-user text-[#D8D1BD] text-3xl mt-5 hover:text-[#7ABB40] cursor-pointer"></i>
              <div className='group-hover:block hidden absolute z-10  dropdown-menu right-0 pt-4 '>
                 <div className=' flex flex-col gap-2 w-40 py-5 px-5 bg-[#D8D1BD] rounded  '>
                   {
                     userName?<>
                     <p onClick={DisplayUserProfile} className=' text-black border border-black hover:bg-[#7ABB40] hover:border-[#D8D1BD] p-[6px] text-center rounded cursor-pointer '>Profile</p>
                     <NavLink to={"/contact"}><h1 className=' text-black border border-black hover:bg-[#7ABB40] hover:border-[#D8D1BD] p-[6px] text-center rounded cursor-pointer '>Contact</h1></NavLink>
                     <p onClick={logoutUser} className=' text-black border border-black hover:bg-red-500 hover:border-[#D8D1BD] p-[6px] text-center rounded cursor-pointer '>Logout</p></>:<><NavLink to={"/contact"}><h1 className=' text-black border border-black hover:bg-[#7ABB40] hover:border-[#D8D1BD] p-[6px] text-center rounded cursor-pointer '>Contact</h1></NavLink>
                     <NavLink to={'/login'}><h1 className=' text-black border border-black hover:bg-[#7ABB40] hover:border-[#D8D1BD] p-[6px] text-center rounded cursor-pointer '>Login</h1></NavLink>
                     </>
                   }
                 </div>
              </div>
            </span>
            </div>
            <i onClick={()=>setShowNav('block')} className="fa-solid fa-bars block md:hidden text-[#D8D1BD] text-3xl mt-[22px] hover:text-[#7ABB40] cursor-pointer"></i>
          </div>
       </div>

       {/* for small devices */}
       <div className={`${showNav} z-50 md:hidden fixed top-0 left-0 py-4 px-4 bg-[#D8D1BD] w-full h-full `}>
          <div onClick={()=>setShowNav('hidden')} className=' cursor-pointer flex items-center gap-x-2 text-black '>
            <i className="fa-solid fa-chevron-left"></i>
            <h1>BACK</h1>
          </div>

          
          <ul className=' flex flex-col items-start text-black mt-10 gap-5 '>
            <NavLink to='/' className='flex flex-col w-full items-left gap-1'>
                <li onClick={()=>setShowNav('hidden')} className='text-left py-1 px-2'>
                  <p>HOME</p>
                  <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
                </li>
            </NavLink>

            <NavLink to='/about' className='flex flex-col text-left  w-full items-left gap-1'>
               <li onClick={()=>setShowNav('hidden')} className=' py-1 px-2'>
                <p>ABOUT</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
               </li>
            </NavLink>
            
            <NavLink to='/services' className='flex flex-col text-left w-full items-left gap-1'>
                <li onClick={()=>setShowNav('hidden')} className=' py-1 px-2'>
                <p>SERVICES</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
                </li>
            </NavLink>

            <NavLink to='/portfolio' className='flex flex-col  w-full items-left gap-1'>
                <li onClick={()=>setShowNav('hidden')} className=' py-1 px-2'>
                <p>PORTFOLIO</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
                </li>
            </NavLink>

            <NavLink to='/ourteam' className='flex flex-col  w-full items-left gap-1'>
                <li onClick={()=>setShowNav('hidden')} className=' py-1 px-2'>
                <p>OURTEAM</p>
                <hr className=' hidden border-none bg-[#D8D1BD] h-[1px] '/>
                </li>
            </NavLink>
          </ul>
       </div>
    </div>
  )
}

export default Navbar