import './style.css'
import cyberpunkPersonIcon from "../../assets/cyberpunk-person-header.svg"
import currentFolderIcon from "../../assets/currenty-folder.svg"
import emailIcon from "../../assets/e-mail.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"
import { useLocation, NavLink } from "react-router-dom";

function Header() {
  const location = useLocation()
  location.pathname
  return (
    <header>
      <img src={cyberpunkPersonIcon} alt="cyberpunk-icon" />
      <nav className='menu'>
        <ul className='menu-content'>
          <li>
            <img
              className={`${location.pathname === "/" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="email-icon"
            />
            <NavLink to={"/"}>
              <p>Sobre mim</p>
            </NavLink>

          </li>
          <li>
            <img
              className={`${location.pathname === "/education" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="email-icon"
            />
            <p>Formação</p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/skills" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="email-icon"
            />
            <p>Habilidade</p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/projects" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="email-icon"
            />
            <p>Projetos</p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/contact" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="email-icon"
            />
            <p>Contato</p>
          </li>
        </ul>
        <div className='social-menu'>
          <img src={emailIcon} alt="email-icon" />
          <img src={linkedinIcon} alt="linkedin-icon" />
          <img src={githubIcon} alt="gitbub-icon" />
        </div>
      </nav>
    </header>
  )
}

export default Header
