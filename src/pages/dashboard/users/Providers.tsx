import React from "react";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import { useGetProvidersQuery } from "../../../Redux/api";
import Table from "./Table";

// type Props = {};

const Providers = () => {
  const providers = useGetProvidersQuery(null);
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
