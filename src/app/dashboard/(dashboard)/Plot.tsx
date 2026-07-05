"use client";

import { DashboardPlotProps } from "@/types/components";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import React from "react";

const DashboardPlot: React.FC<DashboardPlotProps> = ({ chartsData }) => {
  const dataMap: { [key: string]: { date: string; currentRevenue: number; previousRevenue: number } } = {};

  chartsData.previousMonth.forEach((item) => {
    const day = new Date(item.date).getDate().toString();
    dataMap[day] = { date: `يوم ${day}`, currentRevenue: 0, previousRevenue: item.revenue };
  });

  chartsData.currentMonth.forEach((item) => {
    const day = new Date(item.date).getDate().toString();
    if (dataMap[day]) {
      dataMap[day].currentRevenue = item.revenue;
    } else {
      dataMap[day] = { date: `يوم ${day}`, currentRevenue: item.revenue, previousRevenue: 0 };
    }
  });

  const chartData = Object.values(dataMap).sort((a, b) => parseInt(a.date) - parseInt(b.date));

  const displayData = chartData.length > 0 ? chartData : []

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-xs">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground font-heading">تحليل الإيرادات ومقارنة المبيعات</h3>
        <p className="text-[11px] text-muted-foreground font-sans">مقارنة أداء الإيرادات الفورية بين الشهر الحالي والشهر السابق</p>
      </div>

      <div className="w-full h-72 font-mono text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={displayData} margin={{ top: 10, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563A8" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2563A8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#64748B" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#64748B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(var(--border), 0.3)" />
            <XAxis dataKey="date" tickLine={false} stroke="#888888" />
            <YAxis tickLine={false} axisLine={false} stroke="#888888" />
            <Tooltip
              contentStyle={{ background: "var(--card)", borderColor: "rgba(var(--border), 0.5)", borderRadius: "8px" }}
              labelClassName="text-foreground font-heading font-bold"
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area name="الشهر الحالي" type="monotone" dataKey="currentRevenue" stroke="#2563A8" fillOpacity={1} fill="url(#colorCurrent)" strokeWidth={2} />
            <Area name="الشهر السابق" type="monotone" dataKey="previousRevenue" stroke="#64748B" fillOpacity={1} fill="url(#colorPrevious)" strokeWidth={2} strokeDasharray="4 4" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardPlot;