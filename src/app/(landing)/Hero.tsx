'use client'

import ArabicPattern from '@/components/ArabicPattern'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const router = useRouter()

  const navigateToShop = () => router.push("/shop")

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          fill
          src="/hero.jpg"
          alt="luxury fashion store interior"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-primary/50" />
      </div>
      <ArabicPattern id="hero-pat" color="#B08D57" opacity={0.07} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            ✦ مورد الأزياء الفاخرة الأول في بلاد الشام
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-reversed leading-[1.1] mb-6"
            style={{
              fontFamily:
                "'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            حيث تلتقي
            <span className="block text-accent">الأناقة</span>
            بالأصالة
          </h1>
          <p className="text-reversed/65 text-lg leading-relaxed mb-10 max-w-lg">
            اكتشف أرقى التصاميم العربية والعالمية. نوفر لك
            أجود الأقمشة وأحدث صيحات الموضة بأسعار الجملة
            والمفرد.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={navigateToShop}
              className="bg-accent cursor-pointer text-reversed px-8 py-4 rounded-xl font-semibold hover:bg-accent/88 transition-all text-base shadow-lg shadow-accent/20"
            >
              تسوق الآن
            </button>
          </div>
        </div>
      </div>
            
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-reversed/30 animate-bounce">
        <ChevronDown size={22} />
      </div>
    </section>
  )
}

export default Hero