import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة الألوان والدرجات | لوحة التحكم",

  description:
    "قسم إدارة مصفوفة الألوان والدرجات الخاصة بالأقمشة والمنسوجات في منصة الغيث. إضافة رموز الألوان (HEX Codes) وتحديث المسميات لتسهيل تجربة التصفح والتصفية لعملاء الجملة والمفرق.",

  keywords: [
    // العربية
    "إدارة الألوان",
    "ألوان الأقمشة",
    "درجات المنسوجات",
    "تصفية المنتجات باللون",
    "رموز الألوان HEX",
    "كتالوج ألوان الأزياء",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Color Management",
    "Fabric Colors",
    "Textile Shades",
    "Product Color Filter",
    "HEX Color Codes",
    "Fashion Color Catalog",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة الألوان والدرجات | لوحة التحكم",
    description:
      "قسم إدارة مصفوفة الألوان والدرجات الخاصة بالأقمشة والمنسوجات في منصة الغيث. إضافة رموز الألوان (HEX Codes) وتحديث المسميات لتسهيل تجربة التصفح والتصفية لعملاء الجملة والمفرق.",
    url: "https://alghaith-fabrics.com/dashboard/colors",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة ألوان الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة الألوان والدرجات | لوحة التحكم",
    description:
      "قسم إدارة مصفوفة الألوان والدرجات الخاصة بالأقمشة والمنسوجات في منصة الغيث. إضافة رموز الألوان (HEX Codes) وتحديث المسميات لتسهيل تجربة التصفح والتصفية لعملاء الجملة والمفرق.",
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

const DashboardColorsLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardColorsLayout;