import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | الغيث للأقمشة الفاخرة",

  description:
    "سياسة الخصوصية وسرية البيانات لمنصة الغيث للأقمشة. تعرف على كيفية حماية بياناتك الشخصية والتجارية، ومعالجة معلومات عملاء الجملة والمفرق لضمان تجربة تسوق آمنة وموثوقة.",

  keywords: [
    "سياسة الخصوصية",
    "خصوصية البيانات الغيث",
    "سرية معلومات التجار",
    "حماية بيانات المشترين",
    "الشروط والأحكام",
    "أمان البيانات B2B",
    "اتفاقية الاستخدام",

    // English
    "Privacy Policy",
    "Data Protection",
    "Al-Ghaith Privacy",
    "Customer Data Security",
    "Privacy Terms",
    "B2B Data Privacy",
    "User Agreement",
  ],

  openGraph: {
    title: "سياسة الخصوصية | الغيث للأقمشة الفاخرة",
    description:
      "سياسة الخصوصية وسرية البيانات لمنصة الغيث للأقمشة. تعرف على كيفية حماية بياناتك الشخصية والتجارية، ومعالجة معلومات عملاء الجملة والمفرق لضمان تجربة تسوق آمنة وموثوقة.",
    url: "https://alghaith-fabrics.com/privacy-policy",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "سياسة خصوصية الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "سياسة الخصوصية | الغيث للأقمشة الفاخرة",
    description:
      "سياسة الخصوصية وسرية البيانات لمنصة الغيث للأقمشة. تعرف على كيفية حماية بياناتك الشخصية والتجارية، ومعالجة معلومات عملاء الجملة والمفرق لضمان تجربة تسوق آمنة وموثوقة.",
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

const PrivacyPolicyLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default PrivacyPolicyLayout;