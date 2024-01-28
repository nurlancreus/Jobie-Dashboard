import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/features/auth/useUser";
import Loader from "@/shared/Loader";

export default function AuthLayout() {
  const { isLoading, isAuthenticated } = useUser();
  const { pathname } = useLocation();

  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (isAuthenticated && !pathname.endsWith("update-password"))
      navigate("/app", { replace: true });
  }, [isAuthenticated, navigate, pathname]);

  if (isLoading) return <Loader />;

  return (
    <div className="h-screen bg-body">
      <div className="absolute left-0 right-0 top-1/2 mx-auto w-full max-w-[30rem] -translate-y-1/2 rounded-2xl bg-primary p-7 sm:p-8 md:p-12">
        <Outlet />
      </div>
    </div>
  );
}
