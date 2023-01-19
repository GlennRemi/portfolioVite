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
      }
    );
  }, []);

  if (events) {
    return (
      <div>
        <h3 className={styles.committext}>Recent commits to GitHub:</h3>
        {events.map((upload, i) => (
          <div key={i} className={styles.commitEventBox}>
            <h3 className={styles.committext}>
              Repo: {upload.repo.name.replace("GlennRemi/", "")}
            </h3>
            {upload.payload.commits !== undefined ? (
              <p className={styles.committext}>
                Message: {upload.payload.commits[0].message}
              </p>
            ) : null}
            <p className={styles.committext}>
              {upload.created_at.replace("T", " ").replace("Z", ".")}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
export default RecentChanges;
