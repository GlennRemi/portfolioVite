import styles from "../../styles/project.module.css";

/* Maps out modal view of each project to DOM */
function ProjectFormateModal(props) {
  const { onClickHandler, info, keyid } = props;
  const { title, projectsimg, imgalt, text } = info;
  return (
    <>
      <div className={styles.projectbox} key={keyid} onClick={onClickHandler}>
        <h2>{title}</h2>
        <img src={projectsimg} alt={imgalt} />
        <p>{text}</p>
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
