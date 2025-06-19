import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import OpenLayout from './components/OpenLayout';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <OpenLayout>
            <Home />
          </OpenLayout>
        }
      />
      <Route
        path="/products"
        element={
          <OpenLayout>
            <Products />
          </OpenLayout>
        }
      />
      <Route
        path="/pricing"
        element={
          <OpenLayout>
            <Pricing />
          </OpenLayout>
        }
      />
      <Route
        path="/team"
        element={
          <OpenLayout>
            <Team />
          </OpenLayout>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

