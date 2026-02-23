import PageBanner from "../../components/Shared/PageBanner/PageBanner"
import PrincipalMessage from "./PrincipalMessage/PrincipalMessage"
import VisionMission from "./VisionMission/VisionMission"

const About = () => {
  return (
    <div>
      <PageBanner></PageBanner>
      <VisionMission></VisionMission>
      <PrincipalMessage></PrincipalMessage>
    </div>
  )
}

export default About