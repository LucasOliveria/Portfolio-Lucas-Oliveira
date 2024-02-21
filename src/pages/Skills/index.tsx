import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css'

function Skills() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div>Habilidades</div>
      </ContainerLeft>
      <ContainerRight title='Habilidades'>
        <div>Teste</div>
      </ContainerRight>
    </main>
  )
}

export default Skills;
