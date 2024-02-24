import ContainerLeft from '../../components/ContainerLeft'
import ContainerRight from '../../components/ContainerRight'
import './style.css'
import screenTemplateEducation from "../../assets/screenTemplates/screen-template-education.svg";
import cyberpunkShip1 from "../../assets/ships/cyberpunk_ship1.svg";
// import cyberpunkShip2 from "../../assets/ships/cyberpunk_ship2.svg";

function Education() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-education">
          <div className='background-gradient-up-education'></div>
          <div className='background-gradient-down-education'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Formação'>
        <div className="education-page-content">
          <div className="education-box">
            <img src={screenTemplateEducation} alt="screen-template-education" />
            <div className="education-text">
              <p><span>Análise e Desenvolvimento de Sistemas (EAD) - Faculdade Estácio
                (01/2024 - 03/2026)</span></p>
              <p>Implementação de projetos, documentação, especificação, testes, implementação e manutenção de sistemas computacionais e software.</p>
              <p>JavaScript, PHP, Python, Java, POO Estrutura de dados, Desenvolvimento web</p>
            </div>
            <img src={cyberpunkShip1} alt="cyberpunk-ship" />
          </div>
        </div>
      </ContainerRight>
    </main>
  )
}

export default Education
