import { Skeleton } from "@/components/Skeleton";
import React from "react";

const DashboardLoading: React.FC = () => {
  return (
    <div className="p-6 space-y-8 animate-pulse w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="border border-border/30 p-5 h-32" />
        ))}
      </div>

      <Skeleton className="rounded-2xl h-64 w-full" />
    </div>
  );
};

export default DashboardLoading;