import React from "react";
import Link from "next/link";
import { Scissors, Home, ArrowRight } from "lucide-react";
import ArabicPattern from "@/components/ArabicPattern";

const NotFound = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-primary/15 flex flex-col items-center justify-center p-4 overflow-hidden select-none"
      dir="rtl"
    >
      {/* Decorative Traditional BG Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <ArabicPattern id="not-found-pattern" color="#B08D57" opacity={1} />
      </div>

      {/* Main Content Card Container */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">

        {/* Large Styled Luxury 404 Canvas */}
        <div className="relative mb-6 flex items-center justify-center">
          <h1
            className="text-[120px] sm:text-[160px] font-bold tracking-tight text-accent/15 leading-none font-luxury select-none"
            style={{ textShadow: "0 4px 20px rgba(176,141,87,0.05)" }}
          >
            ٤٠٤
          </h1>

          {/* Conceptual Floating Icon Overlapping Title */}
          <div className="absolute bg-card border border-accent/20 p-4 rounded-full shadow-xl shadow-accent/5 animate-bounce duration-1000">
            <Scissors className="h-8 w-8 text-accent transform -rotate-45" />
          </div>
        </div>

        {/* Traditional Typography & Copywriting */}
        <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4 font-heading">
          خيطٌ مفقود.. المسار غير منسوج
        </h2>

        <p className="text-sm sm:text-base text-text/70 mb-10 max-w-md px-4 font-sans leading-relaxed">
          يبدو أن الصفحة التي تبحث عنها قد قُصّت من نسيج موقعنا، أو انتقلت إلى تشكيلة أخرى. دعنا نساعدك في العودة لغزل خيوطك مجدداً.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-reversed text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-md active:scale-[0.98] font-sans"
          >
            <Home size={16} />
            لوحة التحكم الرئيسية
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-background2 text-text text-sm font-semibold rounded-xl hover:bg-accent/10 hover:text-accent border border-transparent hover:border-accent/20 transition-all duration-300 active:scale-[0.98] font-sans group"
          >
            تصفح المتجر الرئيسي
            <ArrowRight size={16} className="transform rotate-180 group-hover:translate-x-[-4px] transition-transform" />
          </Link>
        </div>

        {/* Elegant Abstract Corner Borders to signify premium framing */}
        <div className="absolute top-[-20px] right-[-20px] w-8 h-8 border-t-2 border-r-2 border-accent/20 rounded-tr-md hidden sm:block" />
        <div className="absolute bottom-[-20px] left-[-20px] w-8 h-8 border-b-2 border-l-2 border-accent/20 rounded-bl-md hidden sm:block" />
      </div>

      {/* Subdued Footer Branding */}
      <div className="absolute bottom-6 text-[11px] text-text/40 font-luxury tracking-widest uppercase">
        الغيث للأقمشة الفاخرة © ٢٠٢٦
      </div>
    </div>
  );
}

export default NotFound;