"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, Linkedin, Twitter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsWhatsapp, BsTiktok } from 'react-icons/bs'
import Link from 'next/link'
import { useGetSystemSettings } from '@/features/useSettings'

const Footer: React.FC = () => {
  const router = useRouter()
  const goTo = (r: string) => router.push(r)

  const { data } = useGetSystemSettings()
  const systemSettings = data?.data

  const socialLinks = [
    ...(systemSettings?.facebook ? [{ Icon: Facebook, href: systemSettings.facebook }] : []),
    ...(systemSettings?.instagram ? [{ Icon: Instagram, href: systemSettings.instagram }] : []),
    ...(systemSettings?.whatsappLink ? [{ Icon: BsWhatsapp, href: systemSettings.whatsappLink }] : []),
    ...(systemSettings?.youtube ? [{ Icon: Youtube, href: systemSettings.youtube }] : []),
    ...(systemSettings?.linkedIn ? [{ Icon: Linkedin, href: systemSettings.linkedIn }] : []),
    ...(systemSettings?.twitter ? [{ Icon: Twitter, href: systemSettings.twitter }] : []),
    ...(systemSettings?.tiktok ? [{ Icon: BsTiktok, href: systemSettings.tiktok }] : []),
  ];

  return (
    <footer className="bg-primary text-muted relative overflow-hidden">
      <ArabicPattern
        id="footer-pat"
        color="#B08D57"
        opacity={0.1}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4 justify-start">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold brand">
                  غ
                </span>
              </div>
              <span
                className="text-xl font-bold text-reversed"
              >
                الغيث للمنسوجات
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-muted">
              {systemSettings?.aboutSubtitle || "وجهتك الأولى للأقمشة الفاخرة والتصاميم الراقية. نوفر أجود الأقمشة العربية والعالمية للجملة والمفرد منذ عام ٢٠١٢."}
            </p>

            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-5 justify-start">
                {socialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-muted/10 hover:bg-accent hover:text-reversed transition-colors rounded-full flex items-center justify-center"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="text-right">
            <h4 className="text-reversed font-semibold mb-4 text-sm">
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
                  className="cursor-pointer text-sm text-muted hover:text-accent text-right transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-reversed font-semibold mb-4 text-sm">
              تواصل معنا
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted">

              {systemSettings?.phone && (
                <div className="flex items-center gap-2 justify-start flex-row-reverse">
                  <Phone size={14} className="text-accent shrink-0" />
                  <span dir="ltr">{systemSettings.phone}</span>
                </div>
              )}

              {systemSettings?.supportEmail && (
                <div className="flex items-center gap-2 justify-start flex-row-reverse">
                  <Mail size={14} className="text-accent shrink-0" />
                  <span dir="ltr">{systemSettings.supportEmail}</span>
                </div>
              )}

              {systemSettings?.location && (
                <div className="flex items-center gap-2 justify-start flex-row-reverse">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span>{systemSettings.location}</span>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="border-t border-muted/50 pt-6 flex flex-col sm:flex-row-reverse items-center justify-between gap-4 text-xs text-muted">
          <span>جميع الحقوق محفوظة © ٢٠٢٦ EN-BAAK</span>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-accent duration-200"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-accent duration-200"
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