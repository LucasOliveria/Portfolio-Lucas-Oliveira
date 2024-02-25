import javaScript from "../assets/skills/js.svg"
import node from "../assets/skills/nodes-line.svg"
import reactjs from "../assets/skills/reactjs.svg"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import typescript from "../assets/skills/typescript.svg"
import angular from "../assets/skills/angular.svg"
import sql from "../assets/skills/SQL.svg"
import api from "../assets/skills/API.svg"
import nest from "../assets/skills/nest.svg"
import git from "../assets/skills/git.svg"
import github from "../assets/skills/github.svg"

type TSkill = {
  id: number;
  symbol: string;
  name: string;
  site: string
}

export const skills: TSkill[] = [
  {
    id: 1,
    name: "JavaScript",
    symbol: javaScript,
    site: "https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
  },
  {
    id: 2,
    name: "Node.js",
    symbol: node,
    site: "https://nodejs.org/en"
  },
  {
    id: 3,
    name: "React.js",
    symbol: reactjs,
    site: "https://pt-br.legacy.reactjs.org/"
  },
  {
    id: 4,
    name: "HTML",
    symbol: html,
    site: "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
  },
  {
    id: 5,
    name: "CSS",
    symbol: css,
    site: "https://www.w3schools.com/css/default.asp"
  },
  {
    id: 6,
    name: "TypeScript",
    symbol: typescript,
    site: "https://www.typescriptlang.org/"
  },
  {
    id: 7,
    name: "Angular.js",
    symbol: angular,
    site: "https://angular.io/tutorial/first-app"
  },
  {
    id: 8,
    name: "SQL",
    symbol: sql,
    site: "https://www.devmedia.com.br/guia/guia-completo-de-sql/38314"
  },
  {
    id: 9,
    name: "API's",
    symbol: api,
    site: "https://rapidapi.com/pt/hub"
  },
  {
    id: 10,
    name: "Nest.js",
    symbol: nest,
    site: "https://docs.nestjs.com/"
  },
  {
    id: 11,
    name: "Git",
    symbol: git,
    site: "https://git-scm.com/"
  },
  {
    id: 12,
    name: "GitHub",
    symbol: github,
    site: "https://github.com/"
  },

]