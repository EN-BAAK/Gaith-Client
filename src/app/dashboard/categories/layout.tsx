import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة التصنيفات والخامات | لوحة التحكم",

  description:
    "قسم إدارة تصنيفات المنتجات وأنواع الخامات والأقمشة في منصة الغيث. إضافة وتعديل مجموعات الأقمشة الفاخرة مثل الحرير، الساتان، القطن، الصوف، وغيرها، لتنظيم تصفح المنتجات لعملاء الجملة والمفرق.",

  keywords: [
    // العربية
    "إدارة التصنيفات",
    "خامات الأقمشة",
    "أقمشة حرير",
    "أقمشة ساتان",
    "أنواع المنسوجات",
    "تصنيف المنتجات",
    "خامات الأزياء الفاخرة",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Category Management",
    "Fabric Materials",
    "Silk Fabrics",
    "Satin Fabrics",
    "Textile Types",
    "Product Categorization",
    "Premium Fashion Materials",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة التصنيفات والخامات | لوحة التحكم",
    description:
      "قسم إدارة تصنيفات المنتجات وأنواع الخامات والأقمشة في منصة الغيث. إضافة وتعديل مجموعات الأقمشة الفاخرة مثل الحرير، الساتان، القطن، الصوف، وغيرها، لتنظيم تصفح المنتجات لعملاء الجملة والمفرق.",
    url: "https://alghaith-fabrics.com/dashboard/categories",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة تصنيفات الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة التصنيفات والخامات | لوحة التحكم",
    description:
      "قسم إدارة تصنيفات المنتجات وأنواع الخامات والأقمشة في منصة الغيث. إضافة وتعديل مجموعات الأقمشة الفاخرة مثل الحرير، الساتان، القطن، الصوف، وغيرها، لتنظيم تصفح المنتجات لعملاء الجملة والمفرق.",
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

const DashboardCategoriesLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardCategoriesLayout;