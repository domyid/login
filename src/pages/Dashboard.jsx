import React, { useEffect, useState } from "react";
import { useAuth } from "../utils/AuthContext";
import ThemeController from "../components/ThemeController";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [defaultUser, setDefaultUser] = useState(null);

  useEffect(() => {
    if (!user) {
      setDefaultUser({
        _id: { $oid: "6667fdb2536e533efd3d99d9" },
        email: "udaffa09@gmail.com",
        name: "DapNotSad",
        picture:
          "https://lh3.googleusercontent.com/a/ACg8ocJ0jjm-R3lJE6FSXk5kUSn7TQxaNtM-cGqGKMZSMRwmjPZQkouP=s96-c",
      });
    }
  }, [user]);

  const displayedUser = user || defaultUser;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
      <ThemeController />
      {displayedUser && (
        <div className="max-w-md flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-extralight">
            Welcome,{" "}
            <span className="font-extrabold">{displayedUser.name}</span>
          </h1>
          <p className="mt-5 mb-5 badge badge-primary">
            <strong className="mr-3">Email:</strong> {displayedUser.email}
          </p>

          <div class="avatar">
            <div class="w-24 shadow-2xl rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={displayedUser.picture} alt={displayedUser.name} />
            </div>
          </div>
        </div>
      )}

      <button onClick={logOut} className="mt-4 btn btn-primary">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
