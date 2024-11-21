import React from 'react'

const Review = ({img,review,company,name,title,discription}) => {

    

  return (
    <div className=' relative flex flex-col justify-center px-7 py-7 h-auto bg-[#FFF5D7] rounded-[15px] w-[250px] lg:w-[250px] '>
        <div>
        <i className="text-[#7ABB40] text-sm lg:text-2xl fa-solid fa-comment"></i>
        </div>
        <div className=' gap-x-1 top-[30px] right-[15px] flex items-center absolute '>
            <p className=' text-sm lg:text-[18px] font-semibold '>{review}</p>
            <i className="fa-solid fa-star text-sm lg:text-2xl" style={{color: "#ffa200"}}></i>
        </div>
        <h1 className=' mb-4 text-[12px] lg:text-base font-semibold mt-8'>{title}</h1>
        <p className=' text-[12px] lg:text-sm text-gray-500  '>{discription}</p>
        <div className=' flex justify-around lg:justify-between items-center mt-10 '>
            <img src={img} className=' w-10 lg:w-16 rounded-[50px] ' alt="" />
            <div>
                <h1 className=' text-[11px] lg:text-base font-semibold text-[#7ABB40] '>{name}</h1>
                <p className=' text-[11px] lg:text-sm '>{company}</p>
            </div>
        </div>
    </div>
  )
}

export default Review