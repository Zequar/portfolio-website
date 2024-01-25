import NavigationButton from '../components/NavigationButton'
import Story from './Story'
import Introduction from '../components/Introduction'

function AboutPage() {
  return (
    <div className="centeredSection w-full md:w-2/3 mx-auto">
      <NavigationButton />
      <Introduction />
      <Story />
    </div>
  )
}

export default AboutPage
