import { NavLink, useLocation, useNavigate } from "react-router-dom"
import currentFolderIcon from "../../assets/otherImages/currenty-folder.svg"
import cyberpunkPersonIcon from "../../assets/otherImages/cyberpunk-me.svg"
import emailIcon from "../../assets/social/e-mail.svg"
import githubIcon from "../../assets/social/github.svg"
import linkedinIcon from "../../assets/social/linkedin.svg"
import './style.css'
import useStatesContext from "../../hooks/useStatesContext"

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setExit } = useStatesContext();

  function handleNavigatAnimate(page: string) {
    if (page !== location.pathname) {
      if (location.pathname === "/home") {
        setExit("home")

        setTimeout(() => {
          navigate(page);
        }, 600);
        return
      }

      navigate(page);
    }
  }

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
            <p
              onClick={() => handleNavigatAnimate("/home")}
              className={`${location.pathname === "/home" && "p-active"}`}
            >
              Sobre mim
            </p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/education" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <p
              onClick={() => handleNavigatAnimate("/education")}
              className={`${location.pathname === "/education" && "p-active"}`}
            >
              Formação
            </p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/skills" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <p
              onClick={() => handleNavigatAnimate("/skills")}
              className={`${location.pathname === "/skills" && "p-active"}`}
            >
              Habilidades
            </p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/projects" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <p
              onClick={() => handleNavigatAnimate("/projects")}
              className={`${location.pathname === "/projects" && "p-active"}`}
            >
              Projetos
            </p>
          </li>
          <li>
            <img
              className={`${location.pathname === "/contact" ? "img-visible" : "img-hidden"}`}
              src={currentFolderIcon}
              alt="folder-icon"
            />
            <p
              onClick={() => handleNavigatAnimate("/contact")}
              className={`${location.pathname === "/contact" && "p-active"}`}
            >
              Contato
            </p>
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
