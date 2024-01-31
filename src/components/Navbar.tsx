import {
  Button,
  List,
  SwipeableDrawer,
  ListItemIcon,
  ListItemButton,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faEnvelope,
  faStar,
  faBars,
  faForward,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo.svg'
import { useAppContext } from '../AppContext'

const NavigationItem = ({
  to,
  icon,
  title,
}: {
  to: string
  icon: IconDefinition
  title: string
}) => {
  const { setIsDrawerOpen } = useAppContext()

  return (
    <ListItemButton
      onClick={() => {
        setIsDrawerOpen(false)
      }}
      sx={{
        backgroundColor: 'rgb(0,0,0,0.7)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxHeight: '100px',
        border: 'solid transparent 1px',
        transition: 'border-color 0.5s',
        display: 'flex',
        justifyContent: 'center',

        ':hover': {
          backgroundColor: 'rgb(0,0,0,0.3)',
          fontWeight: 'bold',
          borderColor: '#646cff',
          color: 'white',
        },
      }}
      component={Link}
      to={to}
    >
      <ListItemIcon>
        <FontAwesomeIcon color="white" icon={icon} size="lg" />
      </ListItemIcon>
      <h1>{title}</h1>
    </ListItemButton>
  )
}

const LogoBackHomeButton = () => {
  return (
    <Link to="/#home">
        <Button
          sx={{
            width: '60px',
            height: '60px',
            color: 'white',
            zIndex: '999',
          }}
          className="hover:scale-110"
        >
          <img width={40} src={Logo} />
        </Button>
      </Link>
  )
}

const BurgerMenu = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext()

  const drawerContentStyle = {
    marginTop: '100px', // Add padding to the drawer content as needed
    height: '100%',
    color: 'white',
    // Define other styles for drawer content as needed
  }


  const list = (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
      style={drawerContentStyle}
    >
      <NavigationItem to="/" icon={faHome} title="Home" />
      <NavigationItem to="/projects" icon={faStar} title="Projects" />
      <NavigationItem to="/about" icon={faHeart} title="About" />
      <NavigationItem to="/contact" icon={faEnvelope} title="Contact" />
    </List>
  )

  return (
    <>
      <Button
        sx={{
          width: '40px',
          height: '40px',
          color: 'white',
          position: 'absolute',
          right: '3rem',
          top: '3rem',
          zIndex: '999',
        }}
        className="hover:scale-110"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <FontAwesomeIcon icon={isDrawerOpen ? faForward : faBars} size="3x" />
      </Button>
      <SwipeableDrawer
        hideBackdrop={true}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 0,
            width: '100%',
            maxWidth: '100%',
          },
        }}
        sx={{
          zIndex: '998',
        }}
        anchor={isDrawerOpen ? 'left' : 'right'}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        {list}
      </SwipeableDrawer>
    </>
  )
}

const Links = () => {
  return (
    <div className=''>
      <div className='flex flex-row text-xl gap-8 items-center'>
        <div className='hover:underline'>
          <Link to='/projects'>Projects</Link>
        </div>
        <div className='hover:underline'>
          <Link to='/blog'>Blog</Link> 
        </div>
        <div className='hover:underline'>
          <Link to='/contact'>Contact me</Link>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <header className='bg-black bg-opacity-60 border-b border-gray-700 w-screen px-[15%] flex justify-between items-center h-16 fixed top-0 z-20'>
      <LogoBackHomeButton/>
      <div className='sm:block md:hidden'>
        <BurgerMenu/>
      </div>
      <div className='sm:hidden md:block'>
        <Links>
        </Links>
      </div>
    </header>
  )
}

export default Navbar
