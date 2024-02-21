import ContainerLeft from '../../components/ContainerLeft'
import ContainerRight from '../../components/ContainerRight'
import './style.css'

function Education() {
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
