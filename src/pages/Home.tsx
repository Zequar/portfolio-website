import NavigationButton from './components/NavigationButton'
import Headpage from './components/Headpage'
import SelectedProjects from './projects/SelectedProjects'
import TechnoBadges from './projects/TechnoBadges'

function Home() {
  return (
    <div className="w-screen px-[15%]">
      <NavigationButton />
      <Headpage />
      <SelectedProjects />
      <TechnoBadges/>
      {/* 
      <Projects/>
      <TechnoBadges/>
      <About/>
      <Footer/> */}
    </div>
  )
}

export default Home
