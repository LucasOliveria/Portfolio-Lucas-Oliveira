import { ReactNode } from "react";
import techLineDown from "../../assets/otherImages/tech-line-down.svg";
import techLineUp from "../../assets/otherImages/tech-line-up.svg";
import './style.css';

function ContainerRight({ children, title }: { children: ReactNode, title: string }) {
  return (
    <div className="container-right">
      <div className="box-right">
        <div className="page-content-container">
          <img src={techLineUp} alt="tech-line-up" />
          <h3 className="text-flicker-in-glow">{title}</h3>
          {children}
          <img src={techLineDown} alt="tech-line-down" />
        </div>
      </div>
    </div>
  )
}

export default ContainerRight;
