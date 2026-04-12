import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl">{message}</h1>
    </div>
  );
}

export default App;
