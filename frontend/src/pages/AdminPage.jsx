import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import adminService from "../services/admin.service";

import AdminStats from "../components/admin/AdminStats";
import UserSearch from "../components/admin/UserSearch";
import UserTable from "../components/admin/UserTable";

const AdminPage = () => {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [statsData, usersData] =
      await Promise.all([
        adminService.getStats(),
        adminService.getUsers(),
      ]);

    setStats(statsData);
    setUsers(usersData);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-text-secondary">
            Manage users and monitor ARDesk.
          </p>

        </div>

        {stats && (
          <AdminStats stats={stats} />
        )}

        <UserSearch
          search={search}
          setSearch={setSearch}
        />

        <UserTable
          users={filteredUsers}
          refresh={loadData}
        />

      </div>

    </DashboardLayout>
  );
};

export default AdminPage;