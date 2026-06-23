"use client";

import React from "react";
import { Menu, Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { navItems } from "@/constants/globals";
import { DashboardHeaderProps } from "@/types/components";

const Header: React.FC<DashboardHeaderProps> = ({ setSidebarOpen }) => {
  const pathname = usePathname();
  const { user } = useAppContext();

  const getHeaderTitle = () => {
    if (pathname === "/dashboard") return "لوحة التحكم";
    const currentItem = navItems.find((item) => item.href === pathname);
    return currentItem ? currentItem.title : "الإدارة";
  };

  const formattedDate = new Intl.DateTimeFormat("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <header className="bg-card border-b border-background2 px-6 py-4 flex items-center justify-between shrink-0 z-20">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 hover:bg-background2 rounded-lg text-text cursor-pointer"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          <Menu size={18} />
        </button>
        <div>
          <h1 className="text-base font-bold text-text font-heading">
            {getHeaderTitle()}
          </h1>
          <p className="text-xs text-text/60 font-sans">
            {formattedDate}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-2.5 hover:bg-background2 rounded-full transition-colors text-text">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
        </button>

        {/* User Card Profile */}
        <div className="flex items-center md:w-[200px] gap-2.5 bg-background2 rounded-xl px-3 py-2 cursor-pointer hover:bg-background2/85 transition-colors">
          <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shrink-0">
            <User size={13} className="text-reversed" />
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-xs font-semibold text-text font-sans">
              {user?.name || "أدمن النظام"}
            </div>
            <div className="text-[10px] text-text/60 font-sans">
              {user?.email || "admin@darfakhira.com"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;