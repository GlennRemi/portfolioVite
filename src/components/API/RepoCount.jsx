import { useEffect, useState } from "react";

function RepoCount() {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/GlennRemi")
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = { ...data };
        setInfo(fetchedData);
      });
  }, []);

  if (info) return <h3>Current total public repos: {info.public_repos}</h3>;
}

export default RepoCount;
