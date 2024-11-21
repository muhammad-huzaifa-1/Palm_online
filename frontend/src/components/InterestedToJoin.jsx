import React from 'react'
import Title from './Title'
import Button from './Button'

const InterestedToJoin = () => {
  return (
    <div className='bg-[#212120] h-[50vh] flex justify-center items-center mt-[200px] '>
        <div className=' p-4 mt-[-50px] '>
            <Title margin={"mt-0 md:mt-0"} text={"JOIN Us"} title={`Interested in joining our team?`}/>
            <div className=' flex flex-col items-center mt-8 '>
                <p className='text-[#D8D1BD] text-[10px] lg:text-base lg:w-[600px] text-center'>If you’re passionate about content and want to help some of the world’s
                biggest creators grow, this is the place for you!</p>
                <Button title={"CONTACT US"}/>
            </div>
        </div>
    </div>
  )
}

export default InterestedToJoin