import React from "react";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
