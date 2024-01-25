import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { container, item } from './Animations'
import './Projects.css'
import ExchangePicture from '../../assets/projects/charts.jpg'
import MaskottPicture from '../../assets/projects/maskott.png'
import ZackNaniPicture from '../../assets/projects/zacknani.png'

const ProjectDisplay = ({
  key,
  to,
  title,
  projectType,
  image,
}: {
  key: number
  to: string
  title: string
  projectType: string
  image: string
}) => {
  return (
    <div className="overflow-hidden relative">
      <Link to={to}>
        <m.li
          key={key}
          variants={item}
          className="projects-row bg-black relative"
        >
          <img
            className="absolute inset-0 object-cover w-[60%] ml-[40%] h-full z-1 right-0"
            src={image}
          />
          <div
            className="absolute inset-0 object-cover w-[60%] ml-[40%] h-full z-3 right-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))',
            }}
          ></div>
          <h2 className="text-2xl z-2 relative">{title}</h2>
          <p className="border-white border p-2 backdrop-blur-[10px] text-xs rounded">
            {projectType}
          </p>
        </m.li>
      </Link>
    </div>
  )
}

function SelectedProjects() {
  return (
    <section className="my-8 flex flex-col">
      <div className="overflow-hidden flex flex-row justify-between items-center">
        <m.h2
          className="special-underline py-4"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Latest Projects
        </m.h2>
      </div>
      <m.ul
        variants={container}
        animate="show"
        initial="hidden"
        className="w-full mt-12 flex flex-col gap-4"
      >
        <ProjectDisplay
          key={2}
          title="Decentralized Exchange"
          to="/exchange"
          projectType="🚀 Personal project"
          image={ExchangePicture}
        />
        <ProjectDisplay
          key={1}
          title="Maskott"
          to="/maskott"
          projectType="💼 Professional project"
          image={MaskottPicture}
        />
        <ProjectDisplay
          image={ZackNaniPicture}
          key={3}
          title="Zack Nani Live Extension"
          to="/live-extension"
          projectType="💼 Freelance project"
        />
      </m.ul>
      <Link to="/projects" className="self-end mt-4">
        <p className="border-b border-[#646cff] arrow-animation">
          &nbsp;&nbsp;Discover more projects
        </p>
      </Link>
    </section>
  )
}

export default SelectedProjects
