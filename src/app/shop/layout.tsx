import BasketProvider from "@/contexts/BasketProvider";
import { CommonParentProps } from "@/types/global";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متجر الغيث للأقمشة الفاخرة | تسوق أحدث صيحات الموضة والمنسوجات",

  description:
    "اكتشف التشكيلة الحصرية من الأقمشة الراقية والخامات الفاخرة في متجر الغيث. تسوق الآن عبر الإنترنت واستمتع بتجربة تسوق متكاملة تدعم أسعار المفرق المباشرة وأسعار الجملة المخصصة للمصانع ومصممي الأزياء.",

  keywords: [
    // العربية
    "متجر الغيث للأقمشة",
    "تسوق أقمشة عبر الإنترنت",
    "أقمشة سواريه فاخرة",
    "خامات ملابس راقية",
    "شراء أقمشة جملة",
    "شراء أقمشة مفرق",
    "كتالوج الأقمشة الرقمي",
    "أحدث صيحات المنسوجات",
    "توصيل أقمشة ومستلزمات خياطة",

    // English
    "Al-Ghaith Fabrics Shop",
    "Buy Fabrics Online",
    "Premium Textiles Store",
    "Luxury Fashion Materials",
    "Wholesale Fabric Shop",
    "Retail Fabric Online",
    "Textile Catalog",
    "Order Fabrics",
  ],

  openGraph: {
    title: "متجر الغيث للأقمشة الفاخرة | تسوق أحدث صيحات الموضة والمنسوجات",
    description:
      "اكتشف التشكيلة الحصرية من الأقمشة الراقية والخامات الفاخرة في متجر الغيث. تسوق الآن عبر الإنترنت واستمتع بتجربة تسوق متكاملة تدعم أسعار المفرق المباشرة وأسعار الجملة المخصصة للمصانع ومصممي الأزياء.",
    url: "https://alghaith-fabrics.com/shop",
    locale: "ar_SA",
    type: "website",
    siteName: "الغيث للأقمشة",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "متجر الغيث للأقمشة الفاخرة",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "متجر الغيث للأقمشة الفاخرة | تسوق أحدث صيحات الموضة والمنسوجات",
    description:
      "اكتشف التشكيلة الحصرية من الأقمشة الراقية والخامات الفاخرة في متجر الغيث. تسوق الآن عبر الإنترنت واستمتع بتجربة تسوق متكاملة تدعم أسعار المفرق المباشرة وأسعار الجملة المخصصة للمصانع ومصممي الأزياء.",
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

const ShopLayout: React.FC<CommonParentProps> = ({ children }) => {
  return (
    <BasketProvider>
      {children}
    </BasketProvider>
  );
};

export default ShopLayout;