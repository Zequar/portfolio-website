import { motion as m } from 'framer-motion'
import { IconDefinition, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from '../../assets/NextLogo.png'
import TailwindLogo from '../../assets/TailwindLogo.png'

const Badge = ({
  text,
  img,
  icon,
  colorGradient,
} : {
  text?: string
  img?: string
  icon?: IconDefinition
  colorGradient: [ string, string ]
}) => {
  const gradientColors = colorGradient;

  const gradientStyle = {
    background: `linear-gradient(45deg, ${gradientColors.join(',')})`,
  };

  return (
    <div className="rounded-full w-24 h-24 flex items-center justify-center" style={gradientStyle}>
        <div className="rounded-xl w-14 h-14 flex items-center justify-center bg-black bg-opacity-30">
          {
            text ? 
            <p className='font-bold text-2xl text-white'>{text}</p>
            : img ? 
            <img className="p-3" src={img}/>
            : icon ?
            <FontAwesomeIcon icon={icon} size='2x'/>
            : <></>
          }
        </div>
      </div>
  )
}

function TechnoBadges() {
  return (
    <section className="my-8 flex flex-col">
      <div className="overflow-hidden flex flex-row justify-between items-center">
        <m.h2
          className="special-underline py-4"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Favorite Toolkit
        </m.h2>
      </div>
      <ul className='flex flex-wrap gap-4 my-8'>
        <li>
          <Badge text='JS' colorGradient={['#ffe18f', '#f0db4f']}/>
        </li>
        <li>
          <Badge icon={faReact} colorGradient={[ '#066d89', '#36dff8']}/>
        </li>
        <li>
          <Badge img={NextLogo} colorGradient={['#000000', '#a1a3bb']}/>
        </li>
        <li>
          <Badge img={TailwindLogo} colorGradient={['#24A2B8', '#0ab970']}/>
        </li>

      </ul>
    </section>
  )
}

export default TechnoBadges
