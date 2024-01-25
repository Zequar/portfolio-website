import NavigationButton from '../NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { deepLogicProjectData } from './ProjectsData'

function DeepLogic() {
  return (
    <div className="centeredSection">
      <NavigationButton />
      <h1>DeepLogic</h1>
      <ProjectTemplate projectData={deepLogicProjectData} />
    </div>
  )
}

export default DeepLogic
