import { cn } from "../../utils/cn";

const Input = ({
  label,
  className,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-primary">
        {label}
      </label>

      <input
        className={cn(
          "w-full rounded-card border border-border bg-surface px-4 py-3 outline-none transition focus:border-primary",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;