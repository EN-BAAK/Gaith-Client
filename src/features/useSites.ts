import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  createSiteSettings,
  deleteSiteByIdSettings,
  getAllSitesSettings,
  getSiteByIdSettings,
  updateSiteSettings,
} from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { APIResponse } from "@/libraries/react-query/types";
import { SiteEntity } from "@/types/models";
import { ID } from "@/types/global";

const baseKey = ["sites-settings"];

export const useGetAllSitesSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getAllSitesSettings,
    retry: false,
  });
};

export const useGetSiteByIdSettings = (id: ID) => {
  return useQuery({
    queryKey: ["sites-settings", id],
    queryFn: () => getSiteByIdSettings(id),
    refetchOnMount: "always",
    gcTime: 0,
  });
};

export const useCreateSiteSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: createSiteSettings,
    onSuccess: (data: APIResponse<SiteEntity>) => {
      const newSite = data.data;

      queryClient.setQueryData<APIResponse<SiteEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: [newSite, ...oldData.data],
        };
      });

      pushToast({ message: "تم إضافة الموقع بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/sites`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إضافة الموقع", type: "ERROR" });
    },
  });
};

export const useUpdateSiteSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateSiteSettings,
    onSuccess: (data: APIResponse<SiteEntity>) => {
      const updatedSite = data.data;

      queryClient.setQueryData<APIResponse<SiteEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((site) =>
            site.id === updatedSite.id ? updatedSite : site
          ),
        };
      });

      queryClient.setQueryData(["sites-settings", updatedSite.id], data);

      pushToast({ message: "تم تحديث الموقع بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/sites`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث الموقع", type: "ERROR" });
    },
  });
};

export const useDeleteSiteByIdSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: deleteSiteByIdSettings,
    onSuccess: (data: APIResponse<SiteEntity>) => {
      const deletedSite = data?.data;

      queryClient.setQueryData<APIResponse<SiteEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((site) => site.id !== deletedSite.id),
        };
      });

      queryClient.removeQueries({ queryKey: ["sites-settings", deletedSite.id] });

      pushToast({ message: "تم حذف الموقع بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية حذف الموقع", type: "ERROR" });
    },
  });
};