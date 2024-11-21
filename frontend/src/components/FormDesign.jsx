import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const FormDesign = () => {

  const {ShowNotification} = useContext(ShopContext);

  const userName = JSON.parse(localStorage.getItem('user'));

  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [display ,setDisplay] = useState('hidden');

  const onSubmit = async (event) => {
    event.preventDefault();
    setDisplay('flex')
    if(userName){
       if(email && number && subject && msg && email.includes("@gmail.com") && number.length>=7 && subject.length>3 && msg.length>10){
        const formData = new FormData(event.target);

        const audio = new Audio(assets.Success)

        formData.append("access_key", "c40186fa-614a-4892-9dee-9776a05503ea");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          setDisplay('hidden')
          setEmail("");
          setNumber("");
          setSubject("");
          setMsg("");
          ShowNotification("EmailSent",res.message);
          audio.play();
        }else if(!res.success){
          setDisplay('hidden')
          ShowNotification("EmailError",res.message)
        }
       }else{
        setDisplay('hidden')
        ShowNotification("emailEmpty")
       }
    }else{
      setDisplay('hidden')
      ShowNotification("emailLoginError")
    }
  };

  return (
    <form onSubmit={onSubmit} className=' relative p-8 bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% rounded-[10px] '>
         <div className={` absolute ${display} justify-center items-center  w-full h-full top-0 right-0 bg-[#ffffff91] `}>
            <img className=' w-20 ' src={assets.loader} alt="" />
         </div>
         <h1 className=' text-2xl font-semibold text-center mb-6 '>Send US Message</h1>
        <div className=' flex flex-col gap-1 '>
           <div>
                <input type="text" name='name' value={userName?userName:"Guest User"} placeholder='Full Name' className=' px-[15px] text-[12px] py-[8px] rounded  mb-5 mr-6 ' />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='Email Address' className=' px-[15px]  text-[12px] py-[8px] rounded '/>
           </div>
            
            <div>
                <input type="text" name='number' value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Phone Number' className=' px-[15px] mt-4 md:mt-0 text-[12px] py-[8px] rounded  mr-6 ' />
                <input type="text" name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Subject' className=' px-[15px] mt-4 md:mt-0 text-[12px] py-[8px] rounded '/>
            </div>
        </div>
        <textarea name='message' value={msg} onChange={(e)=>setMsg(e.target.value)} className=' w-[100%] resize-none text-[12px] py-[8px] px-[13px] rounded mt-6' rows={10} placeholder=' Your Message '  id=""></textarea>

        <div className=' flex justify-center mt-6 '>
            <button type='submit' className=' hover:rounded-tr-[5px] transition-all hover:rounded-bl-[5px] bg-[#c0ff86] py-2 px-4 rounded-[50px] '>Send Message</button>
        </div>
    </form>
  )
}

export default FormDesign