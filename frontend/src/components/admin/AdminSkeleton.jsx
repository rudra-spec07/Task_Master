import CardSkeleton from "../common/CardSkeleton";
import TableSkeleton from "../common/TableSkeleton";

const AdminSkeleton = () => {
  return (
    <div className="space-y-8">

      <div>
        <div className="h-10 w-72 animate-pulse rounded bg-border"></div>

        <div className="mt-3 h-5 w-56 animate-pulse rounded bg-border"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}

      </div>

      <div className="h-12 w-full max-w-md animate-pulse rounded-xl bg-border"></div>

      <TableSkeleton />

    </div>
  );
};

export default AdminSkeleton;