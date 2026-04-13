import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);

  return <h1 className="p-10">Dashboard (Protected)</h1>;
}

export default Dashboard;
