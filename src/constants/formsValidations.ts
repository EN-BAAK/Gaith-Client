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

export const validationColorModifySchema = Yup.object({
  name: Yup.string()
    .matches(/^#[0-9A-Fa-f]{6}$/, "صيغة رمز اللون غير صالحة (مثال: #FFFFFF)")
    .required("يرجى اختيار أو كتابة رمز اللون (HEX)"),
});

export const validationSizeModifySchema = Yup.object({
  name: Yup.string()
    .min(1, "اسم المقاس لا يمكن أن يكون فارغاً")
    .max(20, "اسم المقاس طويل جداً")
    .required("يرجى إدخال اسم أو رمز المقاس"),
});

export const validationCategoryModifySchema = Yup.object({
  name: Yup.string()
    .min(2, "اسم الفئة يجب أن لا يقل عن حرفين")
    .max(50, "اسم الفئة طويل جداً")
    .required("يرجى إدخال اسم الفئة"),
});

export const validationBrandModifySchema = Yup.object({
  name: Yup.string()
    .min(2, "اسم الماركة يجب أن لا يقل عن حرفين")
    .max(50, "اسم الماركة طويل جداً")
    .required("يرجى إدخال اسم الماركة"),
});

export const validationSiteModifySchema = Yup.object({
  name: Yup.string()
    .min(2, "اسم الموقع يجب أن لا يقل عن حرفين")
    .max(50, "اسم الموقع طويل جداً")
    .required("يرجى إدخال اسم الموقع"),
});

export const validationBranchModifySchema = Yup.object({
  name: Yup.string()
    .min(2, "اسم الفرع يجب أن لا يقل عن حرفين")
    .max(50, "اسم الفرع طويل جداً")
    .required("يرجى إدخال اسم الفرع"),
  groupId: Yup.string()
    .required("يرجى اختيار الموقع التابع له هذا الفرع"),
  location: Yup.string().optional(),
  facebook: Yup.string().url("رابط فيسبوك غير صالح").optional(),
  instagram: Yup.string().url("رابط انستغرام غير صالح").optional(),
  phone: Yup.string().optional(),
  telephone: Yup.string().optional(),
});

export const validationProductModifySchema = Yup.object({
  title: Yup.string()
    .min(3, "عنوان المنتج قصير جداً")
    .max(100, "عنوان المنتج طويل جداً")
    .required("يرجى إدخال عنوان المنتج"),
  retailPrice: Yup.number()
    .positive("يجب أن يكون سعر المفرق أكبر من صفر")
    .required("يرجى إدخال سعر المفرق"),
  wholesalePrice: Yup.number()
    .positive("يجب أن يكون سعر الجملة أكبر من صفر")
    .required("يرجى إدخال سعر الجملة"),
  summarize: Yup.string()
    .min(10, "الوصف المختصر يجب أن لا يقل عن 10 أحرف")
    .required("يرجى إدخال وصف مختصر للمنتج"),
  description: Yup.string()
    .min(20, "الوصف الكامل يجب أن لا يقل عن 20 حرفاً")
    .required("يرجى إدخال الوصف الكامل للمنتج"),
  categoryId: Yup.string()
    .required("يرجى اختيار فئة المنتج"),
  brandId: Yup.string()
    .required("يرجى اختيار الماركة التجارية"),
  colors: Yup.array().of(
    Yup.object({
      id: Yup.string().required(),
      state: Yup.string().oneOf(["old", "new", "remove"]).required(),
    })
  ),
  sizes: Yup.array().of(
    Yup.object({
      id: Yup.string().required(),
      state: Yup.string().oneOf(["old", "new", "remove"]).required(),
    })
  ),
});

export const validationContactSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "الاسم الكامل يجب أن لا يقل عن 3 أحرف")
    .max(60, "الاسم طويل جداً")
    .required("يرجى إدخال الاسم الكامل"),
  phone: Yup.string()
    .required("يرجى إدخال رقم الهاتف"),
  email: Yup.string()
    .email("صيغة البريد الإلكتروني غير صحيحة")
    .optional(),
  message: Yup.string()
    .min(10, "الرسالة يجب أن لا تقل عن 10 أحرف")
    .required("يرجى كتابة نص الرسالة"),
});