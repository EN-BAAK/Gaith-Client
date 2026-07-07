"use client";

import { Form, Formik } from "formik";
import { Settings, Info, Share2, Mail } from "lucide-react";
import { validationSystemSettingsSchema } from "@/constants/formsValidations";
import InputField from "@/libraries/forms/components/InputField";
import SubmitButton from "@/libraries/forms/components/SubmitButton";
import LoadingPage from "@/components/LoadingPage";
import { useGetSystemSettings, useUpdateSystemSettings } from "@/features/useSettings";
import { SystemSettingsEntity } from "@/types/models";
import TextAreaField from "@/libraries/forms/components/TextAreaField";

const SystemSettingsForm: React.FC = () => {
  const { mutateAsync } = useUpdateSystemSettings();
  const { data, isFetching } = useGetSystemSettings();

  const systemData = data?.data;

  const onSubmit = async (values: SystemSettingsEntity) => {
    await mutateAsync(values);
  };

  if (isFetching) {
    return <LoadingPage />;
  }

  if (!systemData) return;

  return (
    <div>
      <div className="mb-8 flex items-center gap-3 text-right">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Settings className="size-6" />
        </div>
        <div>
          <h1 className="font-rubik text-2xl font-bold text-text">إعدادات النظام</h1>
          <p className="text-sm text-muted-foreground">إدارة البيانات الأساسية، معلومات التواصل، وروابط التواصل الاجتماعي</p>
        </div>
      </div>

      <Formik
        enableReinitialize
        initialValues={systemData}
        validationSchema={validationSystemSettingsSchema}
        onSubmit={onSubmit}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="space-y-6 text-right">

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">معلومات التواصل الأساسية</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  required
                  type="email"
                  dir="ltr"
                  name="supportEmail"
                  label="بريد الدعم الفني"
                  placeholder="support@example.com"
                />

                <InputField
                  required
                  type="text"
                  dir="ltr"
                  name="phone"
                  label="رقم الهاتف"
                  placeholder="+963..."
                />

                <InputField
                  required
                  type="text"
                  dir="ltr"
                  name="whatsapp"
                  label="رقم الواتساب"
                  placeholder="+963..."
                />

                <InputField
                  required
                  type="text"
                  dir="rtl"
                  name="location"
                  label="الموقع الجغرافي الرئيسي"
                  placeholder="أدخل العنوان الحالي"
                />
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Info className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">النصوص التعريفية (Subtitles)</h2>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <TextAreaField
                  required
                  dir="rtl"
                  name="aboutSubtitle"
                  label="الوصف الفرعي لصفحة (من نحن)"
                  placeholder="أدخل نصاً تعريفياً قصيراً..."
                />

                <TextAreaField
                  required
                  dir="rtl"
                  name="contactSubtitle"
                  label="الوصف الفرعي لصفحة (اتصل بنا)"
                  placeholder="أدخل نصاً توجيهياً للتواصل..."
                />
              </div>
            </section>

            <section className="space-y-5 rounded-2xl border border-border bg-background2 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <Share2 className="size-5 text-primary" />
                <h2 className="font-rubik text-lg font-semibold text-text">منصات التواصل الاجتماعي</h2>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <InputField
                  type="text"
                  dir="ltr"
                  name="facebook"
                  label="رابط فيسبوك"
                  placeholder="https://facebook.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="instagram"
                  label="رابط انستغرام"
                  placeholder="https://instagram.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="youtube"
                  label="رابط يوتيوب"
                  placeholder="https://youtube.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="linkedIn"
                  label="رابط لينكد إن"
                  placeholder="https://linkedin.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="twitter"
                  label="رابط تويتر (X)"
                  placeholder="https://x.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="tiktok"
                  label="رابط تيك توك"
                  placeholder="https://tiktok.com/..."
                />

                <InputField
                  type="text"
                  dir="ltr"
                  name="whatsappLink"
                  label="رابط واتساب للتواصل"
                  placeholder="https://wa.me/..."
                />
              </div>
            </section>

            <div className="flex justify-end">
              <SubmitButton
                isDirty={dirty}
                isSubmitting={isSubmitting}
                isValid={isValid}
                label="حفظ التغييرات الإدارية"
              />
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SystemSettingsForm;