"use client";

import React from 'react';
import { Form, Formik, FormikHelpers } from "formik";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import ArabicPattern from '@/components/ArabicPattern';
import CustomButton from '@/libraries/forms/components/Button';
import InputField from "@/libraries/forms/components/InputField";
import TextAreaField from "@/libraries/forms/components/TextAreaField";
import { useSendContactMessage } from "@/features/useContact";
import { initialContactValues } from "@/constants/formsValues";
import { validationContactSchema } from "@/constants/formsValidations";
import { ContactInput } from '@/types/forms';

const Contact: React.FC = () => {
  const { mutateAsync } = useSendContactMessage();

  const onSubmit = async (values: ContactInput, helpers: FormikHelpers<ContactInput>) => {
    await mutateAsync(values);
    helpers.resetForm();
  };

  return (
    <section className="py-24 bg-background2 relative overflow-hidden">
      <ArabicPattern
        id="contact-pat"
        color="#B08D57"
        opacity={0.05}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="bg-card h-fit border border-border/50 rounded-2xl p-8 shadow-sm">
            <div className="text-accent text-sm font-medium mb-2 tracking-widest text-right">
              تواصل معنا
            </div>
            <h2
              className="text-3xl font-bold text-foreground mb-6 text-right"
              style={{
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              أرسل لنا رسالة
            </h2>

            <Formik
              initialValues={initialContactValues}
              validationSchema={validationContactSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 text-right">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      required
                      type="text"
                      dir="rtl"
                      name="fullName"
                      label="الاسم الكامل"
                      placeholder="محمد الأحمد"
                      Icon={<User className="size-4" />}
                    />
                    <InputField
                      required
                      type='number'
                      dir="ltr"
                      name="phone"
                      label="رقم الهاتف"
                      placeholder="+963 9X XXX XXXX"
                      Icon={<Phone className="size-4" />}
                    />
                  </div>

                  <InputField
                    type="email"
                    dir="ltr"
                    name="email"
                    label="البريد الإلكتروني (اختياري)"
                    placeholder="example@email.com"
                    Icon={<Mail className="size-4" />}
                  />

                  <TextAreaField
                    required
                    dir='rtl'
                    name="message"
                    label="الرسالة"
                    placeholder="أكتب رسالتك هنا..."
                  />

                  <CustomButton
                    type="submit"
                    disabled={isSubmitting}
                    label={isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    icon={Send}
                  />
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col justify-center gap-8 text-right">
            <div>
              <div className="text-accent text-sm font-medium mb-2 tracking-widest">
                معلومات التواصل
              </div>
              <h2
                className="text-3xl font-bold text-foreground mb-4"
                style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                نحن هنا لمساعدتك
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                فريقنا متاح من السبت إلى الخميس من الساعة ٩
                صباحاً حتى ٧ مساءً. لا تتردد في التواصل معنا
                بأي طريقة تفضلها.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  Icon: Phone,
                  label: "اتصل بنا",
                  value: "+963 *** *** ***",
                  color: "#2E7D5B",
                },
                {
                  Icon: MessageCircle,
                  label: "واتساب",
                  value: "+963 *** *** ***",
                  color: "#25D366",
                },
                {
                  Icon: Mail,
                  label: "البريد الإلكتروني",
                  value: "info@al-gaith.com",
                  color: "#B08D57",
                },
                {
                  Icon: MapPin,
                  label: "العنوان",
                  value: "دمشق، شارع الشعلان، بجانب مجمع أبو رمانة",
                  color: "#B42318",
                },
              ].map(({ Icon, label, value, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 bg-card border border-border/50 rounded-xl p-4"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {label}
                    </div>
                    <div dir={label === "العنوان" ? "rtl" : "ltr"} className="text-sm font-medium text-foreground">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-4 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <BsWhatsapp size={20} />
              تواصل عبر واتساب الآن
            </a>

            <div className="flex gap-3 justify-start">
              {[Facebook, Instagram, BsWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-card border border-border/60 hover:border-accent hover:text-accent rounded-full flex items-center justify-center transition-colors text-muted-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;