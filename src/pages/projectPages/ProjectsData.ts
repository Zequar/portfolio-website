export interface TestimonialDataInterface {
  referent: string
  referentRole: string
  testimonialText: string
  referentPictureUrl: string
  linkedInUrl: string
}

export interface ProjectDataInterface {
  testimonials: TestimonialDataInterface[]
  tags: string[]
  bodyDescription: string | TrustedHTML
  contextDescription: string | TrustedHTML
  responsibilities: string[]
  pictureUrl: string
  date: string
  title: string
  subtitle: string
}

export const conityProjectData: ProjectDataInterface = {
  testimonials: [
    {
      referent: 'Richard Raduly',
      referentRole: 'CTO at Conity',
      testimonialText: `...`,
      referentPictureUrl:
        'https://media.licdn.com/dms/image/D5603AQHgSciRut4pCw/profile-displayphoto-shrink_800_800/0/1680486502917?e=1704326400&v=beta&t=LM0_xMGreInYEBHk8Uh4nT-eKxl4YGdAIEDAGTfU_g4',
      linkedInUrl: 'https://www.linkedin.com/in/r-ichard/',
    },
    {
      referent: 'Thomas Raquin',
      referentRole: 'President at Conity',
      testimonialText:
        '...',
      referentPictureUrl:
        'https://media.licdn.com/dms/image/C4E03AQHTHUBgrqJWSg/profile-displayphoto-shrink_800_800/0/1516783408268?e=1704326400&v=beta&t=k2bSeqBnHoEhciALCJwfJUv31gIowehQAENlTeduxDc',
      linkedInUrl: 'https://www.linkedin.com/in/thomas-raquin-4b723395/',
    },
  ],
  tags: [
    'Web Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Symfony',
    'PHP',
    'CI/CD',
    'Docker',
    'Selenium',
  ],
  bodyDescription: `In response to an initial lack of sales, my first strategic move involved the development of a new website, conity.fr. This landing page was designed with a specific purpose in mind: to serve as a powerful tool for our sales team, enabling them to engage builders and construction companies, our valued clientele.<br/><br/>

  The implementation of this website yielded positive results, paving the way for a subsequent phase of my role. I primarily focused on the maintenance of our Symfony platform, a critical component of our SaaS product. In addition, I embarked on the significant task of implementing automated end-to-end testing procedures, leveraging the capabilities of Selenium to ensure the quality and robustness of our software.`,
  contextDescription: `In early stage of development, Conity was approaching the building sector, pioneering a transformative <b>connection between homebuilders and individuals seeking to construct their dream homes</b>. In the formative stages of the company, with a lean yet dedicated team of just five individuals, our primary objective was to optimize our sales initiatives.`,
  responsibilities: [
    'Full Stack Development of a landing page website',
    'UI & UX Design',
    'Unit & End to End Testing',
    'Teaching Web Fundamentals to non-technical team members',
  ],
  pictureUrl:
    'data:image/jpeg;base64,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',
  date: '2018 Setember to December',
  title: 'CONITY',
  subtitle: 'Internship',
}

export const maskottProjectData: ProjectDataInterface = {
  testimonials: [
    {
      referent: 'Romain Biard',
      referentRole: 'CTO & COO at Maskott',
      testimonialText: `...`,
      referentPictureUrl:
        'https://media.licdn.com/dms/image/C5603AQGybsK4xdOMcw/profile-displayphoto-shrink_800_800/0/1648732945019?e=1704326400&v=beta&t=vtJBn0xbw5qKyQAGAyg8ibqzHSzQ-B_BNxMpooHqT1I',
      linkedInUrl: 'https://www.linkedin.com/in/rbiard/',
    },
    {
      referent: 'Thomas Mauconduit',
      referentRole: 'Lead Developer at Maskott',
      testimonialText:
        '...',
      referentPictureUrl:
        'https://media.licdn.com/dms/image/C5603AQE_QfHkH5-PZw/profile-displayphoto-shrink_800_800/0/1561012565390?e=1704326400&v=beta&t=pHXUuoTrihO43wcZlxyj1NIai7DZVsaHwuuX9C8mTmg',
      linkedInUrl: 'https://www.linkedin.com/in/tmauc/',
    },
  ],
  tags: [
    'React.js',
    'Web Development',
    'UI/UX',
    'Testing',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Jest',
    'CI/CD',
    'Docker',
    'Azure',
    'MongoDB',
    'Node.js',
  ],
  bodyDescription: `Within the development teams at Maskott, we employ the agile methodology. Our teams typically consist of a manager, a product owner, and several developers working on each project. While some developers possess complementary skills, with certain individuals leaning towards backend development and others towards frontend development, my own experience has involved working across both domains, albeit with a stronger emphasis on frontend development.`,
  contextDescription: `Maskott is a Lyon-based startup founded two decades ago by Pascal Bringer, a former teacher within the national education system, with the primary goal of digitizing the learning experience within schools.
  Initially, the company produced physical digital media, including CDs integrated into textbooks used in schools during the early 2000s. However, as the years passed, Maskott shifted its focus towards creating a web platform to comprehensively digitize all educational content used by students in schools. This initiative aimed to replace traditional textbooks and exercise books, which can be burdensome for children and result in substantial logistical and environmental costs.<br/><br/>
  Originally developed in C# using the Orchard framework, Maskott introduced a digital solution that gained adoption in 20% of secondary schools in France by the year 2020.<br/>
  In pursuit of technical optimization and enhanced visual appeal, the decision was made to undertake a complete overhaul of the application in 2021, transitioning to the React technology stack. It is within the framework of this project that my involvement takes place.<br/>`,
  responsibilities: [
    'Full Front-End Rework of a legacy webapp',
    'Support on product design and UI/UX design',
    'Unit & End to End Testing',
    'Rework from JavaScript to TypeScript',
  ],
  pictureUrl:
    'data:image/jpeg;base64,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',
  date: '2022 June - Current Position',
  title: 'Maskott',
  subtitle: 'Full-Time Contract',
}
