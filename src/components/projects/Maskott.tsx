import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { maskottProjectData } from './ProjectsData'

function Maskott() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>Maskott</h1>
      <ProjectTemplate projectData={maskottProjectData} />
    </div>
  )
}

export default Maskott
