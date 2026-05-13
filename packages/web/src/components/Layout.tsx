import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearAuth, getUser } from '../lib/auth';

const NAV = [
  { to: '/products',        label: 'Ürünler' },
  { to: '/warehouses',      label: 'Depolar' },
  { to: '/excel-import',    label: 'Excel İçe Aktar' },
  { to: '/skt-report',      label: 'SKT Raporu' },
  { to: '/inventory-count', label: '📋 Sayım' },
];

export function Layout() {
  const navigate = useNavigate();
  const user = getUser();

  function logout() {
    clearAuth();
    navigate('/login');
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-5 py-4 border-b border-gray-200">
          <span className="text-lg font-bold text-blue-600">SKT Takip</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 truncate mb-2">{user?.email}</p>
          <button
            onClick={logout}
            className="w-full text-left text-xs text-red-500 hover:text-red-700"
          >
            Çıkış Yap
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
