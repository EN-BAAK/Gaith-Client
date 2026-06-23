"use client";

import React from "react";
import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  const skeletonRows = Array.from({ length: 6 });
  return (
    <div className="space-y-6 w-full h-full animate-pulse">
      <div className="border-b border-background2 pb-5">
        <div className="space-y-2 w-full sm:w-1/3">
          <Skeleton className="h-8 w-1/2 rounded-md bg-background2" />
          <Skeleton className="h-4 w-full rounded-md bg-background2" />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-background2 overflow-hidden shadow-sm">
        <div className="p-4 space-y-4">
          {skeletonRows.map((_, index) => (
            <div key={`user-skeleton-row-${index}`} className="flex justify-between items-center py-3 border-b border-background2/40 last:border-0">
              <div className="flex items-center gap-3 w-1/4">
                <Skeleton className="w-9 h-9 rounded-full bg-background2" />
                <div className="space-y-1 flex-1">
                  <Skeleton className="h-4 w-3/4 bg-background2" />
                  <Skeleton className="h-3 w-1/2 bg-background2" />
                </div>
              </div>
              <Skeleton className="h-4 w-1/5 bg-background2" />
              <Skeleton className="h-4 w-1/6 bg-background2" />
              <Skeleton className="h-6 w-16 rounded-full bg-background2" />
              <Skeleton className="h-4 w-24 bg-background2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}