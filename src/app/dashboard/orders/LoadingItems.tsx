"use client";

import React from "react";
import { Skeleton } from "@/components/Skeleton";

export default function LoadingItems() {
  return (
    <div className="flex-1 p-6 space-y-6 animate-pulse">
      <div className="flex justify-between items-center border-b border-background2 pb-4">
        <div className="space-y-2 w-1/4">
          <Skeleton className="h-6 w-3/4 bg-background2" />
          <Skeleton className="h-4 w-1/2 bg-background2" />
        </div>
        <Skeleton className="h-8 w-24 rounded-md bg-background2" />
      </div>

      <div className="space-y-3 bg-card border border-background2 rounded-xl p-4">
        {[1, 2].map((i) => (
          <div key={`item-sk-${i}`} className="flex justify-between items-center py-2 border-b border-background2/40 last:border-0">
            <div className="space-y-1.5 flex-1">
              <Skeleton className="h-4 w-1/3 bg-background2" />
              <Skeleton className="h-3 w-1/4 bg-background2" />
            </div>
            <Skeleton className="h-4 w-16 bg-background2" />
          </div>
        ))}
      </div>
    </div>
  );
}