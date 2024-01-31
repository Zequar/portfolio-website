import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { liveExtensionProjectData } from './ProjectsData'

function LiveExtension() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>LiveExtension</h1>
      <ProjectTemplate projectData={liveExtensionProjectData} />
    </div>
  )
}

export default LiveExtension
