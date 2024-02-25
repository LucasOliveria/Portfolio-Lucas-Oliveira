import robotProto2 from "../../assets/robots/robot-cute-proto-2.svg";
import screenTemplateSkill from "../../assets/screenTemplates/screen-template-skills.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import { skills } from '../../database/skillDb';
import './style.css';

function Skills() {
  function handleRunLink(site: string) {
    window.open(site, "_blank")
  }
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-skills">
          <div className='background-gradient-up-skills'></div>
          <div className='background-gradient-down-skills'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Habilidades'>
        <div className="skills-page-container">
          {skills.map((skill) => {
            const { id, site, symbol, name } = skill;

            return (
              <div
                key={id}
                className="skill-box"
                onClick={() => handleRunLink(site)}
              >
                <img src={screenTemplateSkill} alt="screen-template-skill" />
                <div className="symbol-and-name">
                  <img src={symbol} alt="skill-symbol" />
                  <p>{name}</p>
                </div>
              </div>
            )
          })}
          <img src={robotProto2} alt="robot-cute-proto-2" />
        </div>
      </ContainerRight>
    </main>
  )
}

export default Skills;
