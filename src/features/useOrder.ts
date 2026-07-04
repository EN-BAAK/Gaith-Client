import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createOrder, deleteOrderByIdSettings, getAllOrdersSettings, getOrderByIdSettings, getUserOrderById, getUserOrders, updateOrder, } from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { OrderEntity } from "@/types/models";
import { APIResponse } from "@/libraries/react-query/types";
import { ID } from "@/types/global";

const userKey = ["orders"];
const settingsKey = ["orders-settings"];

export const useGetUserOrders = () => {
  return useQuery({
    queryKey: userKey,
    queryFn: getUserOrders,
    retry: false,
  });
};

export const useGetUserOrderById = (id: ID) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => getUserOrderById(id),
    retry: false,
  });
};

export const useGetAllOrdersSettings = (limit: number) => {
  return useInfiniteQuery({
    queryKey: [settingsKey],
    queryFn: ({ pageParam = 1 }) =>
      getAllOrdersSettings({ limit, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.page + 1 : undefined),
    retry: false,
  });
};

export const useGetOrderByIdSettings = (id: ID) => {
  return useQuery({
    queryKey: ["orders-settings", id],
    queryFn: () => getOrderByIdSettings(id),
    refetchOnMount: "always",
    gcTime: 0,
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: (data: APIResponse<OrderEntity>) => {
      const newOrder = data.data;

      queryClient.setQueryData<APIResponse<OrderEntity[]>>(settingsKey, (oldData) => {
        if (!oldData) return oldData;
        return { ...oldData, data: [newOrder, ...oldData.data] };
      });

      pushToast({ message: "تم إنشاء الطلب بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إنشاء الطلب", type: "ERROR" });
    },
  });
};

export const useDeleteOrderByIdSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: deleteOrderByIdSettings,
    onSuccess: (data: APIResponse<OrderEntity>) => {
      const deletedOrder = data?.data;

      queryClient.setQueryData<APIResponse<OrderEntity[]>>(userKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((o) => o.id !== deletedOrder.id),
        };
      });

      queryClient.removeQueries({ queryKey: ["orders-settings", deletedOrder.id] });

      pushToast({ message: "تم حذف الطلب بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية حذف الطلب", type: "ERROR" });
    },
  });
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateOrder,
    onSuccess: (data: APIResponse<OrderEntity>) => {
      const updatedOrder = data.data;

      queryClient.setQueryData(["orders-settings", updatedOrder.id], data);
      queryClient.setQueryData(["orders", updatedOrder.id], data);

      queryClient.invalidateQueries({ queryKey: settingsKey });
      queryClient.invalidateQueries({ queryKey: userKey });

      pushToast({ message: "تم تحديث الطلب بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث الطلب", type: "ERROR" });
    },
  });
};