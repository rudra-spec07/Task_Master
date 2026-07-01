const StatusBadge = ({ status }) => {
  const styles = {
    PENDING:
      "bg-amber-100 text-amber-700 border border-amber-200",

    COMPLETED:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;