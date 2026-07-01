import { cn } from "../../utils/cn";

const Card = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-card bg-surface shadow-card border border-border p-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;