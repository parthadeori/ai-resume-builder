import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/me", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          navigate("/");
        }
      })
      .catch(() => navigate("/"));
  }, []);

  return <h1 className="p-10">Dashboard (Protected)</h1>;
}

export default Dashboard;
