import { motion as m } from 'framer-motion'
import { IconDefinition, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from '../../assets/NextLogo.png'
import TailwindLogo from '../../assets/TailwindLogo.png'
import EtherLogo from '../../assets/EtherLogo.png'
import SolidityLogo from '../../assets/SolidityLogo.png'

const Badge = ({
  text,
  img,
  icon,
  colorGradient,
  label,
} : {
  text?: string
  img?: string
  icon?: IconDefinition
  colorGradient: [ string, string ]
  label?: string
}) => {
  const gradientColors = colorGradient;

  const gradientStyle = {
    background: `linear-gradient(45deg, ${gradientColors.join(',')})`,
  };

  return (
    <li className='flex flex-col items-center gap-2'>
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
        {
          label && 
          <p className='text-sm'>{label}</p>
        }
      </li>
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
      <div className='flex sm:flex-wrap md:flex-no-wrap w-full gap-4'>
        <div className='bg-black p-6 rounded-2xl max-w-[256px] mt-8'>
          <p className='text-xl font-bold pb-4 text-center'>Frontend</p>
          <ul className='flex flex-wrap gap-4 justify-center'>
            <Badge label='Next.js' img={NextLogo} colorGradient={['#000000', '#a1a3bb']}/>
            <Badge label='TailwindCSS' img={TailwindLogo} colorGradient={['#24A2B8', '#0ab970']}/>
          </ul>
        </div>
        <div className='bg-black p-6 rounded-2xl max-w-[256px] mt-8'>
          <p className='text-xl font-bold pb-4 text-center'>Smart Contracts</p>
          <ul className='flex flex-wrap gap-4 justify-center'>
            <Badge label='Solidity' img={SolidityLogo} colorGradient={['#000000', '#a1a3bb']}/>
            <Badge label='Ethereum' img={EtherLogo} colorGradient={['#7487D0', '#9BAADE']}/>
          </ul>
        </div>
        <div className='bg-black p-6 rounded-2xl max-w-[256px] mt-8'>
          <p className='text-xl font-bold pb-4 text-center'>Backend</p>
          <ul className='flex flex-wrap gap-4 justify-center'>
            <Badge label='Node.js' icon={faNodeJs} colorGradient={['#78B360', '#38771c']}/>
            <Badge label='SQL' text='SQL' colorGradient={[ '#066d89', '#36dff8']}/>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechnoBadges
