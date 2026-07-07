import { useInfiniteQuery, useMutation, useQuery, useQueryClient, Query, QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  createProductSettings,
  deleteProductByIdSettings,
  getAllProducts,
  getAllProductsSettings,
  getProductById,
  getProductByIdSettings,
  updateProductSettings,
} from "@/api-client";
import { useOffsetContext } from "@/libraries/offset/OffsetsProvider";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { UpdateOffsetUnitProcess } from "@/libraries/offset/types";
import { APIResponse } from "@/libraries/react-query/types";
import { ProductEntity } from "@/types/models";
import { ID } from "@/types/global";

const userBaseKey = "products";
const adminBaseKey = "products-settings";

const clearFilteredProductsCache = (queryClient: QueryClient) => {
  queryClient.removeQueries({
    predicate: (query: Query) => {
      const key = query.queryKey;
      return (
        (key[0] === userBaseKey || key[0] === adminBaseKey) &&
        key.length > 1
      );
    },
  });
};

export const useGetAllProducts = (limit: number, search?: string, categoryId?: ID, brandId?: ID) => {
  return useInfiniteQuery({
    queryKey: [userBaseKey, limit, { search, categoryId, brandId }],
    queryFn: ({ pageParam = 1 }) =>
      getAllProducts({ limit, page: pageParam, search, categoryId, brandId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.page + 1 : undefined),
    retry: false,
  });
};

export const useGetProductById = (id: ID) => {
  return useQuery({
    queryKey: [userBaseKey, id],
    queryFn: () => getProductById(id.toString()),
    retry: false,
  });
};

export const useGetAllProductsSettings = (limit: number, search?: string) => {
  const { getOffsetUnit } = useOffsetContext();
  const offsetUnit = getOffsetUnit([adminBaseKey, ""]);

  return useInfiniteQuery({
    queryKey: [adminBaseKey, { search }],
    queryFn: ({ pageParam = 1 }) =>
      getAllProductsSettings({ limit, page: pageParam, offsetUnit, search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasMore
        ? lastPage.data.nextPage
        : undefined,
    retry: false,
  });
};

export const useGetProductByIdSettings = (id: ID) => {
  return useQuery({
    queryKey: [adminBaseKey, id],
    queryFn: () => getProductByIdSettings(id.toString()),
    refetchOnMount: "always",
    gcTime: 0,
  });
};

export const useCreateProductSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();
  const { updateOffsetUnit } = useOffsetContext();

  return useMutation({
    mutationFn: createProductSettings,
    onSuccess: () => {
      clearFilteredProductsCache(queryClient);
      queryClient.invalidateQueries({ queryKey: [userBaseKey] });
      queryClient.invalidateQueries({ queryKey: [adminBaseKey] });

      updateOffsetUnit([adminBaseKey, ""], UpdateOffsetUnitProcess.UP);
      pushToast({ message: "تم إضافة المنتج بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/products`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إضافة المنتج", type: "ERROR" });
    },
  });
};

export const useUpdateProductSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateProductSettings,
    onSuccess: (data: APIResponse<ProductEntity>) => {
      const updatedProduct = data.data;

      clearFilteredProductsCache(queryClient);

      queryClient.setQueryData([adminBaseKey, updatedProduct.id], data);
      queryClient.invalidateQueries({ queryKey: [userBaseKey, updatedProduct.id] });

      queryClient.invalidateQueries({ queryKey: [userBaseKey] });
      queryClient.invalidateQueries({ queryKey: [adminBaseKey] });

      pushToast({ message: "تم تحديث المنتج بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/products`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث المنتج", type: "ERROR" });
    },
  });
};

export const useDeleteProductByIdSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();
  const { updateOffsetUnit } = useOffsetContext();

  return useMutation({
    mutationFn: deleteProductByIdSettings,
    onSuccess: (data: APIResponse<ProductEntity>) => {
      const deletedProduct = data?.data;

      clearFilteredProductsCache(queryClient);

      queryClient.removeQueries({ queryKey: [adminBaseKey, deletedProduct.id] });
      queryClient.removeQueries({ queryKey: [userBaseKey, deletedProduct.id] });

      queryClient.invalidateQueries({ queryKey: [userBaseKey] });
      queryClient.invalidateQueries({ queryKey: [adminBaseKey] });

      updateOffsetUnit([adminBaseKey, ""], UpdateOffsetUnitProcess.DOWN);
      pushToast({ message: "تم حذف المنتج بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية حذف المنتج", type: "ERROR" });
    },
  });
};