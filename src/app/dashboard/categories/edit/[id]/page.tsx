"use client";

import { Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { FolderPlus, Grid } from "lucide-react";
import { validationCategoryModifySchema } from "@/constants/formsValidations";
import { CategoryEntity } from "@/types/models";
import EmptyContent from "@/app/dashboard/EmptyContent";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import InputField from "@/libraries/forms/components/InputField";
import LoadingPage from "@/components/LoadingPage";
import { useGetCategoryById, useUpdateCategory } from "@/features/useCategories";
import IconSelectionField from "@/libraries/forms/components/IconSelectionField";

const EditCategoryForm: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const { mutateAsync } = useUpdateCategory();
  const { data, isFetching } = useGetCategoryById(id.toString());

  const categoryData = data?.data;

  const handleGoBack = () => router.back();

  const onSubmit = async (values: CategoryEntity) => {
    const { id, ...data } = values;
    await mutateAsync({
      id,
      data,
    });
  };

  if (isFetching) {
    return <LoadingPage />;
  }

  if (!categoryData) {
    return (
      <EmptyContent
        title="مشكلة مفاجئة"
        desc="عذراً، هذه الفئة غير موجودة أو تم حذفها"
        buttonTitle="العودة"
        buttonAction={handleGoBack}
      />
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center gap-3 text-right">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <FolderPlus className="size-6" />
        </div>
        <div>
          <h1 className="font-rubik text-2xl font-bold text-text">تعديل بيانات الفئة</h1>
          <p className="text-sm text-muted-foreground">تعديل مسميات الفئات المدخلة مسبقاً</p>
        </div>
      </div>

      <Formik
        enableReinitialize
        initialValues={categoryData}
        validationSchema={validationCategoryModifySchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-8 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Grid className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">تحديث الفئة</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-end">
                <InputField
                  name="name"
                  type="text"
                  dir="rtl"
                  label="اسم الفئة الحالي"
                  placeholder="أدخل اسم الفئة"
                />

                <IconSelectionField
                  name="icon"
                  label="رمز الفئة"
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

export default EditCategoryForm;