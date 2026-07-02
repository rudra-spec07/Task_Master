import toast from "react-hot-toast";

import Button from "../common/Button";

import adminService from "../../services/admin.service";

const UserRow = ({
  user,
  refresh,
}) => {

  const handleStatus = async () => {

    try {

      await adminService.updateUserStatus(
        user.id,
        !user.isActive
      );

      toast.success(
        `User ${
          user.isActive
            ? "deactivated"
            : "activated"
        } successfully.`
      );

      refresh();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Something went wrong."
      );

    }

  };

  return (

    <tr className="border-b border-border last:border-none">

      <td className="px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white">

            {user.name.charAt(0)}

          </div>

          <span className="font-medium">

            {user.name}

          </span>

        </div>

      </td>

      <td className="px-6 py-5">

        {user.email}

      </td>

      <td className="px-6 py-5">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            user.role === "ADMIN"
              ? "bg-purple-100 text-purple-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {user.role}
        </span>

      </td>

      <td className="px-6 py-5">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            user.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {user.isActive
            ? "Active"
            : "Inactive"}
        </span>

      </td>

      <td className="px-6 py-5">

        <div className="mx-auto w-36">

          <Button
            onClick={handleStatus}
            className={
              user.isActive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            }
          >
            {user.isActive
              ? "Deactivate"
              : "Activate"}
          </Button>

        </div>

      </td>

    </tr>

  );

};

export default UserRow;