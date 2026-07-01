import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <main className="flex-1">

        <Navbar />

        <div className="p-8">

          {children}

        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;