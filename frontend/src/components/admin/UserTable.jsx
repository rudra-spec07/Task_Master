import UserRow from "./UserRow";

const UserTable = ({
  users,
  refresh,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="border-b border-border bg-background">

            <tr>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                refresh={refresh}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default UserTable;