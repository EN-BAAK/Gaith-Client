"use client";

import { Skeleton } from "@/components/Skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="space-y-6 w-full h-full animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={`shop-sh-sk-${i}`} className="bg-card border border-background2 rounded-2xl overflow-hidden space-y-4">
              <Skeleton className="w-full h-72 bg-background2" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-5 w-3/4 bg-background2" />
                <Skeleton className="h-4 w-1/2 bg-background2" />
                <Skeleton className="h-9 w-full rounded-xl bg-background2" />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-1">
          <Skeleton className="h-64 w-full rounded-2xl bg-background2" />
        </div>
      </div>
    </div>
  );
}