import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Button from "../components/common/Button";

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-10">
      <h1 className="text-4xl font-bold">
        Welcome {user?.name}
      </h1>

      <p className="mt-2 text-text-secondary">
        {user?.email}
      </p>

      <div className="mt-8 w-40">
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;