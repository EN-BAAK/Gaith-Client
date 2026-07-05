import { getDashboard } from "@/api-client";
import { useQuery } from "@tanstack/react-query";

const baseKey = ["dashboard-settings"];

export const useGetDashboardSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getDashboard,
    retry: false,
  });
};