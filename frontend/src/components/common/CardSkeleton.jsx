import Card from "./Card";
import Skeleton from "./Skeleton";

const CardSkeleton = () => {
  return (
    <Card>

      <Skeleton className="h-5 w-24" />

      <Skeleton className="mt-5 h-10 w-20" />

    </Card>
  );
};

export default CardSkeleton;