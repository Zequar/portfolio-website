import NavigationButton from '../NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { conityProjectData } from './ProjectsData'

function Conity() {
  return (
    <div className="centeredSection">
      <NavigationButton />
      <h1>Conity</h1>
      <ProjectTemplate projectData={conityProjectData} />
    </div>
  )
}

export default Conity
