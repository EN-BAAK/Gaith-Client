import { getSystemSettings, updateSystemSettings } from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { APIResponse } from "@/libraries/react-query/types";
import { SystemSettingsEntity } from "@/types/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const baseKey = ["system-settings"];

export const useGetSystemSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getSystemSettings,
    retry: false,
  });
};

export const useUpdateSystemSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateSystemSettings,
    onSuccess: (data: APIResponse<SystemSettingsEntity>) => {
      queryClient.setQueryData<APIResponse<SystemSettingsEntity>>(baseKey, data);
      pushToast({ message: "تم تحديث الإعدادات بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث الإعدادات", type: "ERROR" });
    },
  });
};