"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { useGetSystemSettings } from '@/features/useSettings'
import Image from 'next/image'
import React from 'react'

const states = [
  [
    "🏅",
    "جودة معتمدة",
    "نختار كل قطعة بعناية فائقة",
  ],
  [
    "🚚",
    "توصيل سريع",
    "لجميع المحافظات السورية",
  ],
  [
    "💎",
    "تصاميم حصرية",
    "لا تتكرر في أي مكان آخر",
  ],
  ["🤝", "خدمة الجملة", "أسعار خاصة للموردين"],
]

const About: React.FC = () => {
  const { data } = useGetSystemSettings()
  const subtitle = data?.data.aboutSubtitle || ""

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ArabicPattern
        id="about-pat"
        color="#B08D57"
        opacity={0.04}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent text-sm font-medium mb-3 tracking-widest uppercase">
              من نحن
            </div>
            <h2
              className="text-4xl font-bold text-foreground leading-tight mb-6"
              style={{
                fontFamily:
                  "'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              قصة عشق مع الأقمشة
              <span className="block text-accent">
                منذ ١٢ عاماً
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              نعمل مع نخبة من أمهر المصممين والحرفيين، ونستورد
              أجود الأقمشة من إيطاليا وفرنسا والإمارات. نحن
              نؤمن أن كل بيت يستجق ان يحصل على الأناقة.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {states.map(([icon, title, desc]) => (
                <div
                  key={title}
                  className="bg-card border border-border/60 rounded-xl p-4"
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-72 bg-secondary">
              <Image
                width={50}
                height={50}
                src="/fabric-shop.jpg"
                alt="fashion boutique"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden h-36 bg-secondary">
                <Image
                  width={50}
                  height={50}
                  src="/about-3.jpg"
                  alt="fashion item"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden flex-1 bg-secondary">
                <Image
                  width={50}
                  height={50}
                  src="/about-2.jpg"
                  alt="fashion model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About