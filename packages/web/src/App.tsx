import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './lib/auth';
import { Layout } from './components/Layout';
import Login from './pages/Login';
import Products from './pages/Products';
import ExcelImport from './pages/ExcelImport';
import SktReport from './pages/SktReport';
import Warehouses from './pages/Warehouses';
import InventoryCount from './pages/InventoryCount';
import Users from './pages/Users';

function RequireAuth({ children }: { children: React.ReactNode }) {
  return getUser() ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="products"         element={<Products />} />
          <Route path="warehouses"        element={<Warehouses />} />
          <Route path="excel-import"      element={<ExcelImport />} />
          <Route path="skt-report"        element={<SktReport />} />
          <Route path="inventory-count"   element={<InventoryCount />} />
          <Route path="users"             element={<Users />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
