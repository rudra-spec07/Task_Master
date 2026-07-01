import { Inbox } from "lucide-react";

const EmptyState = ({
  title = "Nothing here",
  description = "No data available.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center shadow-card">
      <Inbox
        size={56}
        className="mb-4 text-text-secondary"
      />

      <h2 className="text-xl font-semibold text-text-primary">
        {title}
      </h2>

      <p className="mt-2 text-text-secondary">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;