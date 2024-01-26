import { useUser } from "@/features/auth/useUser";
import Loader from "@/shared/Loader";
import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // 1. Load the authenticated user.
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is NO authenticated user, redirect to the "/sign-in".
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      if (pathname !== "/app") {
        navigate(
          `/sign-in?redirectTo=${pathname}&message=Please, first sign in, then try again`,
        );
      } else navigate("/sign-in");
    }
  }, [isAuthenticated, isLoading, pathname, navigate]);

  // 3. While loading, show s spinner.
  if (isLoading) return <Loader />;

  // 4. If there IS a authenticated user, rented the app.
  if (isAuthenticated) return children;
}
