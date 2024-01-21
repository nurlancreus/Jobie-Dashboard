import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Applications,
  Companies,
  Dashboard,
  Profile,
  SearchJobs,
  Statistics,
} from "./pages";
import AppLayout from "./layout/AppLayout";
import QueryProvider from "./lib/react-query/QueryProvider";
import SidebarProvider from "./contexts/SidebarProvider";

export default function App() {
  return (
    <SidebarProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="search-jobs" element={<SearchJobs />} />
              <Route path="companies" element={<Companies />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="profile" element={<Profile />} />
              <Route path="applications" element={<Applications />} />
            </Route>
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </SidebarProvider>
  );
}
