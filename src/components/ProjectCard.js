import GitIcon from "./../icons/github.svg";
import LinkIcon from "../icons/open-in-new.svg";
import { useTranslation } from "react-i18next";

function ProjectCard(props) {

  const { project } = props;
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <a href={project.demo} className="screenshot">
        <img src={`${process.env.PUBLIC_URL}/assets/images/${project.image}.png`} alt='Project-Image'></img>
      </a>
      <div className="info">
        <div className="header">
          <h2 className="name">{project.name}</h2>
          <div className="links">
            <a href={project.github}>
              <img src={GitIcon} alt='GitHub-Icon'></img>
            </a>
            <a href={project.demo}>
              <img src={LinkIcon} alt='Link-Icon'></img>
            </a>
          </div>
        </div>
        <p className="description" dangerouslySetInnerHTML={{__html: t(project.translation)}}></p>
      </div>
    </div>
  );
}

export default ProjectCard;