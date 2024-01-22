import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SimpleLink = ({ label, url }: { label: string; url: string }) => {
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
          <ul className="flex flex-col gap-4">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Zequar"
                className="arrow-animation poppins text-white border-gray-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-1" />{' '}
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/ZequarDev"
                className="arrow-animation  poppins text-white border-blue-300 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  color="lightblue"
                  className="pr-1"
                />{' '}
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:martin.galoux@epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-animation poppins text-white border-red-400 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="pr-1 text-red-400"
                />{' '}
                Email
              </a>
            </li>
            <li>
              <a
                href="https://https://linkedin.com/in/martingaloux"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-animation poppins text-white border-blue-500 border p-2 backdrop-blur-[10px] text-xs rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="pr-1 text-blue-500"
                />{' '}
                LinkedIn
              </a>
            </li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl pb-2">Reach out</h3>
          <SimpleLink
            label="Book a call"
            url="https://https://github.com/zequar"
          />
          <SimpleLink
            label="Shoot an email"
            url="https://https://twitter.com/ZequarDev"
          />
        </div>
        <div className="mb-8">
          <h3 className="text-2xl pb-2">Services</h3>
          <SimpleLink label="Blog" url="https://https://github.com/zequar" />
          <SimpleLink
            label="Mentoring"
            url="https://https://twitter.com/ZequarDev"
          />
          <SimpleLink
            label="Talent referral"
            url="https://https://twitter.com/ZequarDev"
          />
        </div>
        <div className="mb-8">
          <h3 className="text-2xl pb-2">Career</h3>
          <SimpleLink
            label="Download CV"
            url="https://https://github.com/zequar"
          />
          <SimpleLink
            label="Testimonials"
            url="https://https://twitter.com/ZequarDev"
          />
          <SimpleLink
            label="Certificates"
            url="https://https://twitter.com/ZequarDev"
          />
          <SimpleLink
            label="Full Technical Stack"
            url="https://https://twitter.com/ZequarDev"
          />
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
