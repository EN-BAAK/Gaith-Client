import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  createColorSettings,
  deleteColorByIdSettings,
  getAllColorsSettings,
  getColorByIdSettings,
  updateColorSettings,
} from "@/api-client";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { ColorEntity } from "@/types/models";
import { APIResponse } from "@/libraries/react-query/types";

// الـ Base Key الخاص بـ الألوان لوحة التحكم (Admin)
const baseKey = ["colors-settings"];

// 1. جلب جميع الألوان دفعة واحدة
export const useGetAllColorsSettings = () => {
  return useQuery({
    queryKey: baseKey,
    queryFn: getAllColorsSettings,
    retry: false,
  });
};

// 2. جلب لون محدد عن طريق الـ ID
export const useGetColorByIdSettings = (id: number) => {
  return useQuery({
    queryKey: ["colors-settings", id],
    queryFn: () => getColorByIdSettings(id),
    refetchOnMount: "always",
    gcTime: 0,
  });
};

// 3. إنشاء لون جديد
export const useCreateColorSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: createColorSettings,
    onSuccess: (data: APIResponse<ColorEntity>) => {
      const newColor = data.data;

      // تحديث الـ Cache المباشر للمصفوفة
      queryClient.setQueryData<APIResponse<ColorEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: [newColor, ...oldData.data],
        };
      });

      pushToast({ message: "تم إضافة اللون بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/colors`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية إضافة اللون", type: "ERROR" });
    },
  });
};

// 4. تعديل لون موجود
export const useUpdateColorSettings = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: updateColorSettings,
    onSuccess: (data: APIResponse<ColorEntity>) => {
      const updatedColor = data.data;

      // تحديث العنصر المعدل داخل مصفوفة الـ Cache
      queryClient.setQueryData<APIResponse<ColorEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((color) =>
            color.id === updatedColor.id ? updatedColor : color
          ),
        };
      });

      // تحديث كاش الـ ID الفردي
      queryClient.setQueryData(["colors-settings", updatedColor.id], data);

      pushToast({ message: "تم تحديث اللون بنجاح", type: "SUCCESS" });
      router.push(`/dashboard/colors`);
    },
    onError: () => {
      pushToast({ message: "فشلت عملية تحديث اللون", type: "ERROR" });
    },
  });
};

// 5. حذف لون
export const useDeleteColorByIdSettings = () => {
  const queryClient = useQueryClient();
  const { pushToast } = useAppContext();

  return useMutation({
    mutationFn: deleteColorByIdSettings,
    onSuccess: (data: APIResponse<ColorEntity>) => {
      const deletedColor = data?.data;

      // فلترة المصفوفة لحذف اللون من الكاش فوراً
      queryClient.setQueryData<APIResponse<ColorEntity[]>>(baseKey, (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData.data.filter((color) => color.id !== deletedColor.id),
        };
      });

      // حذف كاش الـ ID الفردي تماماً
      queryClient.removeQueries({ queryKey: ["colors-settings", deletedColor.id] });

      pushToast({ message: "تم حذف اللون بنجاح", type: "SUCCESS" });
    },
    onError: () => {
      pushToast({ message: "فشلت عملية حذف اللون", type: "ERROR" });
    },
  });
};