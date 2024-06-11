import React from "react";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    //   {user && (
    //     <div className="profile">
    //       <h2 className="text-xl mb-2">Welcome, {user.name}</h2>
    //       <p>
    //         <strong>Email:</strong> {user.email}
    //       </p>
    //     </div>
    //   )}
    //   <button onClick={logOut} className="mt-4 btn btn-primary">
    //     Log Out
    //   </button>
    // </div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        {user && (
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome, {user.name}</h1>
            <p className="py-6">
              <strong>Email:</strong> {user.email}
            </p>
            <img
              src={user.picture}
              alt={user.name}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        )}
        <div>
          <button onClick={logOut} className="mt-4 btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
