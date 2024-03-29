import { useEffect, useState } from "react";
import backgroundPhoto from "../../assets/otherImages/background-photo.svg";
import buttonTemplate from "../../assets/otherImages/button-template.svg";
import photo from "../../assets/otherImages/cyberpunk-me.svg";
import robotProto1 from "../../assets/robots/robot-cute-proto-1.svg";
import screenTemplateAboutMeMobile from "../../assets/screenTemplates/screen-template-about-me-mobile.svg";
import screenTemplateAboutMe from "../../assets/screenTemplates/screen-template-about-me.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import useStatesContext from "../../hooks/useStatesContext";
import './style.css';

function Home() {
  const { exit, setExit } = useStatesContext();
  const [download, setDownload] = useState("");

  async function handleDownloadFile() {
    const timestamp = new Date().getTime();

    setDownload(`https://drive.google.com/uc?export=download&id=153RxDbwHyYKcPfu12_dow-5PqHJDJtVj&t=${timestamp}`);
  }

  useEffect(() => {
    setExit("");
  }, []);

  return (
    <div className="container-home">
      <main className='main-generic'>
        <ContainerLeft>
          <div className={`container-welcome ${exit !== "home" ? "fade-in-left" : "fade-out-left"}`}>
            <h1>Olá, seja <span>Bem-Vindo</span></h1>
            <div className="container-photo">
              <img src={backgroundPhoto} alt="background-photo" />
              <img src={photo} alt="photo" />
            </div>
            <h3>Lucas Oliveira</h3>
            <p>Desenvolvedor FullStack</p>
            <div className="contains-cv-button button-hover-active" >
              <button onClick={handleDownloadFile}>
                <p>
                  Baixar CV
                </p>
              </button>
              <img src={buttonTemplate} alt="button-template-blur" />
              {download && <iframe src={download} style={{ display: "none" }}></iframe>}
            </div>
          </div>
        </ContainerLeft>
        <ContainerRight title='Sobre mim'>
          <div className={`home-page-content into-container-right-generic ${exit !== "home" ? "fade-in-right" : "flicker-out-2"}`}>
            <div >
              <img src={screenTemplateAboutMe} alt="screen-template-about-me" />
              <img src={screenTemplateAboutMeMobile} alt="screen-template-about-me-mobile" />
              <div className="home-text">
                <p>
                  Olá, me chamo <span>Lucas Oliveira</span> e sou um Desenvolvedor de Software apaixonado por tecnologia e cultura geek.
                </p>
                <p>
                  Comecei minha migração de carreira para a área de T.I. em 2022, desenvolvendo habilidades sólido no Frontend, Backend e  em projetos autônomos para <span>web</span> no GitHub e em produção em plataformas de deploy.
                </p>
                <p>
                  Comunicação, foco nos detalhes, proatividade, autonomia e aptidão para aprender <span>novas ferramentas e habilidades</span> de maneira rápida são os principais pontos que me definem profissionalmente. Com os anos de experiência pude desenvolver meu senso de responsabilidade para com os resultados, buscando melhores maneiras de solucionar os problemas.
                </p>
              </div>
            </div>
            <img src={robotProto1} alt="robot-cute-proto-1" className="shake-vertical-robot" />
          </div>
        </ContainerRight>
      </main>
    </div>
  )
}

export default Home;
