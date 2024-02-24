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
}

export const skills: TSkill[] = [
  {
    id: 1,
    name: "JavaScript",
    symbol: javaScript,
  },
  {
    id: 2,
    name: "Node.js",
    symbol: node,
  },
  {
    id: 3,
    name: "React.js",
    symbol: reactjs,
  },
  {
    id: 4,
    name: "HTML",
    symbol: html,
  },
  {
    id: 5,
    name: "CSS",
    symbol: css,
  },
  {
    id: 6,
    name: "TypeScript",
    symbol: typescript,
  },
  {
    id: 7,
    name: "Angular.js",
    symbol: angular,
  },
  {
    id: 8,
    name: "SQL",
    symbol: sql,
  },
  {
    id: 9,
    name: "API's",
    symbol: api,
  },
  {
    id: 10,
    name: "Nest.js",
    symbol: nest,
  },
  {
    id: 11,
    name: "Git",
    symbol: git,
  },
  {
    id: 12,
    name: "GitHub",
    symbol: github,
  },

]