import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import ResetPassword from "./pages/auth/reset";
import Error404 from "./pages/auth/404/Error404";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import ProtectRoutes from "./components/dashboard/ProtectRoutes";
import Users from "./pages/dashboard/users";
import Home from "./pages/dashboard";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={<div className="text-white">Protected page</div>}
        />
        <Route path="/login" Component={LoginPage} />
        <Route path="/reset-password" Component={ResetPassword} />
        <Route path="/404" Component={Error404} />
        <Route path="/dashboard" element={<ProtectRoutes />}>
          <Route path="/dashboard/" Component={Home} />
          <Route path="/dashboard/users" Component={Users} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Provider>
  );
}

export default App;
