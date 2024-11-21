import React, { useRef, useState } from 'react'
import Button from './Button'
const ServiceProvided = ({icon,title,discription}) => {

  let checker = useRef();

  const [showMore, setMore] = useState('animate-tiltDown');

  const [MoreData, setMoreData] = useState([])

  let AllData;

  const ShowMore = (title)=>{

    switch(title){
      case "Web Development":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"Web Development",
          point1:"Responsive Design",
          point2:"SEO Best Practices",
          point3:"Fully Functional Website",
          point4:"Performance Optimization",
          point5:"Cross-Browser Compatibility",
          point6:"Content Management Systems (CMS)"
        }
        break;

      case "Video Editing":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"Video Editing",
          point1:"High-Quality Editing",
          point2:"Creative Storytelling",
          point3:"Motion Graphics and Effects",
          point4:"Sound Design and Editing",
          point5:"Color Grading and Correction",
          point6:"Timely Delivery"
        }
        break;

      case "Graphic Designing":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"Graphic Designing",
          point1:"Custom Design Solutions",
          point2:"Versatile Skill Set",
          point3:"Attention to Detail",
          point4:"User-Centered Design",
          point5:"Familiarity with Design Tools",
          point6:"Collaboration and Feedback"
        }
        break;

      case "3d Modeling":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"3d Modeling",
          point1:"Custom 3D Designs",
          point2:"Realistic Texturing and Materials",
          point3:"Efficient Workflow",
          point4:"Animation and Rigging",
          point5:"Attention to Detail",
          point6:"Collaborative Process"
        }
        break;

      case "Search Engine Optimization":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"Search Engine Optimization",
          point1:"Comprehensive Keyword",
          point2:"On-Page Optimization",
          point3:"Technical SEO Proficiency",
          point4:"Quality Content Creation",
          point5:"Link Building Strategies",
          point6:"Performance Tracking"
        }
        break;
      
      case "3d Animation":
        setMore("animate-tiltDown");
        AllData={
          id:MoreData.length+1,
          title:"3d Animation",
          point1:"Creative Storytelling",
          point2:"High-Quality Animation",
          point3:"Proficiency in Industry Software",
          point4:"Character Rigging and Animation",
          point5:"Visual Effects Integration",
          point6:"Timely Delivery and Revisions"
        }
        break;
    }

    setMoreData([...MoreData,AllData])
  }

  const HideMore = ()=>{
    setMore("animate-tiltUp");
  }

  return (
    <div className='border w-[340px] relative overflow-hidden md:w-[400px] border-[#79bb405b] rounded-[10px] p-4 md:p-6'>
        <div className=' bg-[#363533] relative  px-6 py-10 rounded-[10px] '>
            <i className={`md:text-[40px] text-2xl mb-4 text-[#7ABB40] fa-solid ${icon}`}></i>
            <h1 ref={checker} className=' md:text-xl font-semibold text-white text-sm'>{title}</h1>
            <p className='text-[11px] leading-6 md:text-[14px] text-[#D8D1BD] mt-6 mb-[-4px] '>{discription}</p>
            <Button Clickfunction={()=>ShowMore(title)} title={"LEARN MORE"}/>


         {
          MoreData&&MoreData.map((value)=>{
            return(
              <div key={value.id} className={` ${showMore} main123 before:transition-all before:duration-[0.8s] hover:before:scale-[15] before:z-[0]  before:absolute before:rounded-[50px] before:top-[-40px] before:left-[-40px] overflow-hidden before:w-[100px] before:h-[100px] before:bg-[#D8D1BD] duration-[0.8s] transition-all absolute  bg-[#363533] w-full h-full rounded-[10px]`}>

              <i onClick={HideMore} className=' cursor-pointer fa-solid fa-arrow-left absolute top-3 text-black left-4 text-2xl' />
              <h1 className=' text-center relative z-[10] md:text-xl text-sm font-bold text-[#7ABB40] mt-10 '>{value.title}</h1>
    
              <ul className='ml-8 relative z-10'>
                 <span className=' flex items-center gap-x-2 mb-3 mt-10 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>{value.point1}</li> </span>
                 <span className=' flex items-center gap-x-2 mb-3 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>{value.point2}</li> </span>
                 <span className=' flex items-center gap-x-2 mb-3 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>
                 {value.point3}</li> </span>
                 <span className=' flex items-center gap-x-2 mb-3 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>{value.point4}</li> </span>
                 <span className=' flex items-center gap-x-2 mb-3 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>{value.point5}</li> </span>
                 <span className=' flex items-center gap-x-2 mb-3 ' > <i className='fa-solid fa-check text-[white] bg-[#7ABB40] text-[9px] py-[2px] px-[3px] md:text-[11px] md:py-[4px] md:px-[5px] rounded-[50px] '/> <li className='text-[#D8D1BD] text-[12px] md:text-base clr transition-all duration-[1s] '>{value.point6}</li> </span>
              </ul>
          </div>
            )
          })
         }     

        </div>
    </div>
  )
}

export default ServiceProvided