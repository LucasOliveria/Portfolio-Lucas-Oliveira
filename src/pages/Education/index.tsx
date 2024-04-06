import { useEffect } from "react";
import screenTemplateEducation from "../../assets/screenTemplates/screen-template-education.svg";
import screenTemplateEducationMobile from "../../assets/screenTemplates/screen-template-education-mobile.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import { educations } from '../../database/educationDb';
import useStatesContext from "../../hooks/useStatesContext";
import './style.css';

function Education() {
  const { setExit, exit } = useStatesContext();

  useEffect(() => {
    setExit("")
  }, []);

  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className={`container-gif-education container-gif-generic ${exit !== "education" ? "flicker-in-2" : "flicker-out-2"}`}>
          <div className='background-gradient-up-education up-gradient'></div>
          <div className='background-gradient-down-education down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Formação'>
        <div className={`ducation-page-content into-container-right-generic ${exit !== "education" ? "flicker-in-2" : "flicker-out-2"}`}>
          {educations.map((info) => {
            const { id, title, text, ship } = info
            return (
              <div key={id} className="education-box">
                <div >
                  <img src={screenTemplateEducationMobile} alt="screen-template-education-mobile" />
                  <img src={screenTemplateEducation} alt="screen-template-education" />
                  <div className="education-text">
                    <h2><span>{title}</span></h2>
                    <p>{text}</p>
                  </div>
                </div>
                <img src={ship} alt="cyberpunk-ship" className="shake-vertical-robot" />
              </div>
            )
          })}
        </div>
      </ContainerRight>
    </main>
  )
}

export default Education
