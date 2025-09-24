import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth (example)
    localStorage.removeItem("token");
    navigate("/login"); // redirect to login page
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <p className="text-gray-600">Logging out...</p>
    </div>
  );
};

export default Logout;
