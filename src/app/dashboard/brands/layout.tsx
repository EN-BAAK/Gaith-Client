import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة العلامات التجارية | لوحة التحكم",

  description:
    "قسم إدارة الماركات، دور الأزياء، والمصانع الموردة للأقمشة في منصة الغيث. إضافة وتحديث شركاء التوريد لتسهيل فرز المنسوجات الفاخرة بناءً على العلامة التجارية لعملاء الجملة والمفرق.",

  keywords: [
    // العربية
    "إدارة العلامات التجارية",
    "براندات الأقمشة",
    "مصانع الأزياء",
    "موردي المنسوجات",
    "دور الأزياء الفاخرة",
    "تصفية المنتجات بالماركة",
    "شركاء الغيث للأقمشة",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Brand Management",
    "Fabric Brands",
    "Fashion Factories",
    "Textile Suppliers",
    "Luxury Fashion Houses",
    "Product Brand Filter",
    "Al-Ghaith Fabrics Partners",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة العلامات التجارية | لوحة التحكم",
    description:
      "قسم إدارة الماركات، دور الأزياء، والمصانع الموردة للأقمشة في منصة الغيث. إضافة وتحديث شركاء التوريد لتسهيل فرز المنسوجات الفاخرة بناءً على العلامة التجارية لعملاء الجملة والمفرق.",
    url: "https://alghaith-fabrics.com/dashboard/brands",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة علامات الغيث للأقمشة الفاخرة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة العلامات التجارية | لوحة التحكم",
    description:
      "قسم إدارة الماركات، دور الأزياء، والمصانع الموردة للأقمشة في منصة الغيث. إضافة وتحديث شركاء التوريد لتسهيل فرز المنسوجات الفاخرة بناءً على العلامة التجارية لعملاء الجملة والمفرق.",
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

const DashboardBrandsLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardBrandsLayout;