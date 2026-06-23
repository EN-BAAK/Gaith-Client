import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إنشاء حساب جديد | الغيث للأقمشة الفاخرة",

  description:
    "انضم إلى منصة الغيث للأقمشة كتاجر جملة أو عميل مفرق. أنشئ حسابك الآن لتبدأ بتصفح أرقى أنواع الأقمشة وخامات الموضة، والحصول على تسعير ديناميكي مخصص ومزايا حصرية للموردين.",

  keywords: [
    // العربية
    "الغيث للأقمشة",
    "إنشاء حساب الغيث",
    "تسجيل حساب جديد",
    "تسجيل تاجر جملة",
    "شراء أقمشة مفرق",
    "منصة B2B للموضة",
    "موردين ملابس وأقمشة",
    "فتح حساب تجاري",
    "انضمام لشركاء الغيث",

    // English
    "Al-Ghaith Fabrics",
    "Signup",
    "Create Account",
    "Wholesale Registration",
    "B2B Account",
    "Join Fashion Platform",
    "Premium Textiles Registration",
  ],

  openGraph: {
    title: "إنشاء حساب جديد | الغيث للأقمشة",
    description:
      "انضم إلى منصة الغيث للأقمشة كتاجر جملة أو عميل مفرق. أنشئ حسابك الآن لتبدأ بتصفح أرقى أنواع الأقمشة وخامات الموضة، والحصول على تسعير ديناميكي مخصص ومزايا حصرية للموردين.",
    url: "https://alghaith-fabrics.com/signup",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إنشاء حساب جديد في الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إنشاء حساب جديد | الغيث للأقمشة",
    description:
      "انضم إلى منصة الغيث للأقمشة كتاجر جملة أو عميل مفرق. أنشئ حسابك الآن لتبدأ بتصفح أرقى أنواع الأقمشة وخامات الموضة، والحصول على تسعير ديناميكي مخصص ومزايا حصرية للموردين.",
    images: ["/favicon.ico"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SignupLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default SignupLayout;