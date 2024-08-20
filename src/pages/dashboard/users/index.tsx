import { useGetUsersQuery } from "../../../Redux/api";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import Table from "./Table";

const Users = () => {
  const users = useGetUsersQuery(null);

  console.log(users?.data);
  return (
    <div>
      <Breadcrumb pageName="Users" />

      {users?.data && users?.data?.length > 0 && <Table users={users?.data} />}
    </div>
  );
};

export default Users;
