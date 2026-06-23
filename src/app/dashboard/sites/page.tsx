"use client";

import React from "react";
import { MapIcon, Plus } from "lucide-react";
import { useGetAllSitesSettings, useDeleteSiteByIdSettings } from "@/features/useSites";
import { SiteEntity } from "@/types/models";
import Site from "./Site";
import Loading from "./Loading";
import CustomButton from "@/libraries/forms/components/Button";
import Content from "../Contetns";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { useRouter } from "next/navigation";
import { ID } from "@/types/global";

const SitesPage: React.FC = () => {
  const { showWarning } = useAppContext();
  const router = useRouter();

  const { data, isFetching, refetch, isError } = useGetAllSitesSettings();
  const { mutate: deleteSite, isPending: isDeletePending } = useDeleteSiteByIdSettings();

  const sites: SiteEntity[] = data?.data || [];

  const executeDelete = (site: SiteEntity) => {
    showWarning({
      message: `هل أنت متأكد من حذف موقع "${site.name}"؟ سيؤثر هذا على توزيع المخزون المرتبط بهذا الموقع.`,
      btn1: "اغلاق",
      btn2: "حذف",
      handleBtn2: () => deleteSite(site.id.toString())
    });
  };

  const goToAdd = () => router.push("sites/add");
  const goToEdit = (id: ID) => router.push(`sites/edit/${id}`);

  return (
    <div className="space-y-6 animate-fade-in animate-duration-300 w-full h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-background2 pb-5">
        <div>
          <h1 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
            <MapIcon className="w-6 h-6 text-accent" />
            إدارة الفروع والمستودعات (Sites)
          </h1>
          <p className="text-sm text-text/70 mt-1 font-sans">
            التحكم في مواقع فروع العرض ومستودعات تخزين الأقمشة والملابس لتتبع المخزون بدقة.
          </p>
        </div>

        <CustomButton
          label="اضافة موقع جديد"
          icon={Plus}
          className="w-fit rounded-md"
          iconClassName="w-4 h-4 text-accent"
          onClick={goToAdd}
        />
      </div>

      <Content
        Skeletons={<Loading />}
        isEmpty={sites.length === 0}
        emptyTitle="ليس هناك أي مواقع أو فروع بعد"
        emptyDesc="يمكنك إضافة الفروع أو المخازن الرئيسية هنا لتوزيع كميات المنتجات والأقمشة عليها لاحقاً."
        isError={isError}
        errorTitle="فشل الاتصال بالخادم"
        errorDesc="حدث خطأ أثناء جلب قائمة المواقع، يرجى التحقق من اتصالك وإعادة المحاولة."
        errorActionTitle="اعادة التحميل"
        errorAction={refetch}
        isLoading={isFetching}
      >
        <div className="bg-card rounded-xl border border-background2 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="bg-background2 border-b border-background2 text-text font-heading md:text-sm text-xs font-semibold">
                  <th className="p-4">اسم الفرع / المستودع</th>
                  <th className="p-4 text-left pl-6">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-background2 font-sans md:text-sm text-xs text-text">
                {sites.map((siteItem) => (
                  <Site
                    key={`site-${siteItem.id}`}
                    site={siteItem}
                    onDelete={() => executeDelete(siteItem)}
                    isDeleting={isDeletePending}
                    onEdit={() => goToEdit(siteItem.id.toString())}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default SitesPage;