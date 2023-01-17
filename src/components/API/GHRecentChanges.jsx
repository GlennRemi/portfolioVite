import { useEffect, useState } from "react";
import {} from "react";
import Axios from "axios";

function RecentChanges() {
  const [events, setEvets] = useState("");

  useEffect(() => {
    Axios.get("https://api.github.com/users/GlennRemi/events").then(
      (response) => {
        const fetchedData = [...response.data];
        setEvets(fetchedData);
      }
    );
  }, []);
  if (events) {
    return (
      <div>
        {events.map((upload, i) => (
          <div key={i}>
            {console.log(upload.payload.commits[0].message)}
            <h3>Repo: {upload.repo.name.replace("GlennRemi/", "")}</h3>
            {/* {upload.payload.commits[0].message === String ? (
              <h3>upload.payload.commit[0].message</h3>
            ) : (
              ""
            )} */}
            <h3>{upload.created_at}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default RecentChanges;
