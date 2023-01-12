import styles from "../../styles/project.module.css";

/* Maps out modal view of each project to DOM */
function ProjectFormateModal(props) {
  const { onClickHandler, info, keyid } = props;
  const { title, projectsimg, imgalt, text } = info;
  const { projecttext, projectbox, modal, projectclosemodal } = styles;
  return (
    <>
      <div className={projectbox + " " + modal} key={keyid}>
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
