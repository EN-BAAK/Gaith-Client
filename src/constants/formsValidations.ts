import * as Yup from "yup"

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني المدخل غير صالح")
    .required("يرجى إدخال البريد الإلكتروني الحساب الرسمي"),
  password: Yup.string()
    .min(6, "كلمة المرور يجب أن لا تقل عن 6 خانات")
    .required("يرجى إدخال كلمة المرور السريّة"),
});

export const signupValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "الاسم يجب أن لا يقل عن 3 أحرف")
    .required("يرجى إدخال الاسم الكامل أو اسم الشركة"),
  email: Yup.string()
    .email("البريد الإلكتروني المدخل غير صالح")
    .required("يرجى إدخال البريد الإلكتروني الحساب الرسمي"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط")
    .min(9, "رقم الهاتف غير مكتمل")
    .required("يرجى إدخال رقم الهاتف للتواصل عبر WhatsApp"),
  password: Yup.string()
    .min(6, "كلمة المرور يجب أن لا تقل عن 6 خانات")
    .required("يرجى تعيين كلمة مرور قوية"),
});

export const verifyAccountValidationSchema = Yup.object({
  otp: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "يجب أن يتكون الرمز من أحرف وأرقام فقط")
    .length(6, "يرجى إدخال رمز التحقق كاملاً (6 أرقام)")
    .required("رمز التحقق مطلوب لمتابعة التفعيل"),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني المدخل غير صالح")
    .required("يرجى إدخال البريد الإلكتروني لإرسال رمز التحقق"),
});

export const resetPasswordValidationSchema = Yup.object({
  otp: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "يجب أن يتكون الرمز من أحرف وأرقام فقط")
    .length(6, "يرجى إدخال رمز التحقق كاملاً (6 أحرف/أرقام)")
    .required("رمز التحقق مطلوب لإعادة التعيين"),
  password: Yup.string()
    .min(6, "كلمة المرور الجديدة يجب أن لا تقل عن 6 خانات")
    .required("يرجى إدخال كلمة المرور الجديدة"),
});