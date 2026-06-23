"use client";

import React from "react";
import { Trash2, Loader2, Pen } from "lucide-react";
import CustomButton from "@/libraries/forms/components/Button";
import { DashboardCategoryCardProps } from "@/types/components";
import { FEATURE_ICONS_MAP } from "@/libraries/forms/constants";

const Category: React.FC<DashboardCategoryCardProps> = ({ category, onDelete, isDeleting, onEdit }) => {
  const Icon = FEATURE_ICONS_MAP[category.icon as keyof typeof FEATURE_ICONS_MAP] || FEATURE_ICONS_MAP["default"];

  return (
    <div className="bg-card border border-background2 rounded-xl p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 group animate-fade-in animate-duration-200 relative z-1 overflow-hidden">
      <div className="absolute -z-10 top-4 right-4 w-24 h-24 rounded-full bg-accent/20 blur-xl opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="absolute -z-10 top-20 -left-8 w-28 h-28 rounded-full bg-accent/15 blur-xl"></div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-background2 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-reversed transition-colors duration-300">
          <Icon className="w-5 h-5 stroke-[1.5]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-text text-lg">
            {category.name}
          </h3>
        </div>
      </div>

      <div className="border-t border-background2/60 my-1" />

      <div className="flex items-center justify-end gap-2">
        <CustomButton
          className="w-fit rounded-md"
          variant="danger-outline"
          icon={isDeleting ? Loader2 : Trash2}
          iconClassName={isDeleting ? "w-4 h-4 animate-spin" : "w-4 h-4"}
          disabled={isDeleting}
          onClick={onDelete}
        />

        <CustomButton
          className="w-fit rounded-md"
          variant="warning-outline"
          icon={Pen}
          iconClassName="w-4 h-4"
          disabled={isDeleting}
          onClick={onEdit}
        />
      </div>
    </div>
  );
};

export default Category;