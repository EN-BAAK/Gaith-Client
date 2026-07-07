"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { Facebook, Instagram, MapPin, Phone, PhoneCall } from 'lucide-react'
import React from 'react'
import { LandingBranchProps } from '@/types/components'

const Branch: React.FC<LandingBranchProps> = ({ group }) => {
  return (
    <div
      className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm flex flex-col"
    >
      <div className="bg-primary px-6 py-4 flex items-center gap-3 relative overflow-hidden">
        <ArabicPattern
          id={`b-${group.site}`}
          color="#B08D57"
          opacity={0.12}
        />
        <MapPin
          size={18}
          className="text-accent relative z-10 shrink-0"
        />
        <h3
          className="text-lg font-bold text-reversed relative z-10"
          style={{
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          }}
        >
          {group.site}
        </h3>
        <span className="ms-auto relative z-10 text-xs bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded-full">
          {group.branches.length} {group.branches.length >= 3 && group.branches.length <= 10 ? 'فروع' : 'فرع'}
        </span>
      </div>

      <div className="divide-y divide-border/50 flex-1 bg-card">
        {group.branches.map((branch) => (
          <div
            key={branch.id}
            className="px-6 py-5 hover:bg-secondary/40 transition-colors"
          >
            <div className="flex-1 space-y-2">
              <div className='flex items-center justify-between'>
                <div className="font-bold text-base text-foreground">
                  {branch.name}
                </div>

                <div className="flex gap-2 shrink-0 self-end sm:self-center">
                  {branch.facebook && (
                    <a
                      href={branch.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors"
                      title="فيسبوك"
                    >
                      <Facebook size={14} />
                    </a>
                  )}
                  {branch.instagram && (
                    <a
                      href={branch.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#E1306C]/10 text-[#E1306C] rounded-full flex items-center justify-center hover:bg-[#E1306C]/20 transition-colors"
                      title="إنستغرام"
                    >
                      <Instagram size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <MapPin
                  size={13}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>{branch.location}</span>
              </div>

              {(branch.phone || branch.telephone) && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  {branch.phone && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone size={12} className="text-accent" />
                      <span dir="ltr">{branch.phone}</span>
                    </div>
                  )}
                  {branch.telephone && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <PhoneCall size={12} className="text-accent" />
                      <span dir="ltr">{branch.telephone}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Branch