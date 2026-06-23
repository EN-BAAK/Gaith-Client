"use client";

import React from "react";
import { Trash2, Loader2, Pen, MapPin } from "lucide-react";
import CustomButton from "@/libraries/forms/components/Button";
import { DashboardSitesRowProps } from "@/types/components";

const Site: React.FC<DashboardSitesRowProps> = ({ site, onDelete, isDeleting, onEdit }) => {
  return (
    <tr className="hover:bg-background/50 transition-colors animate-fade-in animate-duration-200">
      <td className="p-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent/70" />
          <span className="font-heading font-medium text-text">
            {site.name}
          </span>
        </div>
      </td>

      <td className="p-4 text-left pl-6">
        <div className="flex justify-end items-center gap-3">
          <CustomButton
            className="w-fit rounded-sm"
            variant="danger-outline"
            icon={isDeleting ? Loader2 : Trash2}
            iconClassName={isDeleting ? "w-4 h-4 animate-spin" : "w-4 h-4"}
            disabled={isDeleting}
            onClick={onDelete}
          />

          <CustomButton
            className="w-fit rounded-sm"
            variant="warning-outline"
            icon={Pen}
            iconClassName="w-4 h-4"
            disabled={isDeleting}
            onClick={onEdit}
          />
        </div>
      </td>
    </tr>
  );
};

export default Site;