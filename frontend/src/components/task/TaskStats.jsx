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
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2 lg:grid-cols-3">

      {stats.map((stat) => (
        <Card key={stat.title} className="flex min-h-[140px] flex-col justify-between">

          <p className="min-h-[40px] text-sm text-text-secondary">
  {stat.title}
</p>

         <h2 className="text-3xl font-bold sm:text-4xl">
            {stat.value}
          </h2>

        </Card>
      ))}

    </div>
  );
};

export default TaskStats;