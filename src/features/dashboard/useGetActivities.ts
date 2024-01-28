import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/services/apiDashboard";

export function useGetActivities() {
  const {
    data: activities = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities, // this fn should return the Promise
  });

  return { activities, isLoading, error };
}
