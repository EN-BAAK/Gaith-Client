"use client";

import { Skeleton } from "@/components/Skeleton";
import React from "react";

const Loading: React.FC = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="space-y-6 w-full h-full animate-pulse">
      <div className="bg-card rounded-xl border border-background2 overflow-hidden shadow-sm">
        <div className="p-4 bg-background2/40 border-b border-background2">
          <Skeleton className="h-5 w-1/4 bg-background2" />
        </div>
        <div className="p-4 space-y-4">
          {skeletonRows.map((_, index) => (
            <div key={`site-skeleton-row-${index}`} className="flex justify-between items-center py-2 border-b border-background2/40 last:border-0">
              <Skeleton className="h-5 w-1/3 bg-background2" />
              <div className="flex gap-2">
                <Skeleton className="w-10 h-8 rounded-md bg-background2" />
                <Skeleton className="w-10 h-8 rounded-md bg-background2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;