import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserSelector } from "../../Redux/store";
import DefaultLayout from "./layout/DefaultLayout";

const ProtectRoutes = () => {
  const user = useUserSelector();
  const location = useLocation();

  if (!user?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default ProtectRoutes;
