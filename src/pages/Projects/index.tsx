import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css'

function Projects() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div>Projetos</div>
      </ContainerLeft>
      <ContainerRight title='Projetos'>
        <div>Teste</div>
      </ContainerRight>
    </main>
  )
}

export default Projects;
