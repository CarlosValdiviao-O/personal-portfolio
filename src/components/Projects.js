import ProjectCard from "./ProjectCard";
import { useTranslation } from 'react-i18next';


let projects = [
  {
    name: 'My Gaming List',
    translation: 'my_gaming_list',
    image: 'my-gaming-list',
    demo: 'https://my-gaming-list.web.app/',
    github: 'https://github.com/CarlosValdiviao-O/my-gaming-list',
  },
  {
    name: 'Find The Characters',
    translation: 'find_the_characters',
    image: 'find-the-characters',
    demo: 'https://find-the-characters-odin.web.app/',
    github: 'https://github.com/CarlosValdiviao-O/find-the-characters',
  },
  {
    name: 'Battleship',
    translation: 'battleship',
    image: 'battleship',
    demo: 'https://carlosvaldiviao-o.github.io/battleship/',
    github: 'https://github.com/CarlosValdiviao-O/battleship',
  },
  {
    name: 'Todo List',
    translation: 'todo_list',
    image: 'todo-list',
    demo: 'https://carlosvaldiviao-o.github.io/todo-List/',
    github: 'https://github.com/CarlosValdiviao-O/todo-List',
  },
  {
    name: 'Tic Tac Toe',
    translation: 'tic_tac_toe',
    image: 'tic-tac-toe',
    demo: 'https://carlosvaldiviao-o.github.io/ticTacToe/',
    github: 'https://github.com/CarlosValdiviao-O/ticTacToe',
  },
  {
    name: 'Etch-a-Sketch',
    translation: 'etch_a_sketch',
    image: 'etch-a-sketch',
    demo: 'https://carlosvaldiviao-o.github.io/etch-a-Sketch/',
    github: 'https://github.com/CarlosValdiviao-O/etch-a-Sketch',
  },
]

function Projects() {
  const { t } = useTranslation();
  return (
    <div className="projects">
      <h2 className="font-effect-shadow-multiple">{t('projects_header')}</h2>
      <div className="grid">
        {projects.map(project => {
          return (
            <ProjectCard project={project} />
          )
        })}
      </div>
    </div>
  );
}

export default Projects;