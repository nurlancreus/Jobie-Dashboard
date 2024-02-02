import { useQuery } from "@tanstack/react-query";
import { getApplicationStatuses } from "@/services/apiApplications";

export function useGetApplicationStatuses() {
  const {
    data: applications = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["applicationStatuses"],
    queryFn: () => getApplicationStatuses(), // this fn should return the Promise
  });

  return { applications, isLoading, error };
}
