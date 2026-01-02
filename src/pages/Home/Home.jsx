import React from 'react'
import Banner from './Banner/Banner'
import Stats from './Stats/Stats'
import PrincipalMessage from './PrincipalMessage/PrincipalMessage'
import KeyFeatures from './KeyFeatures/KeyFeatures'
import LatestNotice from './LatestNotice/LatestNotice'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Stats></Stats>
      <PrincipalMessage></PrincipalMessage>
      <KeyFeatures></KeyFeatures>
      <LatestNotice></LatestNotice>
    </>
  )
}

export default Home