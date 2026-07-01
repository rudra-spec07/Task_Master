const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="space-y-3">
        <div className="h-10 w-72 rounded-xl bg-border"></div>
        <div className="h-5 w-56 rounded-xl bg-border"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-border bg-surface p-6 shadow-card"
          >
            <div className="h-5 w-24 rounded bg-border"></div>

            <div className="mt-6 h-10 w-16 rounded bg-border"></div>
          </div>
        ))}

      </div>

      <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">

        <div className="mb-6 h-7 w-40 rounded bg-border"></div>

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="mb-4 h-16 rounded-xl bg-border"
          />
        ))}

      </div>

    </div>
  );
};

export default DashboardSkeleton;