import { useEffect, useState } from "react";
import Axios from "axios";
import styles from "../../styles/API.module.css";

function RecentChanges() {
  const [events, setEvets] = useState("");

  useEffect(() => {
    Axios.get("https://api.github.com/users/GlennRemi/events").then(
      (response) => {
        const fetchedData = [...response.data];
        setEvets(fetchedData.slice(0, 3));
        console.log(fetchedData);
      }
    );
  }, []);

  if (events) {
    return (
      <div>
        {events.map((upload, i) => (
          <div key={i} className={styles.eventbox}>
            <h3>Repo: {upload.repo.name.replace("GlennRemi/", "")}</h3>
            {upload.payload.commits !== undefined ? (
              <h3>Commit message:{upload.payload.commits[0].message}</h3>
            ) : null}
            <h3>{upload.created_at}</h3>
          </div>
        ))}
      </div>
    );
  }
}
export default RecentChanges;
