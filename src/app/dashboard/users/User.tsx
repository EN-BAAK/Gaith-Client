"use client";

import React from "react";
import { User as UserIcon, Mail, Phone, Calendar } from "lucide-react";
import { DashboardUsersRowProps } from "@/types/components";
import { ROLE } from "@/types/global";

const UserRow: React.FC<DashboardUsersRowProps> = ({ user }) => {
  const getRoleBadge = (role: string) => {
    switch (role?.toUpperCase()) {
      case ROLE.ADMIN:
        return "bg-primary text-reversed border border-accent/30";
      case ROLE.WHOLESALE:
        return "bg-accent/10 text-accent border border-accent/20";
      default:
        return "bg-background2 text-text/80 border border-background2";
    }
  };

  const formattedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })
    : "غير محدد";

  return (
    <tr className="hover:bg-background/50 transition-colors animate-fade-in animate-duration-200">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-background2 flex items-center justify-center text-text/60 border border-primary/5">
            <UserIcon className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-text">{user.name}</span>
          </div>
        </div>
      </td>

      <td className="p-4 font-sans text-text/80">
        <div className="flex items-center gap-1.5 justify-start">
          <Mail className="w-3.5 h-3.5 text-text/40" />
          <span>{user.email}</span>
        </div>
      </td>

      <td className="p-4 font-mono text-text/80 text-right dir-ltr">
        <div className="flex items-center gap-1.5 justify-end">
          <span>{user.phone || "—"}</span>
          <Phone className="w-3.5 h-3.5 text-text/40" />
        </div>
      </td>

      <td className="p-4">
        <span className={`px-2.5 py-1 rounded-full text-xs font-heading font-medium inline-block ${getRoleBadge(user.role)}`}>
          {user.role === ROLE.ADMIN ? "إدارة" : user.role === ROLE.WHOLESALE ? "عميل جملة" : "عميل مفرق"}
        </span>
      </td>

      <td className="p-4 text-left pl-6 font-sans text-xs text-text/60">
        <div className="flex items-center gap-1.5 justify-end">
          <span>{formattedDate}</span>
          <Calendar className="w-3.5 h-3.5 text-text/30" />
        </div>
      </td>
    </tr>
  );
};

export default UserRow;