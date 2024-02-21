import ContainerLeft from '../../components/ContainerLeft'
import ContainerRight from '../../components/ContainerRight'
import useStatesContext from '../../hooks/useStatesContext'
import './style.css'

function Education() {
  const value = useStatesContext()
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div>Formação</div>
      </ContainerLeft>
      <ContainerRight title='Formação'>
        <div>Teste</div>
      </ContainerRight>
    </main>
  )
}

export default Education
