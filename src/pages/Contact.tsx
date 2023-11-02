import NavigationButton from './components/NavigationButton'

function Contact() {
  const calendlyLink = 'https://calendly.com/zequar/introducing-meeting' // Replace with your Calendly scheduling link

  return (
    <div className="homeWrapper">
      <NavigationButton />
      <h1>Contact Me</h1>
      <p>
        If you'd like to schedule a call with me, you can do so by clicking the
        link below:
      </p>
      <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
        Book a Call
      </a>
    </div>
  )
}

export default Contact
