"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLogout } from "@/features/useAuth";
import { navItems } from "@/constants/globals";
import ArabicPattern from "@/components/ArabicPattern";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  const closeSidebar = () => setIsOpen(false);

  return (
    <React.Fragment>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-[1000] bg-primary/50 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
        />
      )}

      <aside
        className={cn(
          `fixed right-0 top-0 z-[1001] flex h-screen w-[280px] flex-col
           border-l border-accent/10 bg-primary text-reversed
           transition-transform duration-300 ease-in-out
           lg:static lg:translate-x-0 shrink-0`,
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          <ArabicPattern id="dash-sidebar" color="#B08D57" opacity={0.1} />

          <button
            onClick={closeSidebar}
            className="absolute left-4 top-4 z-20 text-reversed/60 hover:text-reversed lg:hidden cursor-pointer"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>

          {/* Logo Section */}
          <div className="relative z-10 p-6 border-b border-accent/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                <span className="text-reversed text-sm font-bold font-luxury">
                  غ
                </span>
              </div>
              <div>
                <div className="text-reversed text-sm font-bold font-luxury">
                  الغيث للأقمشة
                </div>
                <div className="text-reversed/40 text-xs font-sans">
                  لوحة الإدارة
                </div>
              </div>
            </div>
          </div>

          <nav className="relative z-10 flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all font-sans",
                    isActive
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "text-reversed/70 hover:bg-reversed/5 hover:text-reversed"
                  )}
                >
                  <Icon size={16} />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Footer Action */}
          <div className="relative z-10 p-4 border-t border-accent/10">
            <button
              onClick={() => logout()}
              disabled={isLoggingOut}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-sans text-reversed/60 hover:text-danger hover:bg-danger/10 transition-all disabled:opacity-50 cursor-pointer"
            >
              <LogOut size={16} />
              تسجيل الخروج
            </button>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;