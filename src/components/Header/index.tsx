import './style.css'
import cyberpunkPersonIcon from "../../assets/cyberpunk-person-header.svg"
import currentFolderIcon from "../../assets/currenty-folder.svg"
import emailIcon from "../../assets/e-mail.svg"
import linkedinIcon from "../../assets/linkedin.svg"
import githubIcon from "../../assets/github.svg"

function Header() {
  return (
    <header>
      <img src={cyberpunkPersonIcon} alt="cyberpunk-icon" />
      <nav className='menu'>
        <ul>
          <li>
            <img src={currentFolderIcon} alt="email-icon" />
            Sobre min
          </li>
          <li>
            <img src={currentFolderIcon} alt="email-icon" />
            Formação
          </li>
          <li>
            <img src={currentFolderIcon} alt="email-icon" />
            Habilidade
          </li>
          <li>
            <img src={currentFolderIcon} alt="email-icon" />
            Projetos
          </li>
          <li>
            <img src={currentFolderIcon} alt="email-icon" />
            Contato
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
