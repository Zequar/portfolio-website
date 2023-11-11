import NavigationButton from './components/NavigationButton'
import FadeInSection from './components/FadeInSection'
import CV from '../assets/Martin Galoux English Resume.pdf'
import Photo from '../assets/Photo Martin Colossel.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faEthereum } from '@fortawesome/free-brands-svg-icons'

function Line() {
  return (
    <FadeInSection>
      <div className="transition-all duration-500 mx-auto border-l border-1 border-grey-300 opacity-90 h-20 w-0 my-3"></div>
    </FadeInSection>
  )
}

function Year({ year }: { year: string }) {
  return (
    <FadeInSection>
      <p className="transition-all duration-500 md:text-9xl text-7xl font-black shadow-sm px-24">
        {year}
      </p>
    </FadeInSection>
  )
}

function Story({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link?: string
}) {
  return (
    <FadeInSection>
      <div className="p-8 justify-center bg-black rounded-3xl shadow-xl w-90 md:w-2/3 mx-4 md:mx-auto">
        <h4 className="text-3xl">{title}</h4>
        <p className="text-gray-200  my-4 text-justify">{description}</p>
        {link ? (
          <a
            href={link}
            className="arrow-animation text-sm underline md:no-underline"
          >
            En savoir plus
          </a>
        ) : (
          ''
        )}
      </div>
    </FadeInSection>
  )
}

function About() {
  return (
    <div className="homeWrapper w-full md:w-2/3 mx-auto">
      <NavigationButton />
      <h1>Who is he ?</h1>
      <div className="flex my-8 p-8 justify-center text-justify align-center bg-black rounded-3xl gap-8">
        <div>
          <p>
            Welcome, Martin here. <br />
            <br />
            I'm a <b>creative</b> Blockchain Developer based in France and I
            decided to master Web2 and Web3 development to build my dream
            products. <br />
            <br />
          </p>
          <p>Check my current tech stack and experiences in&nbsp;
            <a
            href={CV}
            download={'Hire me !'}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-animation underline"
          >
            my CV
          </a></p>
          <div className="tech-stack-icons flex gap-4">

          </div>
          <br />
          <p>
            <b>Don't be shy !</b> Scroll down to discover my journey as a
            developer.
          </p>
        </div>

        <img
          className="rounded-3xl min-w-[150px] w-1/2 min-h-1/3 max-h-1/3 object-cover"
          src={Photo}
        />
      </div>
      <section className="my-journey text-center">
        <div className="mb-16">
          <h2 className="text-3xl py-1">My Story</h2>
          <a
            href={CV}
            download={'Hire me !'}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-animation text-sm underline md:no-underline"
          >
            Download CV
          </a>
        </div>

        <div className="timeline">
          <Year year={'2017'} />
          <Line />
          <Story
            title="High School Graduate 🎉"
            description={`Coming from a scientific background, I am concluding my secondary education with two observations: I am not cut out for rote memorization, and my creative side, combined with my interest in computer science and web-related professions, leads me to make my future career choice.`}
          />
          <Line />
          <Story
            title="The choice of EPITECH 👨‍🎓"
            description={`The promise of EPITECH checked all the boxes of what I was looking for in my studies. A project-based pedagogy, stimulating and encouraging, which forces you to take the bull by the horns. 6 years later, I do not regret my choice because the school has instilled in me everything I needed to succeed as a developer right after graduation.`}
          />
          <Line />
          <Year year="2018" />
          <Line />
          <Story
            title="First Internship at CONITY 🏠"
            description={`I completed my first internship in web development at the beginning of my second year of school. In a startup context that produced a SaaS in the construction industry, and with a very small team, it was my first opportunity to gain professional experience in a highly empowering environment.`}
            link="./conity"
          />
          <Line />
          <Year year="2019" />
          <Line />
          <Story title="I'M STILL WRITING HOLD ON " description={``} />
          <Line />
          <Year year="2020" />
          <Line />
          <Story title="" description={``} />
          <Line />
          <Year year="2021" />
          <Line />
          <Story title="" description={``} />
          <Line />
          <Year year="2022" />
          <Line />
          <Story title="" description={``} />
          <Line />
          <Year year="2023" />
          <Line />
          <Story title="" description={``} />
          <Line />
          <Year year="2024 ?" />
        </div>
      </section>
    </div>
  )
}

export default About
