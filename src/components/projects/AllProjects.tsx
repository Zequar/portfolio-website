import { Link } from 'react-router-dom'
import NavigationButton from '../NavigationButton'
import { motion as m } from 'framer-motion'
import { container, item } from '../Animations'
import './Projects.css'

const ProjectItem = ({
  key,
  to,
  title,
}: {
  key: number
  to: string
  title: string
}) => {
  return (
    <div className="overflow-hidden">
      <Link to={to}>
        <m.li key={key} variants={item} className="projects-row">
          <div>
            <h2 className="text-2xl">{title}</h2>
          </div>
        </m.li>
      </Link>
    </div>
  )
}

function AllProjects() {
  return (
    <div>
      <NavigationButton />
      <div className="centeredSection">
        <div className="overflow-hidden">
          <m.h1
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            All Projects
          </m.h1>
        </div>
        <m.ul
          variants={container}
          animate="show"
          initial="hidden"
          className="project-list"
        >
          <ProjectItem key={1} title="Maskott" to="/maskott" />
          <ProjectItem key={2} title="Decentralized Exchange" to="/exchange" />
          <ProjectItem
            key={3}
            title="Zack Nani Live Extension"
            to="/live-extension"
          />
          <ProjectItem key={4} title="Stream Manager" to="/stream-manager" />
          <ProjectItem key={5} title="Conity" to="/conity" />
          <ProjectItem key={6} title="Deep-Logic" to="/deep-logic" />
        </m.ul>
      </div>
    </div>
  )
}

export default AllProjects
