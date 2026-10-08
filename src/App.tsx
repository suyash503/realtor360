import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { TopNav } from './components/TopNav/TopNav';
import { DashboardPage } from './pages/DashboardPage';
import { ContactsPage } from './pages/ContactsPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { NAV_ITEMS } from './routes';

function AppLayout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          {NAV_ITEMS.filter((n) => n.path !== '/' && n.path !== '/contacts').map((n) => (
            <Route key={n.path} path={n.path.slice(1)} element={<PlaceholderPage title={n.label} />} />
          ))}
          <Route path="*" element={<PlaceholderPage title="Page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
