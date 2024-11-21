import React from 'react'

const Button = ({title,Clickfunction}) => {
  return (
    <div>
        <button onClick={Clickfunction} className=' hover:shadow-[0px_4px_10px_3px_#ffffff3e] hover:bg-gradient-to-r hover:from-[#00e696] hover:from-0% hover:to-[#02aabd] transition-all hover:to-100% bg-gradient-to-r from-[#02aabd] from-0% to-[#00e696] to-100% mt-10 text-center text-white py-[5px] px-5 text-[11px] md:text-base md:py-2  md:px-6 font-medium rounded-[50px] '>{title}</button>
    </div>
  )
}

export default Button