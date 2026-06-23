"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { GitBranch, MapPin, Share2, Phone } from "lucide-react";
import { useCreateBranchSettings } from "@/features/useBranches";
import { initialBranchCreationValues } from "@/constants/formsValues";
import { validationBranchModifySchema } from "@/constants/formsValidations";
import { BranchEntityCreation, SiteEntity } from "@/types/models";
import InputField from "@/libraries/forms/components/InputField";
import SelectorField from "@/libraries/forms/components/SelectorField";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import { useGetAllSitesSettings } from "@/features/useSites";

const CreateBranchForm: React.FC = () => {
  const { mutateAsync } = useCreateBranchSettings();
  const { data: sitesData } = useGetAllSitesSettings();

  const sitesOptions = sitesData?.data?.map((site: SiteEntity) => ({
    key: site.name,
    value: site.id,
  })) || [];

  const onSubmit = async (
    values: BranchEntityCreation,
    helpers: FormikHelpers<BranchEntityCreation>
  ) => {
    await mutateAsync(values);
    helpers.resetForm();
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 text-right">
        <div className="flex gap-3 justify-start items-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GitBranch className="size-6" />
          </div>
          <div>
            <h1 className="font-rubik text-2xl font-bold text-text">إضافة فرع جديد</h1>
            <p className="text-sm text-muted-foreground">أضف فرعاً جديداً واربطه بموقعك الجغرافي المحدد</p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialBranchCreationValues}
        validationSchema={validationBranchModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex gap-3 items-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h2 className="font-rubik text-lg font-semibold text-text">تفاصيل الفرع والموقع</h2>
                  <p className="text-sm text-muted-foreground">أدخل اسم الفرع وحدد الموقع التابع له</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  required
                  type="text"
                  dir="rtl"
                  name="name"
                  label="اسم الفرع"
                  placeholder="مثال: فرع السليمانية"
                />

                <SelectorField
                  name="groupId"
                  label="الموقع التابع له"
                  options={sitesOptions}
                />

                <div className="lg:col-span-2">
                  <InputField
                    type="text"
                    dir="rtl"
                    name="location"
                    label="العنوان بالتفصيل"
                    placeholder="مثال: شارع الملك عبد العزيز، بجانب المكتبة الوطنية"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex gap-3 items-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h2 className="font-rubik text-lg font-semibold text-text">أرقام التواصل</h2>
                  <p className="text-sm text-muted-foreground">أرقام الهواتف الخاصة بالفرع</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  type="text"
                  dir="ltr"
                  name="phone"
                  label="رقم الجوال"
                  placeholder="05xxxxxxxx"
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="telephone"
                  label="رقم الهاتف الأرضي"
                  placeholder="011xxxxxxx"
                />
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex gap-3 items-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Share2 className="size-5" />
                </div>
                <div>
                  <h2 className="font-rubik text-lg font-semibold text-text">روابط التواصل الاجتماعي</h2>
                  <p className="text-sm text-muted-foreground">الحسابات الرسمية للفرع</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  type="text"
                  dir="ltr"
                  name="facebook"
                  label="رابط صفحة فيسبوك"
                  placeholder="https://facebook.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="instagram"
                  label="رابط حساب انستغرام"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </section>

            <div className="flex justify-end pt-2">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="حفظ الفرع الجديد"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBranchForm;