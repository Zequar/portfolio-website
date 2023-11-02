import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { deepLogicProjectData } from './ProjectsData'

function DeepLogic() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>DeepLogic</h1>
      <ProjectTemplate projectData={deepLogicProjectData} />
    </div>
  )
}

export default DeepLogic
