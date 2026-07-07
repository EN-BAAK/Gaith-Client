import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إعدادات النظام | لوحة التحكم",

  description:
    "قسم الإعدادات العامة لمنصة الغيث للأقمشة. تهيئة إعدادات المتجر الأساسية، إدارة طرق الدفع والشحن، التحكم في تفعيل بوابات الربط المستقبلية مثل WhatsApp، وإعداد معايير الأمان للنظام.",

  keywords: [
    // العربية
    "إعدادات لوحة التحكم",
    "تخصيص متجر الغيث",
    "إعدادات الشحن والدفع",
    "ربط الواتساب وتساب",
    "أمان النظام والصلاحيات",
    "تحديث بيانات المتجر",
    "تهيئة منصة B2B",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "System Settings",
    "Admin Configuration",
    "Store Settings",
    "Payment & Shipping Setup",
    "WhatsApp Integration Setup",
    "Security Settings",
    "B2B Platform Configuration",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إعدادات النظام | لوحة التحكم",
    description:
      "قسم الإعدادات العامة لمنصة الغيث للأقمشة. تهيئة إعدادات المتجر الأساسية، إدارة طرق الدفع والشحن، التحكم في تفعيل بوابات الربط المستقبلية مثل WhatsApp، وإعداد معايير الأمان للنظام.",
    url: "https://alghaith-fabrics.com/dashboard/settings",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إعدادات لوحة تحكم الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إعدادات النظام | لوحة التحكم",
    description:
      "قسم الإعدادات العامة لمنصة الغيث للأقمشة. تهيئة إعدادات المتجر الأساسية، إدارة طرق الدفع والشحن، التحكم في تفعيل بوابات الربط المستقبلية مثل WhatsApp، وإعداد معايير الأمان للنظام.",
    images: ["/favicon.ico"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: false,
    follow: false,
  },
};

const DashboardSettingsLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardSettingsLayout;