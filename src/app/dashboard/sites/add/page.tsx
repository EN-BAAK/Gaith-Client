"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { Globe, MapPin } from "lucide-react";
import { useCreateSiteSettings } from "@/features/useSites";
import { initialSiteCreationValues } from "@/constants/formsValues";
import { validationSiteModifySchema } from "@/constants/formsValidations";
import { SiteEntityCreation } from "@/types/models";
import InputField from "@/libraries/forms/components/InputField";
import SubmitButton from "@/libraries/forms/components/SubmitButton";

const CreateSiteForm: React.FC = () => {
  const { mutateAsync } = useCreateSiteSettings();

  const onSubmit = async (
    values: SiteEntityCreation,
    helpers: FormikHelpers<SiteEntityCreation>
  ) => {
    await mutateAsync(values);
    helpers.resetForm();
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 text-right">
        <div className="flex gap-3 justify-start items-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Globe className="size-6" />
          </div>
          <div>
            <h1 className="font-rubik text-2xl font-bold text-text">إضافة موقع جديد</h1>
            <p className="text-sm text-muted-foreground">أضف فرعاً أو موقعاً جديداً لمنظومة العمل بالمتجر</p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialSiteCreationValues}
        validationSchema={validationSiteModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex gap-3 items-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h2 className="font-rubik text-lg font-semibold text-text">تفاصيل الموقع</h2>
                  <p className="text-sm text-muted-foreground">أدخل الاسم التعريفي للموقع الجغرافي أو الفرع</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-end">
                <InputField
                  required
                  type="text"
                  dir="rtl"
                  name="name"
                  label="اسم الموقع / الفرع"
                  placeholder="مثال: المستودع الرئيسي، فرع الرياض"
                />
              </div>
            </section>

            <div className="flex justify-end pt-2">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="حفظ الموقع الجديد"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateSiteForm;