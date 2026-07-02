import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-background">

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className="lg:ml-72">

        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <div className="p-4 sm:p-6 lg:p-8">

          {children}

        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;