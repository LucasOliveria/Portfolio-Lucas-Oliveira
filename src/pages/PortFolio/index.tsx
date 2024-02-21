import { ReactNode } from 'react'
import Header from '../../components/Header'
import './style.css'

function Portfolio({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Portfolio
