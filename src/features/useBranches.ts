import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  createBranchSettings,
  deleteBranchByIdSettings,
  getAllBranches,
  getAllBranchesSettings,
  getBranchById,
  getBranchByIdSettings,
  updateBranchSettings,
} from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { APIResponse } from "@/libraries/react-query/types";
import { BranchEntity, BranchEntityGlobal } from "@/types/models";
import { ID } from "@/types/global";

const userKey = ["branches"];
const settingsKey = ["branches-settings"];

export const useGetAllBranches = () => {
  return useQuery({
    queryKey: userKey,
    queryFn: getAllBranches,
    retry: false,
  });
};

export const useGetBranchById = (id: ID) => {
  return useQuery({
    queryKey: ["branches", id],
    queryFn: () => getBranchById(id),
    retry: false,
  });
};

export const useGetAllBranchesSettings = () => {
  return useQuery({
    queryKey: settingsKey,
    queryFn: getAllBranchesSettings,
    retry: false,
  });
};

export const useGetBranchByIdSettings = (id: ID) => {
  return useQuery({
    queryKey: ["branches-settings", id],
    queryFn: () => getBranchByIdSettings(id),
    refetchOnMount: "always",
    gcTime: 0,
  });
};

export const useCreateBranchSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: createBranchSettings,
    onSuccess: (data: APIResponse<BranchEntity>) => {
      const newBranch = data.data;

      queryClient.setQueryData<APIResponse<BranchEntity[]>>(settingsKey, (oldData) => {
        if (!oldData) return oldData;
        return { ...oldData, data: [newBranch, ...oldData.data] };
      });

      queryClient.invalidateQueries({ queryKey: userKey });

      pushToast({ message: "تم إضافة الفرع بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/branches`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إضافة الفرع", type: "ERROR" });
    },
  });
};

export const useUpdateBranchSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateBranchSettings,
    onSuccess: (data: APIResponse<BranchEntity>) => {
      const updatedBranch = data.data;

      queryClient.setQueryData<APIResponse<BranchEntity[]>>(settingsKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((b) => (b.id === updatedBranch.id ? updatedBranch : b)),
        };
      });

      queryClient.setQueryData(["branches-settings", updatedBranch.id], data);

      queryClient.invalidateQueries({ queryKey: userKey });
      queryClient.invalidateQueries({ queryKey: ["branches", updatedBranch.id] });

      pushToast({ message: "تم تحديث الفرع بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/branches`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث الفرع", type: "ERROR" });
    },
  });
};

export const useDeleteBranchByIdSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: deleteBranchByIdSettings,
    onSuccess: (data: APIResponse<BranchEntity>) => {
      const deletedBranch = data?.data;

      queryClient.setQueryData<APIResponse<BranchEntity[]>>(settingsKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((b) => b.id !== deletedBranch.id),
        };
      });

      queryClient.setQueryData<APIResponse<BranchEntityGlobal[]>>(userKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((b) => b.id !== deletedBranch.id),
        };
      });

      queryClient.removeQueries({ queryKey: ["branches-settings", deletedBranch.id] });
      queryClient.removeQueries({ queryKey: ["branches", deletedBranch.id] });

      pushToast({ message: "تم حذف الفرع بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية حذف الفرع", type: "ERROR" });
    },
  });
};