import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faEthereum,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import NavigationButton from './components/NavigationButton'

function About() {
  return (
    <div>
      <NavigationButton />
      <h1>Who is he ?</h1>
      <main>
        <p>
          Welcome to my portfolio! I'm a passionate web developer with a love
          for creating web applications. My goal is to build amazing user
          experiences and bring ideas to life with code.
        </p>
        <h3>Specializations</h3>
        <div className="specialty-list">
          <div className="specialty">
            <FontAwesomeIcon icon={faReact} width={'40px'} size="3x" /> React.js
          </div>
          <div className="specialty">
            <FontAwesomeIcon icon={faEthereum} width={'40px'} size="3x" />{' '}
            Solidity
          </div>
          <div className="specialty">
            <FontAwesomeIcon icon={faNodeJs} width={'40px'} size="3x" /> Node.js
          </div>
        </div>
        <h3>Education</h3>
        <p>Graduated Epitech in 2022</p>
      </main>
    </div>
  )
}

export default About
