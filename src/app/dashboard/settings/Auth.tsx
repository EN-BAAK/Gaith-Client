"use client";

import { Form, Formik, FormikHelpers } from "formik";
import { Lock, ShieldCheck } from "lucide-react";
import { useChangePassword } from "@/features/useAuth";
import { initialPasswordValues } from "@/constants/formsValues";
import { validationPasswordSchema } from "@/constants/formsValidations";
import InputField from "@/libraries/forms/components/InputField";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import { ResetPasswordProps } from "@/types/forms";

const UpdatePassword: React.FC = () => {
  const { mutateAsync } = useChangePassword();

  const onSubmit = async (values: ResetPasswordProps, helpers: FormikHelpers<ResetPasswordProps>) => {
    await mutateAsync({
      password: values.password,
      newPassword: values.newPassword,
    });
    helpers.resetForm();
  };

  return (
    <div>
      <div className="mb-8 flex items-center gap-3 text-right">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="size-6" />
        </div>
        <div>
          <h1 className="font-rubik text-2xl font-bold text-text">تعديل كلمة المرور</h1>
          <p className="text-sm text-muted-foreground">تحديث كلمة المرور الخاصة بحسابك لحماية أمان النظام</p>
        </div>
      </div>

      <Formik
        initialValues={initialPasswordValues}
        validationSchema={validationPasswordSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-6 text-right">
            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                <div className="lg:col-span-2">
                  <InputField
                    required
                    type="password"
                    dir="ltr"
                    name="password"
                    label="كلمة المرور الحالية"
                    placeholder="••••••••"
                    Icon={<Lock className="size-4" />}
                  />
                </div>

                <InputField
                  required
                  type="password"
                  dir="ltr"
                  name="newPassword"
                  label="كلمة المرور الجديدة"
                  placeholder="••••••••"
                  Icon={<Lock className="size-4" />}
                />

                <InputField
                  required
                  type="password"
                  dir="ltr"
                  name="confirmPassword"
                  label="تأكيد كلمة المرور الجديدة"
                  placeholder="••••••••"
                  Icon={<Lock className="size-4" />}
                />

              </div>
            </section>

            <div className="flex justify-end">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="تحديث كلمة المرور"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePassword;