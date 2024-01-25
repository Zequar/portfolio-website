import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import CV from '../assets/Martin Galoux English Resume.pdf'
import { Link } from 'react-router-dom'

const ExternalLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="poppins hover:underline text-sm"
    >
      <p>{label}</p>
    </a>
  )
}

function Footer() {
  return (
    <section className="mt-16 mb-0 flex flex-col bg-black px-[15%] py-8">
      <div className="flex flex-wrap justify-start gap-32">
        <div className="mb-8">
          <h3 className="text-2xl pb-2">Socials</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Zequar"
                className="poppins text-white hover:underline backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-2" />
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ZequarDev"
                className="  poppins text-white hover:underline  backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" className="pr-2" />
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:martin.galoux@epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
                className=" poppins text-white hover:underline backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="pr-2" />
                Email
              </a>
            </li>
            <li>
              <a
                href="https://https://linkedin.com/in/martingaloux"
                target="_blank"
                rel="noopener noreferrer"
                className=" poppins text-white hover:underline  backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="pr-2" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl pb-2">Reach out</h3>
          <ExternalLink
            label="Book a call"
            url="https://calendly.com/mgaloux/introducing-meeting"
          />
          <ExternalLink label="Shoot an email" url="mailto:hello@mgaloux.dev" />
        </div>
        <div className="mb-8 flex flex-col">
          <h3 className="text-2xl pb-2">Services</h3>
          <ExternalLink label="Blog" url="/blog" />
          <Link to="/mentoring" className="text-sm poppins hover:underline">
            Mentoring
          </Link>
          <Link to="/talents" className="text-sm poppins hover:underline">
            Talent Referral
          </Link>
        </div>
        <div className="mb-8 flex flex-col">
          <h3 className="text-2xl pb-2 ">Career</h3>
          <a
            href={CV}
            download={'Hire me !'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline poppins text-sm"
          >
            my CV
          </a>
          <Link to="/testimonials" className="text-sm poppins hover:underline">
            Testimonials
          </Link>
          <Link to="/certificates" className="text-sm poppins hover:underline">
            Certificates
          </Link>
          <Link to="/tech-stack" className="text-sm poppins hover:underline">
            Full Technical Stack
          </Link>
        </div>
      </div>

      <p className="self-center text-gray-600">
        <i>
          Created with 💙 by Martin Galoux. © GLX SERVICES, EST. 2022, All
          rights reserved
        </i>
      </p>
    </section>
  )
}

export default Footer
