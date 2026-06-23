import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة مواقع ومناطق الفروع | لوحة التحكم",

  description:
    "قسم إدارة النطاقات الجغرافية والمواقع المركزية لفروع منصة الغيث للأقمشة. إضافة وتحديد المدن والمناطق لتنظيم وتوزيع شبكة الفروع وتسهيل عمليات الشحن واللوجستيات لعملاء الجملة والمفرق.",

  keywords: [
    // العربية
    "إدارة المواقع",
    "مواقع الفروع",
    "المناطق الجغرافية",
    "توزيع الفروع",
    "مدن الشحن والتوريد",
    "المراكز اللوجستية",
    "الغيث للأقمشة لوحة التحكم",
    "إدارة النطاقات",

    // English
    "Site Management",
    "Branch Locations",
    "Geographic Zones",
    "Regional Management",
    "Logistics Sites",
    "Supply Chain Locations",
    "Al-Ghaith Fabrics Dashboard",
    "Regions Admin",
  ],

  openGraph: {
    title: "إدارة مواقع ومناطق الفروع | لوحة التحكم",
    description:
      "قسم إدارة النطاقات الجغرافية والمواقع المركزية لفروع منصة الغيث للأقمشة. إضافة وتحديد المدن والمناطق لتنظيم وتوزيع شبكة الفروع وتسهيل عمليات الشحن واللوجستيات لعملاء الجملة والمفرق.",
    url: "https://alghaith-fabrics.com/dashboard/sites",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة مواقع فروع الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة مواقع ومناطق الفروع | لوحة التحكم",
    description:
      "قسم إدارة النطاقات الجغرافية والمواقع المركزية لفروع منصة الغيث للأقمشة. إضافة وتحديد المدن والمناطق لتنظيم وتوزيع شبكة الفروع وتسهيل عمليات الشحن واللوجستيات لعملاء الجملة والمفرق.",
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

const DashboardSitesLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardSitesLayout;