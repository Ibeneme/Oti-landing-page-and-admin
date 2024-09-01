import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserSelector } from "../../Redux/store";
import DefaultLayout from "./layout/DefaultLayout";
import LoaderProvider from "./providers/LoaderProvider";

const ProtectRoutes = () => {
  const user = useUserSelector();
  const location = useLocation();

  if (!user?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <DefaultLayout>
      <LoaderProvider>
        <Outlet />
      </LoaderProvider>
    </DefaultLayout>
  );
};

export default ProtectRoutes;
