import React from 'react'
import Header from '../components/Header'
import ContactContent from '../components/ContactContent'
import FormDesign from '../components/FormDesign'

const Contact = () => {
  return (
    <div>
      <Header title={"Contact Us"} text={"Start the conversation to established good relationship and business."}/>
      <ContactContent/>
      <div className=' flex justify-center mt-[200px] mb-[100px]'>
        <FormDesign/> 
      </div>
    </div>
  )
}

export default Contact