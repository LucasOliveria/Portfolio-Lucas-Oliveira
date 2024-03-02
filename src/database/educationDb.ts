import cyberpunkShip1 from "../assets/ships/cyberpunk_ship1.svg"
import cyberpunkShip2 from "../assets/ships/cyberpunk_ship2.svg";

type TEducation = {
  id: number
  title: string;
  text: string;
  ship: string;
}

export const educations: TEducation[] = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas (EAD) - Faculdade Estácio (012024 - 03/2026)",
    text: "Implementação de projetos, documentação, especificação, testes, implementação e manutenção de sistemas computacionais e software.",
    ship: cyberpunkShip1
  },
  {
    id: 2,
    title: "Desenvolvimento de Software Full Stack - Cubos Academy (10/2022 - 08/2023)",
    text: "Curso com carga horária de 1000 horas focado em Desenvolvimento Web (Frontend e Backend)",
    ship: cyberpunkShip2
  }
]