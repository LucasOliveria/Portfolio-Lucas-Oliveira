import screenTemplateEducation from "../../assets/screenTemplates/screen-template-education.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import { educations } from '../../database/educationDb';
import './style.css';

function Education() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-education container-gif-generic">
          <div className='background-gradient-up-education up-gradient'></div>
          <div className='background-gradient-down-education down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Formação'>
        <div className="education-page-content">
          {educations.map((info) => {
            const { id, title, text, tech, ship } = info
            return (
              <div key={id} className="education-box">
                <div >
                  <img src={screenTemplateEducation} alt="screen-template-education" />
                  <div className="education-text">
                    <p><span>{title}</span></p>
                    <p>{text}</p>
                    <p>{tech}</p>
                  </div>
                </div>
                <img src={ship} alt="cyberpunk-ship" />
              </div>
            )
          })}
        </div>
      </ContainerRight>
    </main>
  )
}

export default Education
