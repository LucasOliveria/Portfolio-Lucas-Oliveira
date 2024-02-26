import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css'
import arrowLeft from "../../assets/otherImages/arrow-left.svg";
import arrowRight from "../../assets/otherImages/arrow-right.svg";
import screenTemplateGeneric from "../../assets/screenTemplates/screen-template-generic.svg";
import robotProto3 from "../../assets/robots/robot-cute-proto-3.svg";
import projectPhoto from "../../assets/projectsPhotos/influencer.png";
import buttonTemplate from "../../assets/otherImages/button-template.svg";
import { useEffect, useRef, useState } from 'react';
import useStatesContext from '../../hooks/useStatesContext';

function Projects() {
  const carouselRef = useRef<any>(null);
  const { arrow, setArrow } = useStatesContext();

  function handleCarousel(direction: string) {
    if (direction === "left" && arrow === "left" || direction === "right" && arrow === "right") {
      return;
    }

    if (direction === "right") {
      let forRight = carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;

      setArrow("Midway");

      if (forRight + 1 >= carouselRef.current.offsetWidth + carouselRef.current.clientWidth || forRight + 1 >= carouselRef.current.scrollWidth) {
        setArrow("right");
      }
      return;
    }

    let forLeft = carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;

    setArrow("Midway");

    if (forLeft <= 0) {
      setArrow("left");
    }
  }

  useEffect(() => {
    if (carouselRef.current.scrollLeft += carouselRef.current.offsetWidth !== carouselRef.current.scrollWidth) {
      setArrow("left");
    }
  }, []);

  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className="container-gif-projects container-gif-generic">
          <div className='background-gradient-up-projects up-gradient'></div>
          <div className='background-gradient-down-projects down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Projetos'>
        <div className="projects-page-container into-container-right-generic">
          <img
            onClick={() => handleCarousel("left")}
            src={arrowLeft} alt="arrow-left"
            className={`${arrow === "left" ? "arrow-hidden" : arrow === "Midway" || arrow === "right" ? "arrow-visible" : "arrow-hidden"}`}
          />
          <div
            ref={carouselRef}
            className='project-carousel'>
            <div className="project-box">
              <img src={screenTemplateGeneric} alt="screen-template-generic" />
              <div className="container-photo-description-link">
                <img src={projectPhoto} alt="project-photo" />
                <p><span>Projeto Influencer Hub</span></p>
                <p>
                  Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo.
                </p>
              </div>
              <div className="container-project-button">
                <button>
                  <p>Link</p>
                </button>
                <img src={buttonTemplate} alt='button-template-blur' />
              </div>
            </div>
            <div className="project-box">
              <img src={screenTemplateGeneric} alt="screen-template-generic" />
              <div className="container-photo-description-link">
                <img src={projectPhoto} alt="project-photo" />
                <p><span>2</span></p>
                <p>
                  Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo.
                </p>
              </div>
              <div className="container-project-button">
                <button>
                  <p>Link</p>
                </button>
                <img src={buttonTemplate} alt='button-template-blur' />
              </div>
            </div>
            <div className="project-box">
              <img src={screenTemplateGeneric} alt="screen-template-generic" />
              <div className="container-photo-description-link">
                <img src={projectPhoto} alt="project-photo" />
                <p><span>3</span></p>
                <p>
                  Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo.
                </p>
              </div>
              <div className="container-project-button">
                <button>
                  <p>Link</p>
                </button>
                <img src={buttonTemplate} alt='button-template-blur' />
              </div>
            </div>
            <div className="project-box">
              <img src={screenTemplateGeneric} alt="screen-template-generic" />
              <div className="container-photo-description-link">
                <img src={projectPhoto} alt="project-photo" />
                <p><span>4</span></p>
                <p>
                  Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo.
                </p>
              </div>
              <div className="container-project-button">
                <button>
                  <p>Link</p>
                </button>
                <img src={buttonTemplate} alt='button-template-blur' />
              </div>
            </div>
          </div>
          <img
            onClick={() => handleCarousel("right")}
            src={arrowRight} alt="arrow-right"
            className={`${arrow === "right" ? "arrow-hidden" : arrow === "Midway" || arrow === "left" ? "arrow-visible" : "arrow-hidden"}`}
          />
          <img src={robotProto3} alt="robot-cute-proto-3" />
        </div>
      </ContainerRight>
    </main >
  )
}

export default Projects;
