"use client"

import React from "react"
import Link from "next/link"
import { Formik, Form, FormikHelpers } from "formik"
import { Mail, Lock, User, Phone } from "lucide-react"
import InputField from "@/libraries/forms/components/InputField"
import SubmitButton from "@/libraries/forms/components/SubmitButton"
import { SignupProps } from "@/types/forms"
import { useRegister } from "@/features/useAuth"
import { signupInitialValues } from "@/constants/formsValues"
import { signupValidationSchema } from "@/constants/formsValidations"

const SignupPage: React.FC = () => {
  const { mutateAsync, isPending } = useRegister()

  const onSubmit = async (values: SignupProps, formik: FormikHelpers<SignupProps>) => {
    await mutateAsync(values)
    formik.setSubmitting(false)
  }

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
      <div className="w-full max-w-md">

        {/* الشعار للشاشات الصغيرة */}
        <div className="flex lg:hidden items-center justify-center gap-2.5 mb-8">
          <span className="text-2xl font-bold text-foreground brand">
            منصة الغيث
          </span>
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-accent font-bold brand">غ</span>
          </div>
        </div>

        <div className="mb-8 text-right">
          <h1 className="text-2xl font-bold text-foreground">
            إنشاء حساب جديد
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            انضم إلى منصة الغيث واستمتع بتجربة تسوق أزياء فاخرة
          </p>
        </div>

        <Formik
          initialValues={signupInitialValues}
          validationSchema={signupValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="space-y-4 text-right">

              {/* الاسم الكامل */}
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  الاسم الكامل / اسم الشركة
                </label>
                <InputField
                  name="name"
                  type="text"
                  dir="rtl"
                  placeholder="أدخل الاسم الثلاثي أو التجاري"
                  Icon={<User size={15} />}
                  innerDivStyle="relative"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  البريد الإلكتروني
                </label>
                <InputField
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  Icon={<Mail size={15} />}
                  dir="ltr"
                  innerDivStyle="relative"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  رقم الهاتف (WhatsApp)
                </label>
                <InputField
                  name="phone"
                  type="text"
                  placeholder="09xxxxxxxx"
                  Icon={<Phone size={15} />}
                  dir="ltr"
                  innerDivStyle="relative"
                />
              </div>

              {/* كلمة المرور */}
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground">
                  كلمة المرور
                </label>
                <InputField
                  name="password"
                  type="password"
                  autoComplete="off"
                  placeholder="••••••••"
                  Icon={<Lock size={15} />}
                  dir="ltr"
                  innerDivStyle="relative"
                />
              </div>

              <div className="pt-2">
                <SubmitButton
                  isSubmitting={isSubmitting || isPending}
                  isDirty={dirty}
                  isValid={isValid}
                  variant="primary"
                  label="إنشاء الحساب ومتابعة التفعيل"
                  submittingLabel="جاري تسجيل البيانات..."
                  disabledLabel="يرجى ملء البيانات بشكل صحيح"
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          لديك حساب بالفعل؟{" "}
          <Link
            href="/login"
            className="text-accent font-semibold hover:underline mr-1"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage