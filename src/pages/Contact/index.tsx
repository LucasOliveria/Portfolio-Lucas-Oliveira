import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import buttonTemplate from "../../assets/otherImages/button-template.svg";
import screenTemplateContact from "../../assets/screenTemplates/sreen-template-contact.svg";
import emailIcon from "../../assets/social/e-mail.svg";
import githubIcon from "../../assets/social/github.svg";
import linkedinIcon from "../../assets/social/linkedin.svg";
import ContainerLeft from '../../components/ContainerLeft';
import ContainerRight from '../../components/ContainerRight';
import './style.css';
import useStatesContext from "../../hooks/useStatesContext";

type Tform = {
  name: string
  email: string
  message: string
}

function Contact() {
  const [form, setForm] = useState<Tform>({
    name: "",
    email: "",
    message: ""
  });
  const { exit, setExit } = useStatesContext();

  function handleChangeForm(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      return console.log("Preencha todos os campos!");
    }

    console.log(form);
  }

  useEffect(() => {
    setExit("");
  }, []);

  return (
    <main className='main-generic'>
      <ContainerLeft>
        <div className={`container-gif-contact container-gif-generic ${exit !== "contact" ? "flicker-in-2" : "flicker-out-2"}`}>
          <div className='background-gradient-up-contact up-gradient'></div>
          <div className='background-gradient-down-contact down-gradient'></div>
        </div>
      </ContainerLeft>
      <ContainerRight title='Contato'>
        <div className={`container-contact into-container-right-generic ${exit !== "contact" ? "flicker-in-2" : "flicker-out-2"}`}>
          <div className='contact-box'>
            <img src={screenTemplateContact} alt="screen-template-contact" />
            <div className='contact-text'>
              <h2>Entre em contato</h2>
              <p className='p-13'>
                Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente estou procurando por um cargo e aberto para várias oportunidades.
              </p>
              <div className='container-social-media'>
                <img src={emailIcon} alt="social-icon" />
                <p>lucasoliveiralog@hotmail.com</p>
              </div>
              <div className='container-social-media'>
                <img src={linkedinIcon} alt="social-icon" />
                <p>
                  linkedin.com/in/lucas-oliveira-5b8a5532/
                </p>
              </div>
              <div className='container-social-media'>
                <img src={githubIcon} alt="social-icon" />
                <p>github.com/LucasOliveria</p>
              </div>
            </div>
          </div>
          <div className='contact-box'>
            <img src={screenTemplateContact} alt="screen-template-contact" />
            <div className='container-form-contact'>
              <form onSubmit={handleSubmit}>
                <div className='input-box'>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form?.name}
                    id="name"
                    onChange={handleChangeForm}
                    autoComplete="true"
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={form?.email}
                    id="email"
                    onChange={handleChangeForm}
                    autoComplete="true"
                  />
                </div>
                <div className='input-box'>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    name="message"
                    id="message"
                    value={form?.message}
                    onChange={handleChangeForm}
                    autoComplete="true"
                    cols={30}
                    rows={4}
                  >
                  </textarea>
                </div>
                <div className='container-contact-button button-hover-active'>
                  <button>
                    <p>Enviar</p>
                  </button>
                  <img src={buttonTemplate} alt="button-template-blur" />
                </div>
              </form>
            </div>
          </div>


        </div>
      </ContainerRight>
    </main>
  )
}

export default Contact;
