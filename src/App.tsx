import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import ResetPassword from "./pages/auth/reset";
import Error404 from "./pages/auth/404/Error404";
import { persistor, store } from "./Redux/store";
import { Provider } from "react-redux";
import ProtectRoutes from "./components/dashboard/ProtectRoutes";
import Users from "./pages/dashboard/users";
import Home from "./pages/dashboard";
import Providers from "./pages/dashboard/users/Providers";
import ViewUser from "./pages/dashboard/users/View";
import Courses from "./pages/dashboard/courses";
import ViewCourse from "./pages/dashboard/courses/View";
import { PersistGate } from "redux-persist/integration/react";
import Requests from "./pages/dashboard/users/requests";
import UserRequestsView from "./pages/dashboard/users/requests/View";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/reset-password" Component={ResetPassword} />
          <Route path="/404" Component={Error404} />
          <Route path="/dashboard" element={<ProtectRoutes />}>
            <Route path="/dashboard/" Component={Home} />
            <Route path="/dashboard/communities" Component={Home} />
            <Route path="/dashboard/communities/signals" Component={Home} />
            <Route path="/dashboard/users" Component={Users} />
            <Route path="/dashboard/users/requests" Component={Requests} />
            <Route
              path="/dashboard/users/requests/:type"
              Component={UserRequestsView}
            />
            <Route path="/dashboard/users/:id" Component={ViewUser} />
            <Route
              path="/dashboard/users/:id/communities"
              Component={ViewUser}
            />
            <Route path="/dashboard/providers" Component={Providers} />
            <Route path="/dashboard/courses" Component={Courses} />
            <Route path="/dashboard/courses/:id" Component={ViewCourse} />
            <Route path="/dashboard/finances" Component={Users} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
