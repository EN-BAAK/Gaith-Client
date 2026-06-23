"use client"

import React, { Suspense } from "react"
import { useParams } from "next/navigation"
import { Formik, Form, FormikHelpers } from "formik"
import { ShieldCheck, Mail } from "lucide-react"
import SubmitButton from "@/libraries/forms/components/SubmitButton"
import { VerifyAccountProps } from "@/types/forms"
import { useResendVerificationCode, useVerifyAccount } from "@/features/useAuth"
import { verifyAccountInitialValues } from "@/constants/formsValues"
import { verifyAccountValidationSchema } from "@/constants/formsValidations"
import OtpInput from "@/libraries/forms/components/OtpField"

const VerifyAccountContent: React.FC = () => {
  const params = useParams();
  const email = decodeURIComponent(params.email as string);

  const { mutateAsync: verifyMutateAsync, isPending: verifyPending } = useVerifyAccount()
  const { mutateAsync: resendMutateAsync, isPending: resendPending } = useResendVerificationCode()

  const onSubmit = async (values: VerifyAccountProps, formik: FormikHelpers<VerifyAccountProps>) => {
    await verifyMutateAsync({ email, otp: values.otp, })
    formik.setSubmitting(false)
  }

  const resendCode = async () => {
    await resendMutateAsync(email)
  }

  const isPending = verifyPending || resendPending

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

        <div className="mb-8 text-center lg:text-right">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 mx-auto lg:margin-none text-accent">
            <ShieldCheck size={24} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            تأكيد الحساب الرسمي
          </h1>
          <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
            تم إرسال رمز التحقق (OTP) إلى بريدك الإلكتروني:
          </p>
          {email && (
            <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-input-background border border-border rounded-lg text-xs font-mono text-muted-foreground" dir="ltr">
              <Mail size={12} />
              {email}
            </div>
          )}
        </div>

        <Formik
          initialValues={verifyAccountInitialValues}
          validationSchema={verifyAccountValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="space-y-6 text-center">

              <div className="flex flex-col items-center justify-center" dir="ltr">
                <OtpInput
                  name="otp"
                  length={6}
                />
              </div>

              <div className="pt-2">
                <SubmitButton
                  isSubmitting={isSubmitting || isPending}
                  isDirty={dirty}
                  isValid={isValid}
                  variant="primary"
                  label="تأكيد وتفعيل الحساب"
                  submittingLabel="جاري التحقق من الرمز..."
                  disabledLabel="يرجى إدخال رمز التحقق كاملاً"
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          لم يصلك الرمز؟{" "}
          <button
            type="button"
            disabled={isPending}
            className="text-accent font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
            onClick={resendCode}
          >
            إعادة إرسال الرمز
          </button>
        </div>
      </div>
    </div>
  )
}

const VerifyAccountPage: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">جاري التحميل...</div>}>
      <VerifyAccountContent />
    </Suspense>
  )
}

export default VerifyAccountPage