import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  SignIn,
  SignUp,
  ForgotPassword,
  Dashboard,
  SearchJobs,
  Companies,
  Statistics,
  Profile,
  Applications,
  UpdatePassword,
  Error,
} from "@/pages";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "@/shared/Loader";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate to="sign-in" />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="update-password" element={<UpdatePassword />} />
          </Route>
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search-jobs" element={<SearchJobs />} />
            <Route path="companies" element={<Companies />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="profile" element={<Profile />} />
            <Route path="applications" element={<Applications />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
