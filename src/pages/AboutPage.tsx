import Navbar from '../components/Navbar'
import Story from './Story'
import Introduction from '../components/Introduction'

function AboutPage() {
  return (
    <div className="centeredSection w-full md:w-2/3 mx-auto">
      <Navbar />
      <Introduction />
      <Story />
    </div>
  )
}

export default AboutPage
