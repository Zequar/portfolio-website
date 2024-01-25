import FadeInSection from '../components/FadeInSection'
import CV from '../assets/Martin Galoux English Resume.pdf'

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

function StoryBlock({
  title,
  description,
  link,
  linkLabel,
}: {
  title: string
  description: { __html: string | TrustedHTML }
  link?: string
  linkLabel?: string
}) {
  return (
    <FadeInSection>
      <div className="flex flex-col p-8 justify-center bg-black rounded-3xl shadow-xl w-90 md:w-2/3 mx-4 md:mx-auto">
        <h4 className="text-3xl">{title}</h4>
        <p
          className="text-gray-200  my-4 text-justify"
          dangerouslySetInnerHTML={description}
        ></p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="poppins arrow-animation text-sm underline md:no-underline bg-gray-900 p-3 pl-4 rounded-xl"
          >
            {linkLabel || 'Explore this project '}
          </a>
        ) : (
          ''
        )}
      </div>
    </FadeInSection>
  )
}

function Story() {
  return (
    <section className="my-journey text-center centeredSection w-full md:w-2/3 mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl py-1">My Story</h2>
        <a
          href={CV}
          download={'Hire me !'}
          target="_blank"
          rel="noopener noreferrer"
          className="poppins arrow-animation text-sm underline md:no-underline"
        >
          Download CV
        </a>
      </div>

      <div className="timeline">
        <Year year={'2017'} />
        <Line />
        <StoryBlock
          title="High School Graduate 🎉"
          description={{
            __html: `<p>Coming from a scientific background, I am concluding my secondary
               education with two observations: I am not cut out for rote memorization, and
                my creative side, combined with my interest in computer science and web-related
                 professions, leads me to make my future career choice.</p>`,
          }}
        />
        <Line />
        <StoryBlock
          title="The choice of EPITECH 👨‍🎓"
          description={{
            __html: `<p>The promise of EPITECH checked all the boxes of what I was looking
               for in my studies. A project-based pedagogy, stimulating and encouraging, which
                forces you to take the bull by the horns. 6 years later, I do not regret my
                 choice because the school has instilled in me everything I needed to succeed
                  as a developer right after graduation.</p>`,
          }}
        />
        <Line />
        <Year year="2018" />
        <Line />
        <StoryBlock
          title="First Internship at CONITY 🏠"
          description={{
            __html: `<p>I completed my first internship in web development at the beginning
               of my second year of school. In a startup context that produced a SaaS in the
                construction industry, and with a very small team, it was my first opportunity
                 to gain professional experience in a highly empowering environment.</p>`,
          }}
          link="./conity"
        />
        <Line />
        <Year year="2019" />
        <Line />
        <StoryBlock
          title="Beginnings as an Event Creator 🎮"
          description={{
            __html: `
          <p>Apart from my development endeavors, I spent two years learning about event-making
           in <b>Gametek Lyon</b>, an esports-driven non-profit organization. My dedication 
           allowed me to start leading a 15-person team to create the best events esports in 
           France. The best is yet to come...</p>
          `,
          }}
          link="https://twitter.com/Gametek_Lyon"
        />
        <Line />
        <Year year="2020" />
        <Line />
        <StoryBlock
          title="Second Internship : DEEP-LOGIC 🐙"
          description={{
            __html: `
          <p>After two years learning about event-making in Epitech esports non-profit
           organization association Gametek Lyon, my recognized dedication allows me to
            start leading a 15-person team to create the best events esports in France.
             The best is yet to come...</p>
          `,
          }}
          link="./deep-logic"
        />
        <Line />
        <StoryBlock
          title="Exchange Year in Korea &nbsp;🇰🇷"
          description={{
            __html: `
          <p>Thanks to my high GPA and school dedication, I got the huge opportunity to go study
           in one of Seoul's best universities for an exchange year. The goal was to learn computer
            science, practice English and Korean languages, and be exposed to a tremendously
             different culture. I was able to learn about IoT, Game Development, Advanced Data
              Structures, Networking, and more. To this day, I'm very grateful for this experience.</p>
          `,
          }}
        />
        <Line />
        <Year year="2021" />
        <Line />
        <StoryBlock
          title="Third Internship : DEEP-LOGIC 🐙"
          link="./deep-logic"
          description={{
            __html: `
          <p>After South Korea, my previous team contacts me saying they have new work opportunities.
           Since I really enjoyed the previous internship at Deep-Logic, I decide to go back for six
            more months. This time with more responsibilities, I dived into both Front-End and
             Backend Development, along with CI/CD and Software Architecture.</p>
          `,
          }}
        />
        <Line />
        <Year year="2022" />
        <Line />
        <StoryBlock
          title="First setback 📉"
          description={{
            __html: `
          <p>After one year of experience in C#/.NET technologies, I decide to leverage this
           experience to land my first permanent job as a C# Developer Consultant. I discover 
           the rigid world of developer agencies, and realize the project, team, and technologies
            don't suit my workstyle. Unable to change projects, I decide to switch jobs to focus
             on what I was best at : Front-End Development in JavaScript</p>
          `,
          }}
        />
        <Line />
        <StoryBlock
          title="First permanent contract : Maskott 🐸"
          link="./maskott"
          description={{
            __html: `
          <p>Still working in this company to this day, I started my work as a Full Stack Developer
           at Maskott in June 2022. I chose this company to work on a promising EdTech project, 
           and develop my mastery of Frontend tools like React.js, Next.js, JavaScript, TypeScript, 
           Redux, Figma, and more. The team was full of brilliant people and I'm overall grateful for
            this experience.</p>
          `,
          }}
        />
        <Line />
        <StoryBlock
          title="My peak as an Event Creator 🎮"
          description={{
            __html: `
          <p>Over 5 years, I've created over 150 events with multiple succesful esport event
           series still up to this day. For my biggest project, <b>COLOSSEL 2022</b>, I've led a team of over
            100 volunteers and professionals to create the biggest event in the history of Europe.
             All records obliterated, we welcomed over 1200 participants from 30 nationalities in Lyon,
              France. These years of event management brought me precious skills, network and shaped my work ethic.
              Though I had opportunities to go professional as an Event Manager, I decided to keep my focus on Web3 Development.
            </p>
          `,
          }}
          link="https://www.youtube.com/watch?v=uj4cxxeyHRA"
          linkLabel="Watch documentary here"
        />
        <Line />
        <StoryBlock
          title="Starting Blockchain Development &nbsp;🪙"
          description={{
            __html: `
          <p>
          Due to a strong interest in Blockchain technologies with a first step into the cryptocurrency world,
          I decide to learn about Blockchain fundamentals, Smart Contract Development, Cryptography, Solidity,
          and other tools in the hope to develop my career in that direction in the future. Simultaneously, I keep on gathering knowledge on Web2 through my experience in Maskott.
          </p>
          `,
          }}
        />
        <Line />
        <Year year="2023" />
        <Line />
        <StoryBlock
          title="Blockchain Developer Bootcamp &nbsp;👨‍🎓"
          link="./exchange"
          description={{
            __html: `
          <p>
          I decide to get serious about Blockchain. I joined an online certifying bootcamp by Dapp University in order to learn everything about Ethereum, Solidity, Hardhat, Ethers, Security, best practices in the field... And start building my own blockchain projects. My first big project was a decentralized cryptocurrency exchange built with Solidity and React. To this day, I keep developing my Blockchain skills as I am looking for my first position as a Blockchain Developer.
          </p>
          `,
          }}
        />
        <Line />
        <StoryBlock
          title="The end of Maskott 🐸"
          link="./maskott"
          description={{
            __html: `
          <p>It's September 2023. I accumulated a lot of experience in Maskott, but due to poor
           administrative decisions, accumulated debt stopped Maskott from thriving any more
            time. In the middle of a judicial recovery procedure, the company is forced to let
             go of 50% of their workforce. Thankfully, insights from our staff allowed us to
              prepare for this months in advance in order to set-up a smooth transition into
               our next mission.</p>
          `,
          }}
        />
        <Line />
        <Year year="2024 ?" />
        <Line />
        <StoryBlock
          title="Future Goals 🎯"
          link="./contact"
          linkLabel={`Get in contact`}
          description={{
            __html: `
          <p>I'm currently looking for a mission to confirm my Blockchain skills with a first
           professional experience in the field. Want to be part of my
            future ? Don't be shy ! </p>
          `,
          }}
        />
      </div>
    </section>
  )
}

export default Story
