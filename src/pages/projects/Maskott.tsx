import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { maskottProjectData } from './ProjectsData'

function Maskott() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>Maskott</h1>
      <ProjectTemplate projectData={maskottProjectData} />
    </div>
  )
}

export default Maskott
