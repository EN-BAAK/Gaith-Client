"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { FolderPlus, Grid } from "lucide-react";
import { initialCategoryCreationValues } from "@/constants/formsValues";
import { validationCategoryModifySchema } from "@/constants/formsValidations";
import { CategoryEntityCreation } from "@/types/models";
import InputField from "@/libraries/forms/components/InputField";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import { useCreateCategory } from "@/features/useCategories";
import IconSelectionField from "@/libraries/forms/components/IconSelectionField";

const CreateCategoryForm: React.FC = () => {
  const { mutateAsync } = useCreateCategory();

  const onSubmit = async (
    values: CategoryEntityCreation,
    helpers: FormikHelpers<CategoryEntityCreation>
  ) => {
    await mutateAsync(values);
    helpers.resetForm();
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 text-right">
        <div className="flex gap-3 justify-start items-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <FolderPlus className="size-6" />
          </div>
          <div>
            <h1 className="font-rubik text-2xl font-bold text-text">إضافة فئة جديدة</h1>
            <p className="text-sm text-muted-foreground">أضف تصنيفاً جديداً لتنظيم المنتجات داخل المتجر</p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialCategoryCreationValues}
        validationSchema={validationCategoryModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex gap-3 items-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Grid className="size-5" />
                </div>
                <div>
                  <h2 className="font-rubik text-lg font-semibold text-text">تفاصيل الفئة</h2>
                  <p className="text-sm text-muted-foreground">أدخل الاسم العام للفئة التجارية</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-start">
                <InputField
                  required
                  type="text"
                  dir="rtl"
                  name="name"
                  label="اسم الفئة"
                  placeholder="مثال: فساتين، عباءات، أقمشة رجالية"
                />

                <IconSelectionField
                  name="icon"
                  label="رمز الفئة"
                />
              </div>
            </section>

            <div className="flex justify-end pt-2">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="حفظ الفئة الجديدة"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCategoryForm;