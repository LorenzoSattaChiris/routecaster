import { Routes, Route } from "react-router-dom";

// App pages
import Dashboard from "./pages/App/Dashboard";
import RouteCast from "./pages/App/RouteCast";
import Settings from "./pages/App/Settings";
import Upgrade from "./pages/App/Upgrade";

// Auth check
import AuthCheck from "./utils/AuthCheck";

export default function AppSubdomain() {
  return (
    <AuthCheck>
      Hello
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/routecast" element={<RouteCast />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </AuthCheck>
  );
}
