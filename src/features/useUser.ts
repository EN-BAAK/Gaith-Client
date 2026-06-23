import { useQuery } from "@tanstack/react-query";
import { getVerifiedUsersSettings } from "@/api-client";

const baseKey = ["verified-users-settings"];

export const useGetVerifiedUsersSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getVerifiedUsersSettings,
    retry: false,
  });
};