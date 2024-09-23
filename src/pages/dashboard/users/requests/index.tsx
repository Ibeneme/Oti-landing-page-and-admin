import { FaUsers, FaUserTie, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Requests = () => {
  const requestTypes = [
    { type: "community", icon: <FaUsers /> },
    { type: "provider", icon: <FaUserTie /> },
    { type: "academy", icon: <FaGraduationCap /> },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Requests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {requestTypes.map((request, index) => (
          <Link to={`/dashboard/users/requests/${request.type}`} key={index}>
            <div className="flex flex-col py-[50px]  space-y-3 items-center p-4 bg-white rounded-lg shadow-md">
              <div className="text-3xl mr-4 text-primary">{request.icon} </div>
              <span className="text-lg text-black capitalize font-semibold">
                {request.type} Requests
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Requests;
