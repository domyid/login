import React from "react";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user && (
        <div className="profile">
          <h2 className="text-xl mb-2">Welcome, {user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
      <button onClick={logOut} className="mt-4 btn btn-primary">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
