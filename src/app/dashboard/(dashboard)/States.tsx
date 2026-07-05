"use client";

import React from "react";
import { Users, UserCheck, Package, ShoppingBag } from "lucide-react";
import StatCard from "./Card";
import { DashboardStatesProps } from "@/types/components";

const DashboardStates: React.FC<DashboardStatesProps> = ({ cardsData }) => {
  const { totalUsers, wholesaleUsers, totalProducts, activeOrdersCount, revenue } = cardsData;

  const revDiff = revenue.currentMonth - revenue.previousMonth;
  const revenueChangeText = revDiff >= 0 
    ? `+${revDiff.toLocaleString("ar-EG")} ل.س` 
    : `${revDiff.toLocaleString("ar-EG")} ل.س`;

  const stats = [
    {
      label: "إجمالي المستخدمين",
      value: totalUsers.toLocaleString("ar-EG"),
      change: `مفرق: ${totalUsers - wholesaleUsers}`,
      Icon: Users,
      color: "#2563A8",
    },
    {
      label: "مستخدمي الجملة",
      value: wholesaleUsers.toLocaleString("ar-EG"),
      change: "نشط",
      Icon: UserCheck,
      color: "#2E7D5B",
    },
    {
      label: "إجمالي المنتجات",
      value: totalProducts.toLocaleString("ar-EG"),
      change: "بالمخزن",
      Icon: Package,
      color: "#C58A1A",
    },
    {
      label: "الطلبات النشطة",
      value: activeOrdersCount.toLocaleString("ar-EG"),
      change: revenueChangeText,
      Icon: ShoppingBag,
      color: "#B42318",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStates;