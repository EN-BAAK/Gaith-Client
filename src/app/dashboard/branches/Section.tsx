"use client";

import React from "react";
import Branch from "./Branch";
import { Layers } from "lucide-react";
import { DashboardBranchSectionProps } from "@/types/components";

const Section: React.FC<DashboardBranchSectionProps> = ({ title, branches, onDeleteBranch, isDeleting, onEditBranch }) => {
  return (
    <div className="space-y-4 border border-background2/60 p-5 rounded-2xl bg-background/30 shadow-inner">
      {title && (
        <div className="flex items-center gap-2 border-b border-background2 pb-2">
          <Layers className="w-4 h-4 text-accent" />
          <h3 className="font-heading font-bold text-lg text-text">
            {title}
          </h3>
          <span className="text-xs bg-background2 text-text/60 px-2 py-0.5 rounded-full font-sans">
            {branches.length} فروع
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {branches.map((branchItem) => (
          <Branch
            key={`branch-${branchItem.id}`}
            branch={branchItem}
            onDelete={() => onDeleteBranch(branchItem)}
            isDeleting={isDeleting}
            onEdit={() => onEditBranch(branchItem.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;