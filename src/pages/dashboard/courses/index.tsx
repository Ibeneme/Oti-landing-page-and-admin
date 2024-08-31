import { useGetCoursesQuery } from "../../../Redux/api";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import Table from "./Table";

const Courses = () => {
  const courses = useGetCoursesQuery(null);

  return (
    <div>
      <Breadcrumb pageName="Users" />

      {courses?.data && courses?.data?.length > 0 && (
        <Table users={courses?.data} />
      )}
    </div>
  );
};

export default Courses;
