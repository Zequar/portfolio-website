import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { streamManagerProjectData } from './ProjectsData'

function StreamManager() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>StreamManager</h1>
      <ProjectTemplate projectData={streamManagerProjectData} />
    </div>
  )
}

export default StreamManager
