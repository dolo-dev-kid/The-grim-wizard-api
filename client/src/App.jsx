import { useEffect, useState } from "react";

export default function App() {
  const [serverStatus, setServerStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/health")
      .then((res) => res.json())
      .then((data) => setServerStatus(data.status))
      .catch(() => setServerStatus("Offline"));
  }, []);

  return (
    <div>
      <h1>Grim Wizzard</h1>
      <p>Backend Status: {serverStatus}</p>
    </div>
  );
}
