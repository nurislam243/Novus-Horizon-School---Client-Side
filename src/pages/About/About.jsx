import PageBanner from "../../components/Shared/PageBanner/PageBanner"
import useAuth from "../../hooks/useAuth"
import useUserRole from "../../hooks/useUserRole"
import CoreValues from "./CoreValues/CoreValues"
import HistoricalTimeline from "./HistoricalTimeline/HistoricalTimeline"
import PrincipalMessage from "./PrincipalMessage/PrincipalMessage"
import StatsSection from "./StatsSection/StatsSection"
import VisionMission from "./VisionMission/VisionMission"

const About = () => {

  const { role } = useUserRole();
  const { user } = useAuth();
  console.log(user.email)
  console.log(role);
  console.log(user)
  return (
    <div>
      <PageBanner></PageBanner>
      <VisionMission></VisionMission>
      <PrincipalMessage></PrincipalMessage>
      <StatsSection></StatsSection>
      <CoreValues></CoreValues>
      <HistoricalTimeline></HistoricalTimeline>
    </div>
  )
}

export default About