import { TypeAnimation } from 'react-type-animation'
import './Home.css'
import { Link } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'

function Home() {
  return (
    <>
      <NavigationButton />
      <div className="homeWrapper">
        <h1>
          Hi, I'm <b>Martin</b>
        </h1>
        <h2>
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
          />{' '}
          Developer
        </h2>
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
