"use client";

import React, { useMemo } from "react";
import { Plus, Store } from "lucide-react";
import { useGetAllBranchesSettings, useDeleteBranchByIdSettings } from "@/features/useBranches"; // تأكد من مطابقة الـ Hooks لمشروعك
import { BranchEntity } from "@/types/models";
import Loading from "./Loading";
import CustomButton from "@/libraries/forms/components/Button";
import Content from "../Contetns";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { useRouter } from "next/navigation";
import { ID } from "@/types/global";
import Section from "./Section";

const BranchesPage: React.FC = () => {
  const { showWarning } = useAppContext();
  const router = useRouter();

  const { data, isFetching, refetch, isError } = useGetAllBranchesSettings();
  const { mutate: deleteBranch, isPending: isDeletePending } = useDeleteBranchByIdSettings();

  const branches: BranchEntity[] = data?.data || [];

  const groupedBranches = useMemo(() => {
    const groups: { [key: string]: { title?: string; items: BranchEntity[] } } = {};

    branches.forEach((branch) => {
      if (branch.groupId) {
        const key = `group-${branch.groupId}`;
        if (!groups[key]) {
          groups[key] = { title: branch.group || "مجموعة غير مسمّاة", items: [] };
        }
        groups[key].items.push(branch);
      } else {
        const key = "no-group";
        if (!groups[key]) {
          groups[key] = { title: undefined, items: [] };
        }
        groups[key].items.push(branch);
      }
    });

    return Object.values(groups);
  }, [branches]);

  const executeDelete = (branch: BranchEntity) => {
    showWarning({
      message: `هل أنت متأكد من حذف فرع "${branch.name}"؟`,
      btn1: "اغلاق",
      btn2: "حذف",
      handleBtn2: () => deleteBranch(branch.id)
    });
  };

  const goToAdd = () => router.push("branches/add");
  const goToEdit = (id: ID) => router.push(`branches/edit/${id}`);

  return (
    <div className="space-y-6 animate-fade-in animate-duration-300 w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-background2 pb-5">
        <div>
          <h1 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
            <Store className="w-6 h-6 text-accent" />
            إدارة فروع العرض ونقاط البيع
          </h1>
          <p className="text-sm text-text/70 mt-1 font-sans">
            عرض وتعديل وتجميع الفروع ومنافذ توزيع المنتجات والأقمشة الفاخرة.
          </p>
        </div>

        <CustomButton
          label="اضافة فرع جديد"
          icon={Plus}
          className="w-fit rounded-md"
          iconClassName="w-4 h-4 text-accent"
          onClick={goToAdd}
        />
      </div>

      <Content
        Skeletons={<Loading />}
        isEmpty={branches.length === 0}
        emptyTitle="ليس هناك أي فروع مسجلة بعد"
        emptyDesc="ابدأ بإضافة فروعك ونقاط توزيع الأقمشة والملابس لتسهيل إدارة طلبيات الجملة والمفرق."
        isError={isError}
        errorTitle="حدث خطأ في جلب الفروع"
        errorDesc="لم نتمكن من مزامنة الفروع حالياً، يرجى إعادة المحاولة."
        errorActionTitle="اعادة التحميل"
        errorAction={refetch}
        isLoading={isFetching}
      >
        <div className="space-y-8">
          {groupedBranches.map((group, index) => (
            <Section
              key={`branch-group-${index}`}
              title={group.title}
              branches={group.items}
              onDeleteBranch={executeDelete}
              isDeleting={isDeletePending}
              onEditBranch={goToEdit}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export default BranchesPage;