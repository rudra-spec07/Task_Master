import { useContext } from "react";
import { CalendarDays } from "lucide-react";

import { AuthContext } from "../../context/AuthContext";

const WelcomeCard = () => {
  const { user } = useContext(AuthContext);

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-text-primary">
            Welcome back, {user?.name} 👋
          </h1>

          <p className="mt-3 text-lg text-text-secondary">
            Organize. Track. Achieve.
          </p>

        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border px-5 py-3">

          <CalendarDays
            size={20}
            className="text-primary"
          />

          <span className="text-sm font-medium">
            {today}
          </span>

        </div>

      </div>

    </div>
  );
};

export default WelcomeCard;