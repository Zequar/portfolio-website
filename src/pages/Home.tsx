import NavigationButton from './components/NavigationButton'
import Headpage from './components/Headpage'
import SelectedProjects from './projects/SelectedProjects'
import TechnoBadges from './projects/TechnoBadges'
import Footer from './projects/Footer'

function Home() {
  return (
    <div>
      <div className="px-[15%]">
        <NavigationButton />
        <Headpage />
        <SelectedProjects />
        <TechnoBadges />
        {/* 
        <About/>
      <Footer/> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
