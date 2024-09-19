import { useParams } from "react-router-dom";
import Breadcrumb from "../../../../components/dashboard/Breadcrumb";
import Table from "./Table";
import { useGetRequestListQuery } from "../../../../Redux/api";
import useLoader from "../../../../hooks/useLoader";

const UserRequestsView = () => {
  const { type } = useParams();
  const { data, isLoading, error } = useGetRequestListQuery(type as string);

  useLoader(isLoading, error);
  return (
    <div>
      <Breadcrumb pageName={`Requests`} />

      {data?.statuses && data?.statuses?.length > 0 && (
        <Table name={`${type} Requests`} data={data?.statuses} />
      )}
    </div>
  );
};

export default UserRequestsView;
