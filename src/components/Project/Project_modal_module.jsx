import styles from "../../styles/project.module.css";
import { CurrentTheme } from "../../App";
import { useContext } from "react";

/* Maps out modal view of each project to DOM */
function ProjectFormateModal(props) {
  const { onClickHandler, info, keyid } = props;
  const { title, projectsimg, imgalt, text } = info;

  /* Styles */
  const { projecttext, projectbox, modal, projectclosemodal } = styles;
  const colorToggle = useContext(CurrentTheme);

  return (
    <>
      <div
        className={
          projectbox + " " + modal + " " + colorToggle.theme.modalcolor
        }
        key={keyid}
      >
        <div
          className={projectbox + " " + projectclosemodal}
          onClick={onClickHandler}
        >
          X
        </div>
        <h2 className={projecttext}>{title}</h2>
        <img src={projectsimg} alt={imgalt} />
        <p className={projecttext}>{text}</p>
        <a href={"www.vg.no"}>Click here to try.</a>{" "}
        <a href={"www.vg.no"}>Click here to view code.</a>
        <div>
          {info.tag.map((techStack, index) => (
            <p key={index}>{techStack}</p>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProjectFormateModal;
