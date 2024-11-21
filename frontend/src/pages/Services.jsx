import React from 'react'
import Header from '../components/Header'
import InterestedContainer from '../components/InterestedContainer'
import ServicesContainer from '../components/ServicesContainer'
import Title from '../components/Title'
import ExperinceBars from '../components/ExperinceBars'
import TotalExp from '../components/TotalExp';
const Services = () => {
  return (
    <div>
       <Header title={"Services"} text={"Turning Visions into Reality"}/>
       <Title margin={"mt-20 md:mt-36"} text={"WHAT WE OFFER"} title={"From Launch To Evalution"}/>
       <ServicesContainer/>
       <ExperinceBars/>
       <TotalExp/>
       <InterestedContainer/>
    </div>
  )
}

export default Services