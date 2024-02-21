import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import useStatesContext from '../../hooks/useStatesContext';
import './style.css';

function Contact() {
  const value = useStatesContext()
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div>Contato</div>
      </ContainerLeft>
      <ContainerRight title='Contato'>
        <div>Teste</div>
      </ContainerRight>
    </main>
  )
}

export default Contact;
