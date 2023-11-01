import './About.css'
import NavigationButton from './components/NavigationButton'
import DownloadButton from './components/DownloadButton'

function About() {
  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>Who is he ?</h1>
      <main>
        <p className="introduction">
          Welcome to my portfolio! I'm a <b>passionate</b> web developer from
          France specializing in Web3.
          <br />
          My goal is to learn over amazing experiences and bring my (and others
          !) ideas to life with code.
        </p>
        <DownloadButton />
      </main>
    </div>
  )
}

export default About
