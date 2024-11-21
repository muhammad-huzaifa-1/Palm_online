import React, { useContext, useRef } from 'react'
import { ShopContext } from '../context/ShopContext';
const ToastNotificcation = () => {

    const {notifi,toastAnim,setNotifi} = useContext(ShopContext);

    const removeToast = (id)=>{
        const filteredToasts = notifi.filter((value)=>value.id !== id);
        setNotifi(filteredToasts);
    }

  return (
    <div className={` w-auto z-[99999] h-auto fixed top-9 right-0 `}>
        {
           notifi.map((values)=>{
                return(
                    <div key={values.id} ref={toastAnim} className=' animate-popup w-[300px] relative mb-2 bg-[#D8D1BD] px-3 py-3 rounded-l flex items-center gap-x-3 '>
                        <i onClick={()=>removeToast(values.id)} className=" text-xl absolute top-1 right-3 text-gray-500 hover:text-black cursor-pointer fa-solid fa-xmark"></i>
                        <i className={`text-3xl ${values.color} fa-solid ${values.icon}`}></i>
                        <p className='text-sm w-[80%]'>{values.msg}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ToastNotificcation