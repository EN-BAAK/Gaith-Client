import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeUserRole, getVerifiedUsersSettings } from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";

const baseKey = ["verified-users-settings"];

export const useGetVerifiedUsersSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getVerifiedUsersSettings,
    retry: false,
  });
};

export const useUpdateUserRole = () => {
  const { pushToast } = useAppContext();
  const queryClient = useQueryClient()

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: baseKey });
    queryClient.removeQueries({ queryKey: baseKey });
    pushToast({ message: "تم تعديل نوع المستخدم", type: "SUCCESS" });
  };

  const onError = () => {
    pushToast({ message: "فشل تعديل نوع المستخدم", type: "ERROR" });
  };

  return useMutation({
    mutationFn: changeUserRole,
    onSuccess,
    onError
  })
}