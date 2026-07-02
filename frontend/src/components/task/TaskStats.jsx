import Card from "../common/Card";

const TaskStats = ({ tasks }) => {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "PENDING"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "COMPLETED"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: total,
    },
    {
      title: "Pending",
      value: pending,
    },
    {
      title: "Completed",
      value: completed,
    },
  ];

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <p className="text-sm text-text-secondary">
            {stat.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {stat.value}
          </h2>
        </Card>
      ))}
    </div>
  );
};

export default TaskStats;