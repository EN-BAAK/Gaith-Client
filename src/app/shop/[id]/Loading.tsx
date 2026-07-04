"use client";

import { Skeleton } from "@/components/Skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="space-y-6 w-full h-full animate-pulse p-1" dir="rtl">
      <div className="flex justify-between items-center border-b border-background2 pb-5">
        <div className="space-y-2 w-1/3">
          <Skeleton className="h-8 w-3/4 bg-background2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3 space-y-6 bg-card border border-background2 p-5 rounded-2xl">
          <Skeleton className="w-full h-96 rounded-xl bg-background2" />

          <div className="space-y-3 pt-2">
            <Skeleton className="h-6 w-1/4 bg-background2" />
            <Skeleton className="h-4 w-full bg-background2" />
            <Skeleton className="h-16 w-full bg-background2 rounded-xl" />
          </div>

          <div className="space-y-3 pt-4 border-t border-background2/60">
            <Skeleton className="h-4 w-1/5 bg-background2" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-16 bg-background2 rounded-lg" />
              <Skeleton className="h-8 w-16 bg-background2 rounded-lg" />
              <Skeleton className="h-8 w-16 bg-background2 rounded-lg" />
            </div>
          </div>

          <div className="pt-4 flex justify-between items-center border-t border-background2/60 gap-4">
            <Skeleton className="h-12 w-32 bg-background2 rounded-xl" />
            <Skeleton className="h-12 w-48 bg-background2 rounded-xl" />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1">
          <Skeleton className="h-[550px] w-full rounded-2xl bg-background2" />
        </div>

      </div>
    </div>
  );
}