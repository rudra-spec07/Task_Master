const StatsCard = ({
  title,
  count,
  icon: Icon,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-text-secondary">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-text-primary">
            {count}
          </h2>

        </div>

        <div className="rounded-xl bg-primary/10 p-4">

          <Icon
            size={28}
            className="text-primary"
          />

        </div>

      </div>

    </div>
  );
};

export default StatsCard;