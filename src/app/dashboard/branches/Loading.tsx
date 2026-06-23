"use client";

import { Skeleton } from "@/components/Skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="space-y-8 w-full h-full animate-pulse">
      {[1, 2].map((sectionIndex) => (
        <div key={`section-skeleton-${sectionIndex}`} className="space-y-4 border border-background2/60 p-5 rounded-2xl bg-background/10">
          <div className="flex items-center gap-2 pb-2 border-b border-background2">
            <Skeleton className="h-6 w-32 bg-background2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3].map((cardIndex) => (
              <div key={`card-skeleton-${sectionIndex}-${cardIndex}`} className="bg-card border border-background2 rounded-xl p-5 space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-3/4 bg-background2" />
                  <Skeleton className="h-3 w-1/2 bg-background2" />
                  <Skeleton className="h-3 w-2/3 bg-background2" />
                </div>
                <div className="border-t border-background2/60 pt-3 flex justify-end gap-2">
                  <Skeleton className="w-10 h-8 rounded-md bg-background2" />
                  <Skeleton className="w-10 h-8 rounded-md bg-background2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}