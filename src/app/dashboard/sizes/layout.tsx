import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة المقاسات والأبعاد | لوحة التحكم",

  description:
    "قسم إدارة المقاسات والأبعاد الخاصة بالأقمشة والملابس في منصة الغيث. إضافة وتحديث مقاسات الموضة القياسية (SM, MD, XL) والمقاسات الموحدة (Uni) لتسهيل تصفية المنتجات وإدارة المخزون بدقة.",

  keywords: [
    // العربية
    "إدارة المقاسات",
    "مقاسات الملابس",
    "أبعاد الأقمشة",
    "مقاس موحد Uni",
    "جدول المقاسات",
    "تصفية المنتجات بالمقاس",
    "كتالوج مقاسات الأزياء",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Size Management",
    "Clothing Sizes",
    "Fabric Dimensions",
    "Universal Size Uni",
    "Size Chart Admin",
    "Product Size Filter",
    "Fashion Sizes Catalog",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة المقاسات والأبعاد | لوحة التحكم",
    description:
      "قسم إدارة المقاسات والأبعاد الخاصة بالأقمشة والملابس في منصة الغيث. إضافة وتحديث مقاسات الموضة القياسية (SM, MD, XL) والمقاسات الموحدة (Uni) لتسهيل تصفية المنتجات وإدارة المخزون بدقة.",
    url: "https://alghaith-fabrics.com/dashboard/sizes",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة مقاسات الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة المقاسات والأبعاد | لوحة التحكم",
    description:
      "قسم إدارة المقاسات والأبعاد الخاصة بالأقمشة والملابس في منصة الغيث. إضافة وتحديث مقاسات الموضة القياسية (SM, MD, XL) والمقاسات الموحدة (Uni) لتسهيل تصفية المنتجات وإدارة المخزون بدقة.",
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

const DashboardSizesLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardSizesLayout;