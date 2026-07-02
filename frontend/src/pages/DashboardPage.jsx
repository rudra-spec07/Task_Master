import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  ClipboardList,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

import taskService from "../services/task.service";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import RecentTasks from "../components/dashboard/RecentTasks";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks();

      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <DashboardSkeleton />
      </DashboardLayout>
    );
  }

  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "PENDING"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <WelcomeCard />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <StatsCard
            title="Total Tasks"
            count={total}
            icon={ClipboardList}
          />

          <StatsCard
            title="Pending"
            count={pending}
            icon={Clock3}
          />

          <StatsCard
            title="Completed"
            count={completed}
            icon={CheckCircle2}
          />

        </div>

        <RecentTasks
          tasks={tasks.slice(0, 5)}
        />

      </div>

    </DashboardLayout>
  );
};

export default DashboardPage;