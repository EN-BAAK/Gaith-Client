import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة الفروع ومنافذ البيع | لوحة التحكم",

  description:
    "قسم إدارة وتتبع فروع الغيث للأقمشة الفاخرة. إضافة منافذ البيع وصالات العرض الجديدة، ربطها بالمواقع الجغرافية المركزية، وتعيين مسؤولي الفروع لتسهيل استلام طلبات الجملة والمفرق وإدارة المخزون المحلي.",

  keywords: [
    // العربية
    "إدارة الفروع",
    "فروع الغيث للأقمشة",
    "منافذ بيع الأقمشة",
    "صالات عرض الأزياء",
    "ربط الفروع والمخازن",
    "مستودعات الفروع",
    "إدارة المبيعات المحلية",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "Branch Management",
    "Al-Ghaith Branches",
    "Fabric Outlets",
    "Fashion Showrooms",
    "Local Inventory",
    "Branch Warehouses",
    "Point of Sale Admin",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة الفروع ومنافذ البيع | لوحة التحكم",
    description:
      "قسم إدارة وتتبع فروع الغيث للأقمشة الفاخرة. إضافة منافذ البيع وصالات العرض الجديدة، ربطها بالمواقع الجغرافية المركزية، وتعيين مسؤولي الفروع لتسهيل استلام طلبات الجملة والمفرق وإدارة المخزون المحلي.",
    url: "https://alghaith-fabrics.com/dashboard/branches",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة فروع الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة الفروع ومنافذ البيع | لوحة التحكم",
    description:
      "قسم إدارة وتتبع فروع الغيث للأقمشة الفاخرة. إضافة منافذ البيع وصالات العرض الجديدة، ربطها بالمواقع الجغرافية المركزية، وتعيين مسؤولي الفروع لتسهيل استلام طلبات الجملة والمفرق وإدارة المخزون المحلي.",
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

const DashboardBranchesLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardBranchesLayout;