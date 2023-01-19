import { useState } from "react";

/* Components and data */
import projectData from "../../data/project";
import ProjectFormate from "./ProjectFormate";
import ProjectFormateModal from "./Project_modal_module";
import RecentChanges from "../API/GHRecentChanges";
import RepoCount from "../API/RepoCount";

/* Styles */
import styles from "../../styles/project.module.css";

/** Project compiler to DOM */
function Project() {
  const { flex, box, projectcontainer } = styles;
  return (
    <>
      <div className={flex + " " + box + " " + projectcontainer}>
        {projectData.map((data, index) => {
          const [openModalState, setOpenModalState] = useState(0);

          /** On click handler that changes the state of displayed project */
          function handleClick() {
            setOpenModalState((oldState) => (oldState === 0 ? 1 : 0));
            console.log(`${index}` + openModalState);
          }
          /**  Statechecked if the modal is open, if not display default version in DOM */
          if (openModalState === 0)
            return (
              <div key={index}>
                <ProjectFormate
                  onClickHandler={handleClick}
                  info={data}
                  keyid={index}
                />
              </div>
            );
          /** Swaps out with the clicked project with modal version to the DOM */ else
            return (
              <div key={index} className={flex}>
                <ProjectFormateModal
                  onClickHandler={handleClick}
                  info={data}
                  keyid={index}
                />
              </div>
            );
        })}
        <div>
          <RecentChanges />
          <RepoCount />
        </div>
      </div>
    </>
  );
}

export default Project;
