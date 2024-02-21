import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css';

function Contact() {
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
