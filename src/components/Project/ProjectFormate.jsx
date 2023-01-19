import styles from "../../styles/project.module.css";
import { CurrentTheme } from "../../App";
import { useContext } from "react";

/* Maps out defaul view of projects to DOM */
function ProjectFormate(props) {
  const { onClickHandler, info, keyid } = props;
  const { title, projectsimg, imgalt, text } = info;

  /* Styles */
  const { box, projecttext, projectboxsize } = styles;
  const colorToggle = useContext(CurrentTheme);

  return (
    <>
      <div
        className={
          box + " " + colorToggle.theme.projectcolor + " " + projectboxsize
        }
        key={keyid}
        onClick={onClickHandler}
      >
        <h2 className={projecttext}>{title}</h2>
        <p className={projecttext}>{text}</p>
        <img src={projectsimg} alt={imgalt} />
        <div>
          {info.tag.map((techStack, index) => (
            <p key={index}>{techStack}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectFormate;
