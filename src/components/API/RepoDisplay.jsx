import { useEffect, useState } from "react";
import Axios from "axios";

function RepoDisplay() {
  const [repo, setRepo] = useState("");

  useEffect(() => {
    Axios.get("https://api.github.com/users/GlennRemi/repos").then(
      (response) => {
        const fetchedData = [...response.data];
        setRepo(fetchedData);
      }
    );
  }, []);
  if (repo) {
    return (
      <div>
        {repo.map((data, i) => (
          <h3 key={i}>{data.name}</h3>
        ))}
      </div>
    );
  }
}

export default RepoDisplay;
