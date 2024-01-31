import Navbar from '../Navbar'
import ProjectTemplate from './ProjectTemplate'
import { exchangeProjectData } from './ProjectsData'

function Exchange() {
  return (
    <div className="centeredSection">
      <Navbar />
      <h1>Exchange</h1>
      <ProjectTemplate projectData={exchangeProjectData} />
    </div>
  )
}

export default Exchange
