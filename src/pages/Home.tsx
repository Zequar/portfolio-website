import { TypeAnimation } from 'react-type-animation'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faEnvelope,
  faBook,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NavigationButton from './components/NavigationButton'

function Home() {
  return (
    <>
      <NavigationButton />
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
      <div className="main-page-buttons">
        <Link to="/projects">
          <button>
            <FontAwesomeIcon icon={faStar} /> Projects
          </button>
        </Link>

        <Link to="/about">
          <button>
            <FontAwesomeIcon icon={faHeart} /> About
          </button>
        </Link>
      </div>
      <div className="main-page-buttons">
        <Link to="/blog">
          <button>
            <FontAwesomeIcon icon={faBook} /> Blog
          </button>
        </Link>

        <Link to="/contact">
          <button>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
