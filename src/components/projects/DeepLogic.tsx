import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { deepLogicProjectData } from './ProjectsData'

function DeepLogic() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>DeepLogic</h1>
      <ProjectTemplate projectData={deepLogicProjectData} />
    </div>
  )
}

export default DeepLogic
