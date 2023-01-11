import styles from "../../styles/project.module.css";

/* Maps out defaul view of projects to DOM */
function ProjectFormate(props) {
  const { onClickHandler, info, keyid } = props;
  const { title, projectsimg, imgalt, text } = info;
  return (
    <>
      <div className={styles.projectbox} key={keyid} onClick={onClickHandler}>
        <h2>{title}</h2>
        <p>{text}</p>
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
