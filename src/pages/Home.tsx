import Navbar from '../components/Navbar'
import Headpage from '../components/Headpage'
import SelectedProjects from '../components/projects/SelectedProjects'
import TechnoBadges from '../components/TechnoBadges'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'

function Home() {
  return (
    <div id='home'>
      <Navbar />
      <div className="w-[100vw] px-[15%]">
        <Headpage />
        <SelectedProjects />
        <TechnoBadges />
        <Introduction />
        {/* 
        <About/>
      <Footer/> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
