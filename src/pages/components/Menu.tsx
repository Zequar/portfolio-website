import { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faEnvelope,
  faBook,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavigationButton = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <>
      <div className="main-page-buttons">
        <Link to="/projects">
          <button>
            <FontAwesomeIcon icon={faStar} /> Projects
          </button>
        </Link>

        <Link to="/about">
          <button>
            <FontAwesomeIcon icon={faHeart} /> About
          </button>
        </Link>
      </div>
      <div className="main-page-buttons">
        <Link to="/blog">
          <button>
            <FontAwesomeIcon icon={faBook} /> Blog
          </button>
        </Link>

        <Link to="/contact">
          <button>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </button>
        </Link>
      </div>
      </>
    </div>   
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Menu</Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default NavigationButton;
