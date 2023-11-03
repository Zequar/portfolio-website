import NavigationButton from '../components/NavigationButton'
import ProjectTemplate from './ProjectTemplate'
import { exchangeProjectData } from './ProjectsData'

function Exchange() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>Exchange</h1>
      <ProjectTemplate projectData={exchangeProjectData} />
    </div>
  )
}

export default Exchange
