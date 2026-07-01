import { cn } from "../../utils/cn";

const Button = ({
  children,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "w-full rounded-card bg-primary px-4 py-3 text-white font-semibold transition-all duration-200 hover:bg-primary-hover active:scale-[0.98] disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;