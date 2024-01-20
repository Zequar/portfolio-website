import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { liveExtensionProjectData } from './ProjectsData'

function LiveExtension() {
  return (
    <div className="centeredSection">
      <NavigationButton />
      <h1>LiveExtension</h1>
      <ProjectTemplate projectData={liveExtensionProjectData} />
    </div>
  )
}

export default LiveExtension
