import Input from "../common/Input";

const UserSearch = ({
  search,
  setSearch,
}) => {
  return (
    <div className="max-w-md">

      <Input
        placeholder="Search users..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
};

export default UserSearch;