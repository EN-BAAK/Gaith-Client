"use client";

import React from "react";
import { Search } from "lucide-react";
import { DashboardOrderSidebarProps } from "@/types/components";

const Sidebar: React.FC<DashboardOrderSidebarProps> = ({ orders, activeOrderId, onSelectOrder }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredOrders = orders.filter((order) =>
    String(order.id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusDetails = (status: string) => {
    switch (status?.toUpperCase()) {
      case "COMPLETED":
        return { text: "مكتمل", className: "text-success bg-success/10" };
      case "PENDING":
        return { text: "قيد الانتظار", className: "text-warning bg-warning/10" };
      default:
        return { text: "ملغي", className: "text-danger bg-danger/10" };
    }
  };

  return (
    <div className="w-full lg:w-80 h-full overflow-y-auto bg-card border-l border-background2 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-background2 relative">
        <input
          type="text"
          placeholder="ابحث برقم الطلب..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-background border border-background2 rounded-xl pr-9 pl-3 py-2 text-xs text-text placeholder:text-text/40 focus:outline-hidden focus:border-accent/40 font-sans"
        />
        <Search className="w-4 h-4 text-text/40 absolute top-1/2 right-7 -translate-y-1/2" />
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-background2/40">
        {filteredOrders.length === 0 ? (
          <div className="p-8 text-center text-xs text-text/40 font-sans">
            لا توجد طلبات مطابقة للبحث.
          </div>
        ) : (
          filteredOrders.map((order) => {
            const status = getStatusDetails(order.status);
            const isActive = activeOrderId === order.id;

            return (
              <div
                key={`sidebar-order-${order.id}`}
                onClick={() => onSelectOrder(order.id)}
                className={`p-4 flex flex-col gap-2.5 cursor-pointer transition-all ${isActive
                  ? "bg-accent/5 border-r-2 border-accent"
                  : "hover:bg-background/40"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-sm text-text">
                    طلب #{order.id}
                  </span>
                  <span className="text-[10px] text-text/40 font-sans">{new Date(order.createdAt).toLocaleString("ar-EG")}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium font-heading ${status.className}`}>
                    {status.text}
                  </span>

                  <div className="flex items-center gap-1">
                    <span className={`text-[10px] font-sans ${order.isPaid ? "text-success" : "text-danger"}`}>
                      {order.isPaid ? "مدفوع" : "غير مدفوع"}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${order.isPaid ? "bg-success" : "bg-danger"}`} />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Sidebar;