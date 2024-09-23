import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import useLoader from "../../../hooks/useLoader";
import { useGetProvidersQuery } from "../../../Redux/api";
import Table from "./Table";

// type Props = {};

const Providers = () => {
  const providers = useGetProvidersQuery(null);
  useLoader(providers.isLoading, providers?.error);
  return (
    <div>
      <Breadcrumb pageName="Providers" />

      {providers?.data && providers?.data?.length > 0 && (
        <Table name="All Providers" users={providers?.data} />
      )}
    </div>
  );
};

export default Providers;
