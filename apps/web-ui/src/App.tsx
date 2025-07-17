import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading…");

  useEffect(() => {
    fetch("/api/health")
      .then(r => r.json())
      .then(j => setStatus(j.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Skill‑Match Frontend</h1>
      <p>API health: {status}</p>
    </main>
  );
}

export default App;
