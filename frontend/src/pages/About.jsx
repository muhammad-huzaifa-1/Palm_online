import React from 'react'
import Header from '../components/Header'
import InterestedContainer from '../components/InterestedContainer'
import Founder from '../components/Founder'
import TrustedBussiness from '../components/TrustedBussiness'
import WhyChooseUs from '../components/WhyChooseUs'
import TotalExp from '../components/TotalExp'
import FounderCardContainer from '../components/FounderCardContainer'
import TeamProfile from '../components/TeamProfile'

const About = () => {
  return (
    <div>
      <Header title={"About US"} />
      <Founder/>
      <div className=' mt-36 '><TrustedBussiness/></div>
      <WhyChooseUs style={"mt-48 mb-20"} style2={"xl:w-1/2"} title={"WHY CHOOSE US?"} heading={"Experience Unmatched"} heading2={"Creativity and Excellence"} text={"Choose Undefined for innovative storytelling, creative excellence, and results that make your brand stand out in the digital landscape."} btnText={"KNOW MORE!"}/>
      <TotalExp/>
      <TeamProfile/>
      <FounderCardContainer/>
      <InterestedContainer/>
    </div>
  )
}

export default About