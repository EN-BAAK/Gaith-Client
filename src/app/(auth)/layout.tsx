import ArabicPattern from '@/components/ArabicPattern'
import { CommonParentProps } from '@/types/global'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AuthLayout: React.FC<Readonly<CommonParentProps>> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex select-none"
    >
      <div className="hidden lg:flex flex-col w-5/12 relative bg-primary overflow-hidden items-center justify-between p-12 py-16">
        <ArabicPattern id="login-pat" color="#B08D57" opacity={0.12} />

        <div className="relative z-10 w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
              <span
                className="text-reversed font-bold text-lg brand"
              >
                غ
              </span>
            </div>
            <span
              className="text-2xl font-bold text-reversed tracking-wide">
              منصة الغيث
            </span>
          </div>
        </div>

        <div className="relative z-10 text-right w-full">
          <div className="text-accent text-sm font-medium mb-3 tracking-wider">
            مورد الأزياء والأقمشة الفاخرة B2B
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4 text-reversed">
            حيث تلتقي
            <br />
            <span className="text-accent">الأناقة</span> بالأصالة
          </h2>

          <p className="text-reversed text-sm leading-relaxed max-w-sm mb-8">
            أكثر من ٢٠٠ تصميم حصري من أجود الأقمشة العربية والعالمية، متاحة بنظامي الجملة والمفرق برابط ذكي واحد.
          </p>

          <div className="flex flex-col gap-3">
            {[
              "أسعار الجملة الحصرية (بعد موافقة الإدارة)",
              "تحديث فوري للمخزون ومنع تضارب الطلبات",
              "دعم كامل لمتغيرات الألوان، المقاسات، والخامات",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-accent" />
                </div>
                <span className="text-reversed/70 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full">
          <div className="w-full h-48 rounded-2xl overflow-hidden border border-background/10 shadow-2xl">
            <Image
              fill
              src="/fabric-shop.jpg"
              alt="fashion boutique"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default AuthLayout