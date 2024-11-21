import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import PortfolioContainer from '../components/PortfolioContainer'
import ReviewsContainer from '../components/ReviewsContainer'
import InterestedContainer from '../components/InterestedContainer'

const Portfolio = () => {
  return (
    <div>
      <Header title={"Portfolio"} text={"Experience the Palm online Services Difference"}/>
      <Title margin={"mt-20 md:mt-36"} text={"FEATURED PROJECTS"} title={`Discover the Success Stories of Our Valued Clients`}/>
      <PortfolioContainer/>
      <Title margin={"mt-20 md:mt-36"} text={"TESTIMONIALS"} title={`Client Feedback & Reviews`}/>
      <ReviewsContainer/>  
      <InterestedContainer/> 
    </div>
  )
}

export default Portfolio