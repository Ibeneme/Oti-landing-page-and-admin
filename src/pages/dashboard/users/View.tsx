import { useParams } from "react-router-dom";
import { useGetAUserQuery } from "../../../Redux/api";
import UserProfile from "../../../components/dashboard/profile";
import { User } from "../../../utils/types";

const ViewUser = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAUserQuery(id as string);
  return (
    <div>
      {isLoading ? <div>Loading...</div> : <UserProfile user={data as User} />}
    </div>
  );
};

export default ViewUser;
