"use client";
import { DashboardStateCardProps } from "@/types/components";
import React from "react";

const StatCard: React.FC<DashboardStateCardProps> = ({ label, value, change, Icon, color }) => {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs">
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        {change !== undefined && (
          <div className="text-xs font-medium font-sans" style={{ color }}>
            {change}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-foreground mb-0.5 font-mono">
        {value}
      </div>
      <div className="text-xs text-muted-foreground font-heading">
        {label}
      </div>
    </div>
  );
};

export default StatCard;