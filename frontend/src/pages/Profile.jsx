import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const {ShowNotification,showUserProfile,HideUserProfile,name,setName,email,setEmail,password,setPassword,currentPass, setCurrentPass,disableDetailsBtn, setDisableDetailsBtn,disable, setDisable,AccDate, setAccDate} = useContext(ShopContext);

  const navigate = useNavigate();
  const [details,setDetails] = useState('hidden');
  
  const showDetails = ()=>{
    setDetails("block")
  }

  const HideDetails = ()=>{
    setDetails("hidden");
  }


  const getUserInfo = async()=>{

    const UserName = JSON.parse(localStorage.getItem('user'));
    const UserId = JSON.parse(localStorage.getItem('productId'));

    if(UserName && UserId){
       let result = await fetch(import.meta.env.VITE_REACT_API_URL + `/fetchUser/${UserId}`);
       result = await result.json();
       if(currentPass === await result.password && result){
         setDisable(true)
         await ShowNotification("accountFind");
         setDisable("true")
         setDetails("hidden");
         setDisableDetailsBtn("bg-gray-500 text-gray-100 border-none cursor-not-allowed")
         setAccDate(result.createdAt)
         setCurrentPass("")
         setName(result.name);
         setEmail(result.email);
         setPassword(result.password);
       }if(currentPass !== await result.password ){
        setCurrentPass("")
        setDetails("block");
        setDisable(false)
        ShowNotification("tryAgain")
       }
    }else{
      HideUserProfile();
      localStorage.removeItem('user');
      localStorage.removeItem('productId');
      navigate('/login');
      ShowNotification("opps");
    }
  }

  const SignOut = ()=>{
    HideUserProfile();
    localStorage.removeItem('user');
    localStorage.removeItem('productId');
    navigate('/login')
  }


  return (
    <div className={` ${showUserProfile} animate-popup overflow-y-auto fixed md:w-[50%] lg:w-[40%] w-full 2xl:w-[30%] bg-[#D8D1BD] z-[80] h-[100vh] top-0 right-0 `}>
      
      <i onClick={HideUserProfile} className=' text-[40px] text-gray-600 hover:text-black cursor-pointer absolute top-5 left-5 fa-solid fa-xmark ' />

      <div className='flex mt-10 h-[220px] flex-col justify-center items-center'>
         <img className=' w-32 mt-10' src={assets.profilePic} alt="" />
         <h1 className=' text-xl mt-4 font-semibold text-[#333333]'>User Profile</h1>
      </div>

      <button onClick={showDetails} disabled={disable} className={` w-full ${disableDetailsBtn} text-center border p-2 cursor-pointer hover:bg-gray-600 hover:border-gray-600 hover:text-white border-black mt-10 text-lg `}>Show Details</button>

      <div className='px-4 flex flex-col mt-10 lg:mt-13'>

         <label className='flex flex-col' htmlFor="">
           <p className=' mb-2 text-gray-600 '>Name</p>
           <input className=' p-2 mb-6 rounded text-gray-700 bg-transparent border border-[#CA5B5B] outline-none ' value={name} type="text" />
         </label>

         <label className='flex flex-col' htmlFor="">
           <p className=' mb-2 text-gray-600 '>Email</p>
           <input className=' p-2 mb-6 rounded text-gray-700 bg-transparent border border-[#CA5B5B] outline-none ' value={email} type="text" />
         </label>
         
         <label className='flex flex-col' htmlFor="">
           <p className=' mb-2 text-gray-600 '>Password</p>
           <input className=' p-2 mb-6 rounded text-gray-700 bg-transparent border border-[#CA5B5B] outline-none ' value={password} type="text" />
         </label>

         <label className='flex flex-col' htmlFor="">
           <p className=' mb-2 text-gray-600 '>Account Creation date</p>
           <input className=' p-2 mb-2 rounded text-gray-700 bg-transparent border border-[#CA5B5B] outline-none ' value={AccDate} type="text" />
         </label>

      </div>

      <button onClick={SignOut} className=' bottom-10 mt-28 w-full text-center border p-2 cursor-pointer bg-red-500 border-red-500 text-white text-lg '>Sign out</button>

      <div className={` ${details} bg-[#3b3b3b52] w-full h-[100vh] absolute flex justify-center items-center top-0`}>
         <div className=' bg-white py-8 px-10 rounded-[10px] '>
            <label className='flex flex-col' htmlFor="">
              <h1 className=' text-2xl font-semibold text-center text-[#7ABB40] mb-4 '>For Security purpose</h1>
              <p className=' text-sm text-gray-600 mb-4 '>Please enter you password to see you details!</p>
              <input value={currentPass} onChange={(e)=>setCurrentPass(e.target.value)} placeholder='Enter password' className=' p-2 mb-2 rounded text-gray-700 bg-transparent border border-[#CA5B5B] outline-none ' type="text" />
            </label>
            <div className='flex justify-center gap-3 mt-4'>
              <button onClick={getUserInfo} className=' bg-blue-300 hover:bg-blue-500 p-3 rounded '>Continue</button>
              <button onClick={HideDetails} className=' bg-red-300 hover:bg-red-500 p-3 rounded '>Cancel</button>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Profile