import Skeleton from "./Skeleton";

const TableSkeleton = () => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">

      {[...Array(6)].map((_, i) => (

        <div
          key={i}
          className="mb-5 flex items-center justify-between"
        >

          <div className="flex items-center gap-4">

            <Skeleton className="h-12 w-12 rounded-full" />

            <div>

              <Skeleton className="h-4 w-36" />

              <Skeleton className="mt-3 h-4 w-56" />

            </div>

          </div>

          <Skeleton className="h-10 w-28" />

        </div>

      ))}

    </div>
  );
};

export default TableSkeleton;