import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";
import React from "react";
import DashboardLayoutClient from "./DashboardLayoutClient";

export const metadata: Metadata = {
  title: "لوحة التحكم | الغيث للأقمشة الفاخرة",

  description:
    "لوحة التحكم المركزية لمنصة الغيث للأقمشة. تابع إحصائيات المبيعات، الطلبات الحالية، إدارة المنتجات والمخزون، الموافقة على حسابات الجملة، وتحليل اتجاهات السوق والموضة.",

  keywords: [
    // العربية
    "الغيث للأقمشة",
    "لوحة التحكم الغيث",
    "إدارة المبيعات",
    "إدارة مخزون الأقمشة",
    "الموافقة على طلبات الجملة",
    "إحصائيات الموردين",
    "تتبع الطلبات B2B",
    "نظام إدارة التجارة الإلكترونية",

    // English
    "Al-Ghaith Fabrics",
    "Dashboard",
    "Admin Panel",
    "Inventory Management",
    "Wholesale Approvals",
    "Sales Analytics",
    "Order Tracking",
    "B2B E-commerce Admin",
  ],

  openGraph: {
    title: "لوحة التحكم | الغيث للأقمشة",
    description:
      "لوحة التحكم المركزية لمنصة الغيث للأقمشة. تابع إحصائيات المبيعات، الطلبات الحالية، إدارة المنتجات والمخزون، الموافقة على حسابات الجملة، وتحليل اتجاهات السوق والموضة.",
    url: "https://alghaith-fabrics.com/dashboard",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "لوحة تحكم الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "لوحة التحكم | الغيث للأقمشة",
    description:
      "لوحة التحكم المركزية لمنصة الغيث للأقمشة. تابع إحصائيات المبيعات، الطلبات الحالية، إدارة المنتجات والمخزون، الموافقة على حسابات الجملة، وتحليل اتجاهات السوق والموضة.",
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

const DashboardLayout: React.FC<CommonParentProps> = ({ children }) => {
  return (
    <DashboardLayoutClient>{children}</DashboardLayoutClient>
  )
};

export default DashboardLayout;