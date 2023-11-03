import { Link } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'

const ProjectItem = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link to={to}>
      <li className="projects-row">
        <div>
          <h2 className="project-title">{title}</h2>
        </div>
      </li>
    </Link>
  )
}

function Projects() {
  return (
    <div>
      <NavigationButton />
      <div className="homeWrapper">
        <h1>Projects</h1>
        <ul className="project-list">
          <ProjectItem title="Maskott" to="/maskott" />
          <ProjectItem title="Decentralized Exchange" to="/exchange" />
          <ProjectItem title="Zack Nani Live Extension" to="/live-extension" />
          <ProjectItem title="Stream Manager" to="/stream-manager" />
          <ProjectItem title="Conity" to="/conity" />
          <ProjectItem title="Deep-Logic" to="/deep-logic" />
        </ul>
      </div>
    </div>
  )
}

export default Projects
