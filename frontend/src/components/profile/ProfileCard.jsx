import Card from "../common/Card";

const ProfileCard = ({ user }) => {
  return (
    <Card>

      <div className="flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">

          {user?.name?.charAt(0)}

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            {user?.name}
          </h2>

          <p className="text-text-secondary">
            {user?.email}
          </p>

          <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {user?.role}
          </span>

        </div>

      </div>

    </Card>
  );
};

export default ProfileCard;