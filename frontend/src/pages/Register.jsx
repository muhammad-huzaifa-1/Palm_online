import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
const Register = () => {

    const {ShowNotification} = useContext(ShopContext);

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [type,setType] = useState("password");
    const [state,setState] = useState(0)
    const [btnDisable, setBtnDisable] = useState("bg-transparent")
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const registerBody = useRef();

    useGSAP(()=>{
        gsap.fromTo(registerBody.current,{scale:0.7,opacity:0},{scale:1,opacity:1,duration:0.8,ease:"bounce.out"})
    })

    const RegisterUser = async(e)=>{
        setBtnDisable("bg-[#B2B2B2]")
        e.preventDefault();
        let result = await fetch(import.meta.env.VITE_REACT_API_URL+'/register',{
            method:"post",
            body: JSON.stringify({name,email,password}),
            headers:{
                "Content-Type" : "application/json"
            }
        });

        result = await result.json();

        if(!result.email && !result.name){
            setBtnDisable("bg-transparent")
            ShowNotification('registerError',result.result)
        }else if(!result.email){
            setBtnDisable("bg-transparent")
            ShowNotification('registerError',result.result)
        }else if(!result.name){
            setBtnDisable("bg-transparent")
            ShowNotification('registerError',result.result)
        }else if(!result.password){
            setBtnDisable("bg-transparent")
            ShowNotification('registerError',result.result)
        }else if(!result.email && !result.name && result.password){
            setBtnDisable("bg-transparent")
            ShowNotification('registerError',result.result)
        }else{
            setBtnDisable("bg-transparent")
            ShowNotification('registered',result.result)
            navigate('/login')
        }
    } 

    
    const changeType = ()=>{
        if(state===1){
            setType("password");
            setState(0)
        }else if(state === 0){
            setType("text");
            setState(1)
        }
    }

    return (
        <div className=' w-full flex justify-center items-center h-[130vh] xl:h-[80vh]'>
            <div ref={registerBody} className='overflow-hidden rounded-[10px] w-full md:w-[60%] lg:w-[50%] 2xl:w-[30%] bg-[#D8D1BD] '>
                <div className=' p-8 w-full bg-[#7ABB40]'>
                    <h1 className='text-center text-[white] text-3xl font-[550] '>Welcome to POS</h1>
                </div>
                <div className=' px-6 '>
                    <h1 className='text-center text-3xl border-b border-gray-400 pb-4 mt-6 font-sans font-semibold text-gray-800'>Sign up</h1>
                </div>
                <div className='w-full mt-4 flex flex-col  items-center p-6 gap-4 '>

                    <div className='relative w-full'><input onChange={(e)=>setName(e.target.value)} value={name} placeholder='Username' className=' py-2 px-3  w-full' type="text" name="" id="" /><div className=' bg-gray-700 text-white py-1 flex justify-center w-[60px] top-0 right-0 absolute '><i className="text-2xl fa-solid fa-user"></i></div></div>

                    <div className='relative w-full'><input onChange={(e)=>{setEmail(e.target.value.toLocaleLowerCase())}} value={email} placeholder='Email' className=' py-2 px-3  w-full' type="email" name="" id="" /><div className=' bg-gray-700 text-white py-1 flex justify-center w-[60px] top-0 right-0 absolute '><i className="text-2xl fa-solid fa-envelope"></i></div></div>

                    <div className='w-full relative'><input  onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='py-2 px-3 w-full ' type={type} /><div className=' bg-gray-700 text-white py-1 flex justify-center w-[60px] top-0 right-0 absolute '><i className={` hover:text-[#7ABB40] cursor-pointer text-2xl fa-solid ${state===0?"fa-lock":"fa-lock-open"}`} onClick={changeType}></i></div></div>

                </div>
                <div className=' p-6 mt-[-20px] '>
                    <button type='submit' disabled={btnDisable==="bg-transparent"?false:true} onClick={RegisterUser} className={`p-2 ${btnDisable} text-xl w-full    border ${btnDisable==="bg-transparent"?"cursor-pointer hover:text-white hover:bg-black text-black border-black":"border-transparent cursor-progress text-gray-500"} transition-all `}>Register</button>
                </div>
                <div className=' p-6 '>
                    <p className=' text-center text-sm'>Already have an account?</p>
                    <p onClick={()=>{navigate("/login")}} className=' text-center text-base cursor-pointer mt-2 font-semibold text-gray-500 hover:text-[#7ABB40]'>Sign in now</p>
                </div>
            </div>
        </div>
    )
}

export default Register