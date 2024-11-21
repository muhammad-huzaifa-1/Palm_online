import React from 'react'
import Header from '../components/Header'
import ExperinceBars from '../components/ExperinceBars'
import InterestedContainer from '../components/InterestedContainer'
import OurTeamCard from '../components/OurTeamCard'
import TeamProfile from '../components/TeamProfile'
const OurTeam = () => {
  return (
    <div>
      <Header title={"Team Behind the Magic"} text={"Our dedicated team of creative minds and strategic thinkers."}/>
      <OurTeamCard/>
      <TeamProfile/>
      <ExperinceBars/>
      <InterestedContainer/>
    </div>
  )
}

export default OurTeam