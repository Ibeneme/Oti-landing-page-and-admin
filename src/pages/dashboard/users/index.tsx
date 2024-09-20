import { useGetUsersQuery } from "../../../Redux/api";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import useLoader from "../../../hooks/useLoader";
import Table from "./Table";

const Users = () => {
  const users = useGetUsersQuery(null);

  useLoader(users.isLoading, users?.error);

  return (
    <div>
      <Breadcrumb pageName="Users" />

      {users?.data && users?.data?.length > 0 && (
        <Table name="All Users" users={users?.data} />
      )}
    </div>
  );
};

export default Users;
