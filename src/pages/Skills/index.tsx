import { useEffect } from "react";
import robotProto2 from "../../assets/robots/robot-cute-proto-2.svg";
import screenTemplateSkill from "../../assets/screenTemplates/screen-template-skills.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import { skills } from '../../database/skillDb';
import useStatesContext from "../../hooks/useStatesContext";
import './style.css';

function Skills() {
  const { exit, setExit } = useStatesContext();

  function handleRunLink(site: string) {
    window.open(site, "_blank");
  }

  useEffect(() => {
    setExit("");
  }, []);

  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className={`container-gif-skills container-gif-generic ${exit !== "skills" ? "flicker-in-2" : "flicker-out-2"}`}>
          <div className='background-gradient-up-skills up-gradient'></div>
          <div className='background-gradient-down-skills down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Habilidades'>
        <div className={`skills-page-container into-container-right-generic ${exit !== "skills" ? "flicker-in-2" : "flicker-out-2"}`}>
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
          <img src={robotProto2} alt="robot-cute-proto-2" className="shake-vertical-robot" />
        </div>
      </ContainerRight>
    </main>
  )
}

export default Skills;
