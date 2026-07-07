"use client";

import { Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { Globe, MapPin } from "lucide-react";
import { useGetSiteByIdSettings, useUpdateSiteSettings } from "@/features/useSites";
import { validationSiteModifySchema } from "@/constants/formsValidations";
import { SiteEntity } from "@/types/models";
import EmptyContent from "@/app/dashboard/EmptyContent";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import InputField from "@/libraries/forms/components/InputField";
import LoadingPage from "@/components/LoadingPage";

const EditSiteForm: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const { mutateAsync } = useUpdateSiteSettings();
  const { data, isFetching } = useGetSiteByIdSettings(id.toString());

  const siteData = data?.data;

  const handleGoBack = () => router.back();

  const onSubmit = async (values: SiteEntity) => {
    const { id, ...data } = values;
    await mutateAsync({
      id: id.toString(),
      data,
    });
  };

  if (isFetching) {
    return <LoadingPage />;
  }

  if (!siteData) {
    return (
      <EmptyContent
        title="مشكلة مفاجئة"
        desc="عذراً، هذا الموقع غير موجود أو تم حذفه"
        buttonAction={handleGoBack}
      />
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3 text-right">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Globe className="size-6" />
        </div>
        <div>
          <h1 className="font-rubik text-2xl font-bold text-text">تعديل بيانات الموقع</h1>
          <p className="text-sm text-muted-foreground">تعديل مسميات المواقع والفروع المدخلة مسبقاً</p>
        </div>
      </div>

      <Formik
        enableReinitialize
        initialValues={siteData}
        validationSchema={validationSiteModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">تحديث الموقع</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-end">
                <InputField
                  name="name"
                  type="text"
                  dir="rtl"
                  label="اسم الموقع الحالي"
                  placeholder="أدخل اسم الموقع"
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

export default EditSiteForm;