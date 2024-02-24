import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css'

function Skills() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-skills">
          <div className='background-gradient-up-skills'></div>
          <div className='background-gradient-down-skills'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Habilidades'>
        <div className="container-skills">
          <div className="skill-box">
            <img src="" alt="" />
            <div className="symbol-and-name">
              <img src="" alt="" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </ContainerRight>
    </main>
  )
}

export default Skills;
