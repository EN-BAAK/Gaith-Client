"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

const Footer: React.FC = () => {
  const router = useRouter()
  const goTo = (r: string) => router.push(r)

  return (
    <footer className="bg-primary text-white/80 relative overflow-hidden">
      <ArabicPattern
        id="footer-pat"
        color="#B08D57"
        opacity={0.1}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span
                  className="text-white font-bold"
                  style={{
                    fontFamily: "'Noto Kufi Arabic', serif",
                  }}
                >
                  د
                </span>
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{
                  fontFamily: "'Noto Kufi Arabic', serif",
                }}
              >
                دار الفاخرة
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/60">
              وجهتك الأولى للأزياء الفاخرة والتصاميم الراقية.
              نوفر أجود الأقمشة العربية والعالمية للجملة والمفرد
              منذ عام ٢٠١٢.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, BsWhatsapp].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 bg-white/10 hover:bg-accent transition-colors rounded-full flex items-center justify-center"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              روابط سريعة
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                ["الرئيسية", "/"],
                ["المتجر", "/shop"],
              ].map(([l, p]) => (
                <button
                  key={l}
                  onClick={() => goTo(p)}
                  className="cursor-pointer text-sm text-white/60 hover:text-accent text-right transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              تواصل معنا
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone
                  size={14}
                  className="text-accent shrink-0"
                />
                <span dir="ltr">+963 *** *** ***</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  size={14}
                  className="text-accent shrink-0"
                />
                <span>info@darfakhira.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin
                  size={14}
                  className="text-accent shrink-0"
                />
                <span>دمشق، سوريا</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>جميع الحقوق محفوظة © ٢٠٢٦ EN-BAAK</span>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-white/70 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white/70 transition-colors"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer