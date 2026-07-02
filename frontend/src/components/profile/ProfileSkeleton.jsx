const ProfileSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-border bg-surface p-6 shadow-card"
        >
          <div className="h-7 w-56 rounded bg-border"></div>

          <div className="mt-8 h-5 w-full rounded bg-border"></div>

          <div className="mt-3 h-5 w-2/3 rounded bg-border"></div>

          <div className="mt-8 h-12 rounded-xl bg-border"></div>
        </div>
      ))}

    </div>
  );
};

export default ProfileSkeleton;