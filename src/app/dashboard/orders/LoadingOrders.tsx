"use client";

import React from "react";
import { Skeleton } from "@/components/Skeleton";

export default function LoadingOrders() {
  return (
    <div className="w-full lg:w-80 h-full border-l border-background2 bg-card flex flex-col p-4 gap-4 animate-pulse">
      <Skeleton className="h-9 w-full rounded-xl bg-background2" />
      <div className="space-y-3 flex-1 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={`orders-skeleton-${i}`} className="p-3 border border-background2/40 rounded-xl space-y-3">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-1/3 bg-background2" />
              <Skeleton className="h-3 w-1/4 bg-background2" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-1/4 rounded-sm bg-background2" />
              <Skeleton className="h-3 w-1/5 bg-background2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}