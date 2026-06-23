"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface ClientProps {
  children: React.ReactNode;
}

const DashboardLayoutClient: React.FC<ClientProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background h-screen flex overflow-hidden w-full" dir="rtl">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="h-screen flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 h-full text-text">
          <div className="h-[calc(100vh-115px)] px-2 py-2 lg:px-4 lg:py-4 overflow-y-auto bg-background">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayoutClient;