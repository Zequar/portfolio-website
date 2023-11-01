import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import './PageTransition.css'; // Import your CSS with transition classes

interface PageTransitionProps {
  children: ReactNode;
  in: boolean;
  timeout: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, in: inProp, timeout }) => {
  console.log(children, timeout)

  return (
    <CSSTransition in={inProp} timeout={timeout} classNames="page">
      <div>{children}</div>
    </CSSTransition>
  );
};

export default PageTransition;