import { validateAuthentication } from "@/api-client";
import { useQuery, } from "@tanstack/react-query"

export const useValidateAuthentication = () => {
  return useQuery({
    queryKey: ["verify-authentication"],
    queryFn: validateAuthentication,
    gcTime: 0,
    retry: false
  });
};
