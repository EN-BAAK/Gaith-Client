import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة الطلبات والمبيعات | لوحة التحكم",

  description:
    "قسم إدارة وتتبع طلبات عملاء الجملة والمفرق في منصة الغيث للأقمشة. تابع حالات الطلبات من قيد الانتظار، تم التأكيد، جاري التجهيز، وحتى الاكتمال أو الإلغاء، مع تحديث فوري للمخزون.",

  keywords: [
    // العربية
    "إدارة الطلبات",
    "تتبع شحنات الأقمشة",
    "طلبات الجملة",
    "طلبات المفرق",
    "حالات الطلب الغيث",
    "فواتير المبيعات",
    "تحديث المخزون التلقائي",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Order Management",
    "Order Tracking",
    "Wholesale Orders",
    "Retail Orders",
    "Order Status Admin",
    "Sales Invoices",
    "Inventory Auto-Update",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة الطلبات والمبيعات | لوحة التحكم",
    description:
      "قسم إدارة وتتبع طلبات عملاء الجملة والمفرق في منصة الغيث للأقمشة. تابع حالات الطلبات من قيد الانتظار، تم التأكيد، جاري التجهيز، وحتى الاكتمال أو الإلغاء، مع تحديث فوري للمخزون.",
    url: "https://alghaith-fabrics.com/dashboard/orders",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة طلبات منصة الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة الطلبات والمبيعات | لوحة التحكم",
    description:
      "قسم إدارة وتتبع طلبات عملاء الجملة والمفرق في منصة الغيث للأقمشة. تابع حالات الطلبات من قيد الانتظار، تم التأكيد، جاري التجهيز، وحتى الاكتمال أو الإلغاء، مع تحديث فوري للمخزون.",
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

const DashboardOrdersLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardOrdersLayout;