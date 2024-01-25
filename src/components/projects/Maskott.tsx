import NavigationButton from '../NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { maskottProjectData } from './ProjectsData'

function Maskott() {
  return (
    <div className="centeredSection">
      <NavigationButton />
      <h1>Maskott</h1>
      <ProjectTemplate projectData={maskottProjectData} />
    </div>
  )
}

export default Maskott
