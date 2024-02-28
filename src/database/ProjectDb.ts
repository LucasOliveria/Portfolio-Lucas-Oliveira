import accioUsers from "../assets/projectsPhotos/accio-user-github.png";
import hangman from "../assets/projectsPhotos/hangman.png";
import projetoInfluencer from "../assets/projectsPhotos/influencer.png";
import payStatus from "../assets/projectsPhotos/pay-status-cubos.png";

type TProject = {
  id: number
  image: string;
  title: string;
  text: string
  link: string;
}

export const projects: TProject[] = [
  {
    id: 1,
    image: projetoInfluencer,
    title: "Projeto Influencer Hub",
    text: "Aplicação de gerenciamento de informações de influenciadores. Nele é possível cadastrar, editar e apagar dados vizualizar informações dos influenciadores cadastrados, como nome, e-mail de contato, @ do canal, plataformas utilizadas e categorias de conteúdo.",
    link: "https://influencer-hub-olivr.netlify.app/"
  },
  {
    id: 2,
    image: payStatus,
    title: "Pay Status Cubos",
    text: "Plataforma de gerenciamento de cobranças, contendo informações de carteira de clientes, divisão de inadimplentes, pendentes e adimplentes com datas e valores. Minhas contribuições foram como Scrum master e nos códigos tanto do backend quanto do frontend.",
    link: "https://pay-status-cubos.netlify.app/"
  },
  {
    id: 3,
    image: accioUsers,
    title: "Accio Users GitHub",
    text: "Aplicativo web que facilita a  busca por usuários no GitHub. Ele é capaz de localizar os melhores usuários de uma determinada região que trabalhem com determinados tipo de linguagem e tecnologia",
    link: "https://accio-users-github.netlify.app/"
  },
  {
    id: 4,
    image: hangman,
    title: "Hangman project",
    text: "Aplicação web do jogo da forca (Hangman). Esse foi o meu primeiro projeto com HTML, CSS e JavaScript e embora seja simples e não responsívo para telas mobile, ele apresenta funcionalidades criativas e originais.",
    link: "https://hangman-project-olivr.netlify.app/"
  },
]