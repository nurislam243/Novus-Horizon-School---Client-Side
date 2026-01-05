import React from 'react'
import Banner from './Banner/Banner'
import Stats from './Stats/Stats'
import PrincipalMessage from './PrincipalMessage/PrincipalMessage'
import KeyFeatures from './KeyFeatures/KeyFeatures'
import LatestNotice from './LatestNotice/LatestNotice'
import VirtualTour from './VirtualTour/VirtualTour'
import ClubsAndActivities from './ClubsAndActivities/ClubsAndActivities'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Stats></Stats>
      <PrincipalMessage></PrincipalMessage>
      <KeyFeatures></KeyFeatures>
      <LatestNotice></LatestNotice>
      <VirtualTour></VirtualTour>
      <ClubsAndActivities></ClubsAndActivities>
    </>
  )
}

export default Home