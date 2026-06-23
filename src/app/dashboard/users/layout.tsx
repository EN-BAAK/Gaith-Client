import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة المستخدمين وحسابات الجملة | لوحة التحكم",

  description:
    "قسم إدارة مستخدمي منصة الغيث للأقمشة. مراجعة وتدقيق بيانات العملاء، الموافقة على طلبات انضمام تجار الجملة لتفعيل التسعير الخاص بهم، وإدارة الصلاحيات والأدوار للمشرفين ومسؤولي المبيعات.",

  keywords: [
    // العربية
    "إدارة المستخدمين",
    "الموافقة على حسابات الجملة",
    "عملاء المفرق",
    "صلاحيات المشرفين",
    "إدارة العملاء B2B",
    "بيانات الموردين",
    "التحقق من الحسابات",
    "الغيث للأقمشة لوحة التحكم",

    // English
    "User Management",
    "Wholesale Approvals",
    "Retail Customers",
    "Admin Permissions",
    "B2B Customer Management",
    "Supplier Accounts",
    "Account Verification",
    "Al-Ghaith Fabrics Dashboard",
  ],

  openGraph: {
    title: "إدارة المستخدمين وحسابات الجملة | لوحة التحكم",
    description:
      "قسم إدارة مستخدمي منصة الغيث للأقمشة. مراجعة وتدقيق بيانات العملاء، الموافقة على طلبات انضمام تجار الجملة لتفعيل التسعير الخاص بهم، وإدارة الصلاحيات والأدوار للمشرفين ومسؤولي المبيعات.",
    url: "https://alghaith-fabrics.com/dashboard/users",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "إدارة مستخدمي وعملاء الغيث للأقمشة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "إدارة المستخدمين وحسابات الجملة | لوحة التحكم",
    description:
      "قسم إدارة مستخدمي منصة الغيث للأقمشة. مراجعة وتدقيق بيانات العملاء، الموافقة على طلبات انضمام تجار الجملة لتفعيل التسعير الخاص بهم، وإدارة الصلاحيات والأدوار للمشرفين ومسؤولي المبيعات.",
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

const DashboardUsersLayout: React.FC<CommonParentProps> = ({ children }) => {
  return children;
};

export default DashboardUsersLayout;