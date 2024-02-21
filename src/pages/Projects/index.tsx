import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import useStatesContext from '../../hooks/useStatesContext'
import './style.css'

function Projects() {
  const value = useStatesContext()
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
