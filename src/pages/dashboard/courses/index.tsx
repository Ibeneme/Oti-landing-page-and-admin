import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "../../../Redux/api";
import Breadcrumb from "../../../components/dashboard/Breadcrumb";
import { Course } from "../../../utils/types";
import useLoader from "../../../hooks/useLoader";

const trimText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Courses = () => {
  const courses = useGetCoursesQuery(null);

  useLoader(courses.isLoading, courses?.error);

  return (
    <div>
      <Breadcrumb pageName="Academy Courses" />

      {courses?.data && courses?.data?.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
          {courses?.data?.map((course: Course) => (
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link
                to={`/dashboard/courses/${course._id}`}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">View Course</span>
              </Link>
              <div className="absolute top-2 right-2 z-20 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                {course.sections.length}{" "}
                {course.sections.length === 1 ? "Section" : "Sections"}
              </div>
              <img
                src={course?.image ?? "/placeholder.svg"}
                alt="Course Thumbnail"
                width="300"
                height="200"
                className="object-cover w-full h-48"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="p-4 bg-background space-y-2">
                <h3 className="text-xl font-bold">
                  {trimText(course.title, 50)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {trimText(course.description, 120)}
                </p>
              </div>
            </div>
          ))}
        </section>

        // <Table courses={courses?.data} />
      )}
    </div>
  );
};

export default Courses;
