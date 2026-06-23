import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة المنتجات والأقمشة | لوحة التحكم",

  description:
    "قسم إدارة المنتجات والمخزون لمنصة الغيث للأقمشة. إضافة وتعديل الأقمشة، تحديد الخامات، الألوان، المقاسات، وإدارة أسعار المفرق وأسعار الجملة الديناميكية.",

  keywords: [
    // العربية
    "إدارة المنتجات",
    "إدارة مخزون الأقمشة",
    "إضافة قماش جديد",
    "تحديث الأسعار",
    "أسعار الجملة والمفرق",
    "تصنيفات الأقمشة",
    "ألوان ومقاسات الأزياء",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Product Management",
    "Inventory Admin",
    "Fabric Catalog",
    "Wholesale Pricing Pricing",
    "Retail Pricing",
    "Fabric Variants",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة المنتجات والأقمشة | لوحة التحكم",
    description:
      "قسم إدارة المنتجات والمخزون لمنصة الغيث للأقمشة. إضافة وتعديل الأقمشة، تحديد الخامات، الألوان، المقاسات، وإدارة أسعار المفرق وأسعار الجملة الديناميكية.",
    url: "https://alghaith-fabrics.com/dashboard/products",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة منتجات الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة المنتجات والأقمشة | لوحة التحكم",
    description:
      "قسم إدارة المنتجات والمخزون لمنصة الغيث للأقمشة. إضافة وتعديل الأقمشة، تحديد الخامات، الألوان، المقاسات، وإدارة أسعار المفرق وأسعار الجملة الديناميكية.",
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

const DashboardProductsLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardProductsLayout;