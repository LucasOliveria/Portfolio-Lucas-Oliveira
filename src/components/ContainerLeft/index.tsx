import { ReactNode } from "react";
import './style.css';

function ContainerLeft({ children }: { children: ReactNode }) {
  return (
    <div className="container-left">
      {children}
    </div>
  )
}

export default ContainerLeft;
