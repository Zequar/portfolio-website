import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { conityProjectData } from './ProjectsData'

function Conity() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>Conity</h1>
      <ProjectTemplate projectData={conityProjectData} />
    </div>
  )
}

export default Conity
