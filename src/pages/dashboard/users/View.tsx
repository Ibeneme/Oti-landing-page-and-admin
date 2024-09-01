import React from "react";
import { useParams } from "react-router-dom";
import { useGetAUserQuery } from "../../../Redux/api";
import UserProfile from "../../../components/dashboard/profile";

type Props = {};

const ViewUser = (props: Props) => {
  const { id } = useParams();
  const { data, isLoading } = useGetAUserQuery(id as string);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <UserProfile user={data as Course} />
      )}
    </div>
  );
};

export default ViewUser;
