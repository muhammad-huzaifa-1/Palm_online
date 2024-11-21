import React from 'react'
import HomeContent from '../components/HomeContent'
import TrustedBussiness from '../components/TrustedBussiness'
import WhyChooseUs from '../components/WhyChooseUs'
import TotalExp from '../components/TotalExp'
import Title from '../components/Title'
import ServicesContainer from '../components/ServicesContainer'
import PortfolioContainer from '../components/PortfolioContainer'
import ReviewsContainer from '../components/ReviewsContainer'
import Consulation from '../components/Consulation'
import InterestedContainer from '../components/InterestedContainer'
import AboutServices from '../components/AboutServices'

const Home = () => {
  return (
    <div>
      <HomeContent/>
      <TrustedBussiness/>
      <WhyChooseUs style={"mt-48 mb-20"} style2={"xl:w-1/2"} title={"WHY CHOOSE US?"} heading={"Experience Unmatched"} heading2={"Creativity and Excellence"} text={"Choose Undefined for innovative storytelling, creative excellence, and results that make your brand stand out in the digital landscape."} btnText={"KNOW MORE!"}/>
      <TotalExp/>
      <Title margin={"mt-20 md:mt-36"} text={"WHAT WE OFFER"} title={"From Launch To Evalution"}/>
      <ServicesContainer/>
      <AboutServices/>
      <Title margin={"mt-20 md:mt-36"} text={"FEATURED PROJECTS"} title={`Discover the Success Stories of Our Valued Clients`}/>
      <PortfolioContainer/>
      <Title margin={"mt-20 md:mt-36"} text={"TESTIMONIALS"} title={`Client Feedback & Reviews`}/>
      <ReviewsContainer/>
      <Consulation/>
      <InterestedContainer/>
    </div>
  )
}

export default Home