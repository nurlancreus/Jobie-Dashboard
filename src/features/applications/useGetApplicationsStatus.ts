import { getApplicationsStatus } from "@/services/apiApplications";
import { useQuery } from "@tanstack/react-query";

export function useGetApplicationsStatus() {
  const {
    data: {data: applications = []} = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["applicationsStatuses"],
    queryFn: () => getApplicationsStatus(), // this fn should return the Promise
  });

  console.log(applications)

  return { applications, isLoading, error };
}
