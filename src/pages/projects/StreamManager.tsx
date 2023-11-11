import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { streamManagerProjectData } from './ProjectsData'

function StreamManager() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>StreamManager</h1>
      <ProjectTemplate projectData={streamManagerProjectData} />
    </div>
  )
}

export default StreamManager
