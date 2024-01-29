import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/apiAuthentication";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
