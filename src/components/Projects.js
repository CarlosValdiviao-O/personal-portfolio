import ProjectCard from "./ProjectCard";


let projects = [
  {
    name: 'My Gaming List',
    description: "This is my most ambitious project so far and I'm pleased with the results. It's a knock-off of <a href='https://myanimelist.net/'>https://myanimelist.net/<a/> but for gaming with what I considered the most important features from the page.",
    image: 'my-gaming-list',
    demo: 'https://my-gaming-list.web.app/',
    github: 'https://github.com/CarlosValdiviao-O/my-gaming-list',
  },
  {
    name: 'Find The Characters',
    description: 'Web Game where you have to search for the requested characters in a large image as quick as possible.',
    image: 'find-the-characters',
    demo: 'https://find-the-characters-odin.web.app/',
    github: 'https://github.com/CarlosValdiviao-O/find-the-characters',
  },
  {
    name: 'Battleship',
    description: 'Battleship game where you can play against the CPU or against another player by passing the device between the two on each turn.',
    image: 'battleship',
    demo: 'https://carlosvaldiviao-o.github.io/battleship/',
    github: 'https://github.com/CarlosValdiviao-O/battleship',
  },
  {
    name: 'Todo List',
    description: 'Todo-List application that lets you create projects and todos within them with their own properties.',
    image: 'todo-list',
    demo: 'https://carlosvaldiviao-o.github.io/todo-List/',
    github: 'https://github.com/CarlosValdiviao-O/todo-List',
  },
  {
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe game where you can play against the CPU in three difficulty levels or against another person. Also has different customization options.',
    image: 'tic-tac-toe',
    demo: 'https://carlosvaldiviao-o.github.io/ticTacToe/',
    github: 'https://github.com/CarlosValdiviao-O/ticTacToe',
  },
  {
    name: 'Etch-a-Sketch',
    description: 'Board game where you can color every pixel on the board with extra features such as: changing the number of pixels in the board, toggle grid lines and color picking features.',
    image: 'etch-a-sketch',
    demo: 'https://carlosvaldiviao-o.github.io/etch-a-Sketch/',
    github: 'https://github.com/CarlosValdiviao-O/etch-a-Sketch',
  },
]

function Projects() {
    return (
      <div className="projects">
        <h2>My work</h2>
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