"use client";

import React from "react";
import { Trash2, Loader2, Pen, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import CustomButton from "@/libraries/forms/components/Button";
import { DashboardBranchCardProps } from "@/types/components";
import { BsTelephoneOutbound } from "react-icons/bs";

const Branch: React.FC<DashboardBranchCardProps> = ({ branch, onDelete, isDeleting, onEdit }) => {
  return (
    <div className="bg-card border border-background2 rounded-xl p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 group animate-fade-in animate-duration-200">

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h4 className="font-heading font-bold text-text text-base group-hover:text-accent transition-colors">
            {branch.name}
          </h4>
        </div>

        {branch.location && (
          <div className="flex items-center gap-1.5 text-xs text-text/70 font-sans">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{branch.location}</span>
          </div>
        )}

        <div className="flex items-center justify-between gap3">
          {(branch.phone) && (
            <div className="flex items-center gap-1.5 text-xs text-text/70 font-mono dir-ltr justify-end">
              <span>{branch.phone}</span>
              <Phone className="w-3.5 h-3.5 text-accent" />
            </div>
          )}

          {(branch.telephone) && (
            <div className="flex items-center gap-1.5 text-xs text-text/70 font-mono dir-ltr justify-end">
              <span>{branch.telephone}</span>
              <BsTelephoneOutbound className="w-3.5 h-3.5 text-accent" />
            </div>
          )}
        </div>

        {(branch.facebook || branch.instagram) && (
          <div className="flex items-center gap-3 pt-1">
            {branch.facebook && (
              <a href={branch.facebook} target="_blank" rel="noreferrer" className="text-text/40 hover:text-info transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {branch.instagram && (
              <a href={branch.instagram} target="_blank" rel="noreferrer" className="text-text/40 hover:text-danger transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-background2/60 pt-3 flex items-center justify-end gap-2">
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

export default Branch;