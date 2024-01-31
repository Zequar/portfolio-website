import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { conityProjectData } from './ProjectsData'

function Conity() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>Conity</h1>
      <ProjectTemplate projectData={conityProjectData} />
    </div>
  )
}

export default Conity
