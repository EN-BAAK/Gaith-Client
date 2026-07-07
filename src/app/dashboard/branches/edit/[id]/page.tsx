"use client";

import { Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { GitBranch, MapPin, Share2, Phone } from "lucide-react";
import { useGetBranchByIdSettings, useUpdateBranchSettings } from "@/features/useBranches";
import { validationBranchModifySchema } from "@/constants/formsValidations";
import { BranchEntity, SiteEntity } from "@/types/models";
import EmptyContent from "@/app/dashboard/EmptyContent";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import InputField from "@/libraries/forms/components/InputField";
import SelectorField from "@/libraries/forms/components/SelectorField";
import LoadingPage from "@/components/LoadingPage";
import { useGetAllSitesSettings } from "@/features/useSites";

const EditBranchForm: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const { mutateAsync } = useUpdateBranchSettings();
  const { data: branchDataResponse, isFetching: isFetchingBranch } = useGetBranchByIdSettings(id.toString());
  const { data: sitesData, isFetching: isFetchingSites } = useGetAllSitesSettings();

  const branchData = branchDataResponse?.data;

  const sitesOptions = sitesData?.data?.map((site: SiteEntity) => ({
    key: site.name,
    value: site.id,
  })) || [];

  const handleGoBack = () => router.back();

  const onSubmit = async (values: BranchEntity) => {
    const { id, group: _, ...data } = values;
    await mutateAsync({
      id,
      data,
    });
  };

  if (isFetchingBranch || isFetchingSites) {
    return <LoadingPage />;
  }

  if (!branchData) {
    return (
      <EmptyContent
        title="مشكلة مفاجئة"
        desc="عذراً، هذا الفرع غير موجود أو تم حذفه"
        buttonAction={handleGoBack}
      />
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3 text-right">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <GitBranch className="size-6" />
        </div>
        <div>
          <h1 className="font-rubik text-2xl font-bold text-text">تعديل بيانات الفرع</h1>
          <p className="text-sm text-muted-foreground">تعديل تفاصيل الفروع الجغرافية وحسابات التواصل</p>
        </div>
      </div>

      <Formik
        enableReinitialize
        initialValues={branchData}
        validationSchema={validationBranchModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">تحديث الموقع والفرع</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  name="name"
                  type="text"
                  dir="rtl"
                  label="اسم الفرع"
                  placeholder="أدخل اسم الفرع"
                />

                <SelectorField
                  name="groupId"
                  label="الموقع التابع له"
                  options={sitesOptions}
                />

                <div className="lg:col-span-2">
                  <InputField
                    name="location"
                    type="text"
                    dir="rtl"
                    label="العنوان بالتفصيل"
                    placeholder="أدخل العنوان"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">أرقام التواصل</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  name="phone"
                  type="text"
                  dir="ltr"
                  label="رقم الجوال"
                  placeholder="05xxxxxxx"
                />

                <InputField
                  name="telephone"
                  type="text"
                  dir="ltr"
                  label="رقم الهاتف الأرضي"
                  placeholder="01xxxxxxx"
                />
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Share2 className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">روابط التواصل الاجتماعي</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  name="facebook"
                  type="text"
                  dir="ltr"
                  label="رابط صفحة فيسبوك"
                  placeholder="https://facebook.com/..."
                />

                <InputField
                  name="instagram"
                  type="text"
                  dir="ltr"
                  label="رابط حساب انستغرام"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </section>

            <div className="flex justify-end">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="تحديث وحفظ التعديلات"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditBranchForm;