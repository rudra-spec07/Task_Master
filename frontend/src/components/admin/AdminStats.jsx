import Card from "../common/Card";

const AdminStats = ({ stats }) => {
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
    },
    {
      title: "Active Users",
      value: stats.activeUsers,
    },
    {
      title: "Inactive Users",
      value: stats.inactiveUsers,
    },
    {
      title: "Total Tasks",
      value: stats.totalTasks,
    },
    {
      title: "Completed",
      value: stats.completedTasks,
    },
    {
      title: "Pending",
      value: stats.pendingTasks,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

      {cards.map((card) => (
        <Card key={card.title} className="flex min-h-[140px] flex-col justify-between">

          <p className="min-h-[40px] text-sm text-text-secondary">
  {card.title}
</p>

          <h2 className="mt-3 text-4xl font-bold">
            {card.value}
          </h2>

        </Card>
      ))}

    </div>
  );
};

export default AdminStats;