"use client";

import React from "react";
import { Shield, Eye, Lock, FileText, Globe, CheckCircle } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";

const PrivacyPolicyPage = () => {
  const lastUpdated = "٢٠٢٦/٠٧/٠٧";

  const policies = [
    {
      title: "١. البيانات التي نجمعها",
      desc: "نقوم بجمع المعلومات التي تزودنا بها مباشرة عند إنشاء حسابك أو إتمام الطلبات، بما في ذلك الاسم، البريد الإلكتروني، رقم الهاتف، وعناوين الشحن أو الفواتير لتسهيل عمليات التوصيل.",
      Icon: FileText,
      color: "#2563A8",
    },
    {
      title: "٢. كيف نستخدم بياناتك",
      desc: "نستخدم معلوماتك لمعالجة طلبات الشراء، تحديثك بحالة الفواتير، تحسين أداء المنصة وتخصيص تجربتك كمشتري مفرق أو مشتري جملة.",
      Icon: Eye,
      color: "#2E7D5B",
    },
    {
      title: "٣. حماية وأمن المعلومات",
      desc: "نطبق معايير أمان تقنية وتنظيمية متقدمة لحماية بياناتك الشخصية من الوصول غير المصرح به، التعديل، أو الإفصاح. جميع المعاملات المالية مشفرة بالكامل.",
      Icon: Lock,
      color: "#C58A1A",
    },
    {
      title: "٤. مشاركة البيانات مع أطراف ثالثة",
      desc: "لا نبيع أو نؤجر بياناتك الشخصية لأي جهات تسويقية خارجية. نشارك فقط البيانات الضرورية مع شركاء التوصيل وشحن المنتجات لضمان وصول طلباتك بأمان.",
      Icon: Globe,
      color: "#B42318",
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <div className="mt-18 p-4 md:p-8 space-y-6 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-2 border-b border-border/60 pb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-2 text-accent">
            <Shield size={24} />
          </div>
          <h1 className="text-xl font-bold text-foreground font-heading">سياسة الخصوصية</h1>
          <p className="text-xs text-muted-foreground font-sans">
            آخر تحديث: <span className="font-mono">{lastUpdated}</span>
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs">
          <p className="text-xs text-text/90 leading-relaxed font-sans">
            نهتم في منصتنا بحماية خصوصية بياناتك ومعلوماتك الشخصية إلى أقصى حد. توضح هذه الصفحة طبيعة البيانات التي نجمعها، وكيفية التعامل معها وحمايتها عند استخدامك لخدماتنا وتصفحك للموقع.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {policies.map(({ title, desc, Icon, color }) => (
            <div key={title} className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={16} style={{ color }} />
                </div>
                <h2 className="text-sm font-semibold text-foreground font-heading">{title}</h2>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-[#2E7D5B]">
            <CheckCircle size={16} />
            <h2 className="text-sm font-semibold text-foreground font-heading">حقوقك والتحكم ببياناتك</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-sans">
            لديك الحق الكامل في الوصول إلى معلوماتك الشخصية المسجلة لدينا، تعديلها، أو طلب حذف حسابك وبياناتك تماماً في أي وقت عبر إعدادات الحساب أو بالتواصل مع الدعم الفني مباشرة.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground font-sans">
            إذا كانت لديك أي استفسارات حول سياسة الخصوصية، يمكنك دائماً مراسلتنا عبر بريد الدعم الفني للمنصة.
          </p>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicyPage;