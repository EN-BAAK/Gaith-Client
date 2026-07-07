import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام | الغيث للأقمشة الفاخرة",

  description:
    "الشروط والأحكام القانونية الحاكمة لاستخدام منصة الغيث للأقمشة. اطلع على ضوابط البيع بنظامي الجملة والمفرق، سياسات التسعير الديناميكي، وشروط تأكيد الطلبات وتحديث المخزون للعملاء والموردين.",

  keywords: [
    // العربية
    "الشروط والأحكام",
    "اتفاقية الاستخدام الغيث",
    "شروط البيع بالجملة",
    "سياسة الاسترجاع والأقمشة",
    "حقوق الملكية الفكرية",
    "ضوابط الموردين B2B",
    "اتفاقية عملاء المفرق",

    // English
    "Terms and Conditions",
    "Terms of Service",
    "Al-Ghaith Terms",
    "Usage Agreement",
    "Wholesale Terms",
    "B2B Platform Rules",
    "Legal Policy",
  ],

  openGraph: {
    title: "الشروط والأحكام | الغيث للأقمشة الفاخرة",
    description:
      "الشروط والأحكام القانونية الحاكمة لاستخدام منصة الغيث للأقمشة. اطلع على ضوابط البيع بنظامي الجملة والمفرق، سياسات التسعير الديناميكي، وشروط تأكيد الطلبات وتحديث المخزون للعملاء والموردين.",
    url: "https://alghaith-fabrics.com/terms-and-conditions",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "الشروط والأحكام للغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "الشروط والأحكام | الغيث للأقمشة الفاخرة",
    description:
      "الشروط والأحكام القانونية الحاكمة لاستخدام منصة الغيث للأقمشة. اطلع على ضوابط البيع بنظامي الجملة والمفرق، سياسات التسعير الديناميكي، وشروط تأكيد الطلبات وتحديث المخزون للعملاء والموردين.",
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

const TermsAndConditionsLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default TermsAndConditionsLayout;