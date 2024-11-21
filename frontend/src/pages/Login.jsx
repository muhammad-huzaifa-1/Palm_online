import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
const Login = () => {

    const navigate = useNavigate();
    const {ShowNotification} = useContext(ShopContext);
    const [type,setType] = useState("password");
    const [state,setState] = useState(1);
    const [BtnDisable, setBtnDisable] = useState("bg-transparent");
    const loginbody = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const forgetPass = ()=>{
        ShowNotification("forgetPass")
    }

    useGSAP(()=>{
        gsap.fromTo(loginbody.current,{scale:0.7,opacity:0},{scale:1,opacity:1,duration:0.8,ease:"bounce.out"})
    })

    const loginUser = async(e)=>{
        e.preventDefault();
        setBtnDisable("bg-[#B2B2B2]")

        let result = await fetch("https://palm-online-front.vercel.app/login",{
            method:"post",
            body: JSON.stringify({email,password}),
            headers:{
                "Content-Type" : "application/json",
            }
        });

        result = await result.json()
        if(!result.email && !result.password){
            setBtnDisable("bg-transparent")
            ShowNotification("LoginError",result.result)
        }else{
            navigate('/')
            setBtnDisable("bg-transparent")
            localStorage.setItem('user',JSON.stringify(result.name))
            localStorage.setItem('productId',JSON.stringify(result._id))
            ShowNotification("LoginUser")
        }
    }

    const ChangeState = ()=>{
        if(state===1){
            setType("text");
            setState(0);
        }else{
            setType('password');
            setState(1);
        }
    }

    return (
        <div className=' w-full flex justify-center items-center h-[130vh] xl:h-[80vh]'>
            <div ref={loginbody} className='overflow-hidden rounded-[10px] w-full md:w-[60%] lg:w-[50%] 2xl:w-[30%] bg-[#D8D1BD] '>
                <div className=' p-8 w-full bg-[#7ABB40]'>
                    <h1 className='text-center text-[white] text-3xl font-[550] '>Welcome to POS</h1>
                </div>
                <div className=' px-6 '>
                    <h1 className='text-center text-3xl border-b border-gray-400 pb-4 mt-6 font-sans font-semibold text-gray-800'>Login</h1>
                </div>
                <div className='w-full mt-4 flex flex-col  items-center p-6 gap-4 '>
                    <div className='relative w-full'><input onChange={(e)=>setEmail(e.target.value.toLocaleLowerCase())} value={email} placeholder='Email' className=' py-2 px-3  w-full' type="email" name="" id="" /><div className=' bg-gray-700 text-white py-1 flex justify-center w-[60px]  top-0 right-0 absolute '><i className="text-2xl fa-solid fa-envelope"></i></div></div>
                    <div className='w-full relative'><input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' className='py-2 px-3 w-full ' type={type} /><div className=' bg-gray-700 text-white py-1 flex justify-center w-[60px] top-0 right-0 absolute '><i onClick={ChangeState} className={`text-2xl hover:text-[#7ABB40] cursor-pointer fa-solid ${state===1?"fa-lock":"fa-lock-open"}`}></i></div></div>
                    <p onClick={forgetPass} className=' text-sm w-full cursor-pointer text-left hover:underline '>forget Password?</p>
                </div>
                <div className=' p-6 mt-[-20px] '>
                    <button type='submit' disabled={BtnDisable==="bg-transparent"?false:true} onClick={loginUser} className={`p-2 text-xl w-full ${BtnDisable} ${BtnDisable==="bg-transparent"?"cursor-pointer hover:text-white hover:bg-black text-black border-black border":"border-transparent cursor-progress text-gray-500"} transition-all  `}>Login</button>
                </div>
                <div className=' p-6 '>
                    <p className=' text-center text-sm'>Don't have an account?</p>
                    <p onClick={()=>{navigate("/register")}} className=' text-center text-base cursor-pointer mt-2 font-semibold text-gray-500 hover:text-[#7ABB40]'>Sign up now</p>
                </div>
            </div>
        </div>
    )
}

export default Login
