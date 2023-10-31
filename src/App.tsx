import { TypeAnimation } from 'react-type-animation';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <h1>Hi, I'm <span>Martin</span></h1>
      <h2><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Blockchain',
        1500,
        'Web 3',
        1500,
        'Front-End',
        1500
      ]}
      wrapper="span"
      speed={50}
      cursor={false}
      repeat={Infinity}
    /> Developer</h2>
      <div className="main-page-buttons">
        <button>
            <FontAwesomeIcon icon={faGithub} /> Projects
        </button>
        <button>
            <FontAwesomeIcon icon={faGithub} /> About
        </button>
      </div>
    </>
  )
}

export default App
