import { TypeAnimation } from 'react-type-animation'
import './Home.css'
import { Link } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'
import { motion as m } from 'framer-motion'

function Home() {
  return (
    <>
      <NavigationButton />
      <div className="homeWrapper">
        <m.h1
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <b>Martin</b>
        </m.h1>
        <m.h2
          className="text-2xl"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Full Stack',
              1500,
              'Blockchain',
              1500,
              'Front-End',
              1500,
              'Web 3',
              1500,
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            repeat={Infinity}
            preRenderFirstString={true}
          />{' '}
          Developer
        </m.h2>
        <div className="projectButtons">
          <Link to="/projects">
            <button>See projects</button>
          </Link>
          <Link to="/about">
            <button>About me</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
