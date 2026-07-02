import { Inbox } from "lucide-react";

const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl border border-dashed border-border py-20 text-center">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-text-secondary">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;