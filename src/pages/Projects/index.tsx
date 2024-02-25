import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css'

function Projects() {
  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-projects container-gif-generic">
          <div className='background-gradient-up-projects up-gradient'></div>
          <div className='background-gradient-down-projects down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Projetos'>
        <div>
          <img src="" alt="arrow-left" />
          <div className="projects-page-container into-container-right-generic">
            <div
              className="project-box"
            >
              <div className="container-photo-description-link">
                <img src="" alt="project-photo" />
                <p><span>Projeto Influencer Hub</span></p>
                <p>
                  Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados. Além disso é possível vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo
                </p>
                <button>
                  <p>Link</p>
                </button>
              </div>
            </div>
            <img src="" alt="robot-cute-proto-3" />
          </div>
          <img src="" alt="arrow-right" />
        </div>
      </ContainerRight>
    </main>
  )
}

export default Projects;
