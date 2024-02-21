import { ReactNode } from 'react';
import Header from '../../components/Header';
import './style.css';

function Portfolio({ children }: { children: ReactNode }) {
  return (
    <div className='body-portfolio'>
      <Header />
      <div className='main-portfolio'>
        {children}
      </div>
    </div>
  )
}

export default Portfolio;
