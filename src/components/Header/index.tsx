import { NavLink, useLocation } from "react-router-dom"
import currentFolderIcon from "../../assets/otherImages/currenty-folder.svg"
import cyberpunkPersonIcon from "../../assets/otherImages/cyberpunk-me.svg"
import emailIcon from "../../assets/social/e-mail.svg"
import githubIcon from "../../assets/social/github.svg"
import linkedinIcon from "../../assets/social/linkedin.svg"
import './style.css'

function Header() {
  const location = useLocation();

  return (
    <header>
      <NavLink to={"/home"}>
        <div className="container-icon">
          <img src={cyberpunkPersonIcon} alt="cyberpunk-icon" />
          <h3>#LucasOlivr07</h3>
        </div>
      </NavLink>
      <nav className='menu'>
        <ul className='menu-content'>
          <li>
            <img
              className={`${location.pathname === "/home" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <NavLink to={"/home"}>
              <p>Sobre mim</p>
            </NavLink>
          </li>
          <li>
            <img
              className={`${location.pathname === "/education" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <NavLink to={"/education"}>
              <p>Formação</p>
            </NavLink>
          </li>
          <li>
            <img
              className={`${location.pathname === "/skills" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <NavLink to={"/skills"}>
              <p>Habilidades</p>
            </NavLink>
          </li>
          <li>
            <img
              className={`${location.pathname === "/projects" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <NavLink to={"/projects"}>
              <p>Projetos</p>
            </NavLink>
          </li>
          <li>
            <img
              className={`${location.pathname === "/contact" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <NavLink to={"/contact"}>
              <p>Contato</p>
            </NavLink>
          </li>
        </ul>
        <div className='social-menu'>
          <a href="mailto:lucasoliveiralog@hotmail.com">
            <img src={emailIcon} alt="email-icon" />
          </a>
          <a href="http://www.linkedin.com/in/lucas-oliveira-5b8a5532" target='_blank' >
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
          <a href="http://github.com/LucasOliveria" target="_blank">
            <img src={githubIcon} alt="gitbub-icon" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header;
