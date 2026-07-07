"use client";

import React from "react";
import { Scale, ShoppingBag, UserX, AlertCircle, HelpCircle, CheckCircle } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";

const TermsAndConditionsPage: React.FC = () => {
  const lastUpdated = "٢٠٢٦/٠٧/٠٧";

  const terms = [
    {
      title: "١. شروط الحساب والتسجيل",
      desc: "عند إنشاء حساب في المنصة، يجب تقديم معلومات دقيقة ومحدثة. أنت مسؤول تماماً عن الحفاظ على سرية بيانات حسابك وكلمة المرور، وعن أي نشاط يتم من خلاله.",
      Icon: Scale,
      color: "#2563A8",
    },
    {
      title: "٢. سياسة الشراء والأسعار",
      desc: "نحتفظ بالحق في تعديل أسعار المنتجات أو تحديث توافرها في أي وقت دون إشعار مسبق. يتم تحديد تصنيف الحساب (مفرق أو جملة) بناءً على معايير حجم الطلبات المعتمدة.",
      Icon: ShoppingBag,
      color: "#2E7D5B",
    },
    {
      title: "٣. إساءة الاستخدام والإنهاء",
      desc: "يحظر استخدام المنصة لأي أغراض غير قانونية أو انتهاك حقوق الملكية الفكرية. نحتفظ بالحق في تعليق أو إغلاق أي حساب يثبت تلاعبه أو مخالفته لهذه الشروط.",
      Icon: UserX,
      color: "#B42318",
    },
    {
      title: "٤. حدود المسؤولية",
      desc: "نبذل قصارى جهدنا لضمان استقرار الخدمات، لكننا لا نضمن خلو المنصة من الأخطاء التقنية المؤقتة، ولا نتحمل المسؤولية عن أي أضرار ناتجة عن انقطاع الخدمة الخارج عن إرادتنا.",
      Icon: AlertCircle,
      color: "#C58A1A",
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <div className="mt-18 p-4 md:p-8 space-y-6 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-2 border-b border-border/60 pb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-2 text-accent">
            <Scale size={24} />
          </div>
          <h1 className="text-xl font-bold text-foreground font-heading">الشروط والأحكام</h1>
          <p className="text-xs text-muted-foreground font-sans">
            آخر تحديث: <span className="font-mono">{lastUpdated}</span>
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs">
          <p className="text-xs text-text/90 leading-relaxed font-sans">
            مرحباً بكم في منصتنا. تشكل هذه الشروط والأحكام اتفاقية قانونية ملزمة بينك وبين المنصة. بدخولك واستخدامك للموقع، فإنك توافق على الالتزام الكامل بهذه البنود. إذا كنت لا توافق على أي جزء منها، يرجى عدم استخدام الخدمات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {terms.map(({ title, desc, Icon, color }) => (
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
            <h2 className="text-sm font-semibold text-foreground font-heading">تعديل الشروط والأحكام</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-sans">
            نملك الحق الكامل في تحديث أو تغيير هذه الشروط في أي وقت. وتصبح التغييرات سارية المفعول فور نشرها على هذه الصفحة. استمرارك في استخدام المنصة بعد النشر يعني موافقتك الضمنية على التحديثات الجديدة.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground font-sans flex items-center justify-center gap-1.5">
            <HelpCircle size={14} className="text-accent" />
            لديك استفسار حول الشروط؟ فريق الدعم متواجد دائماً لمساعدتك عبر القنوات الرسمية.
          </p>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default TermsAndConditionsPage;