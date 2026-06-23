import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تسجيل الدخول | الغيث للأقمشة الفاخرة",

  description:
    "بوابة تسجيل الدخول الآمنة لمنصة الغيث للأقمشة. سجل دخولك الآن لتصفح أرقى خامات الموضة والأزياء، وإدارة طلباتك، والوصول إلى أسعار المفرق وأسعار الجملة الحصرية للموردين والمصانع.",

  keywords: [
    // العربية
    "الغيث للأقمشة",
    "تسجيل الدخول الغيث",
    "تجارة الأقمشة بالجملة",
    "مورد أقمشة فاخرة",
    "أقمشة رجالية",
    "أقمشة نسائية",
    "سوق الملابس بالجملة",
    "منصة B2B للأزياء",
    "حساب جملة",
    "حساب مفرق",
    "مخزون الأقمشة الرقمي",
    "أسعار الجملة للموردين",
  ],

  openGraph: {
    title: "تسجيل الدخول | الغيث للأقمشة",
    description:
      "بوابة تسجيل الدخول الآمنة لمنصة الغيث للأقمشة. سجل دخولك الآن لتصفح أرقى خامات الموضة والأزياء، وإدارة طلباتك، والوصول إلى أسعار المفرق وأسعار الجملة الحصرية للموردين والمصانع.",
    url: "https://alghaith-fabrics.com/login",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "تسجيل الدخول للغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "تسجيل الدخول | الغيث للأقمشة",
    description:
      "بوابة تسجيل الدخول الآمنة لمنصة الغيث للأقمشة. سجل دخولك الآن لتصفح أرقى خامات الموضة والأزياء، وإدارة طلباتك، والوصول إلى أسعار المفرق وأسعار الجملة الحصرية للموردين والمصانع.",
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

const LoginLayout: React.FC<Readonly<CommonParentProps>> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>)
};

export default LoginLayout;