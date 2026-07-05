"use client";

import { useGetDashboardSettings } from "@/features/useDashboard";
import Content from "./Contetns"
import React from "react";
import DashboardLoading from "./(dashboard)/Loading";
import DashboardStates from "./(dashboard)/States";
import DashboardPlot from "./(dashboard)/Plot";
import { User } from "@/types/models";

const DashboardPage: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetDashboardSettings();
  const dashboardData = data?.data;

  return (
    <div className="p-4 md:p-6 space-y-6 w-full max-w-(screen-2xl) mx-auto">
      <Content
        Skeletons={<DashboardLoading />}
        isEmpty={!dashboardData}
        emptyTitle="لا توجد بيانات لوحة تحكم"
        emptyDesc="تعذر العثور على أي إحصائيات لعرضها حالياً."
        isError={isError}
        errorTitle="خطأ في جلب بيانات لوحة التحكم"
        errorDesc="حدثت مشكلة أثناء الاتصال بالخادم وتحديث الإحصائيات الفورية."
        errorActionTitle="تحديث البيانات"
        errorAction={refetch}
        isLoading={isLoading}
      >
        {dashboardData && (
          <>
            <DashboardStates cardsData={dashboardData.cards} />

            <DashboardPlot chartsData={dashboardData.charts} />

            <div className="grid grid-cols-1 gap-6 pt-2">
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="px-5 py-4 border-b border-border flex justify-between items-center bg-secondary/10">
                    <h3 className="font-semibold text-foreground text-sm font-heading">أحدث الأعضاء المنضمين</h3>
                    <span className="text-[10px] font-mono bg-success/10 text-success px-2 py-0.5 rounded-md">جديد</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right">
                      <thead>
                        <tr className="bg-secondary/40 border-b border-border text-xs text-muted-foreground">
                          <th className="p-3 pr-5">الاسم والبريد</th>
                          <th className="p-3 text-center">التصنيف الرسمي</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50 font-sans text-xs">
                        {dashboardData.recentActivity.latestUsers.map((user: User) => (
                          <tr key={user.id} className="hover:bg-secondary/30 transition-all">
                            <td className="p-3 pr-5">
                              <div className="font-medium text-text truncate max-w-[140px]">{user.name}</div>
                              <div className="text-[10px] text-muted-foreground font-mono truncate max-w-[160px]">{user.email}</div>
                            </td>
                            <td className="p-3 text-center">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-heading ${user.role === "admin" ? "bg-red-500/10 text-red-600" : "bg-blue-500/10 text-blue-600"
                                }`}>
                                {user.role === "admin" ? "مسؤول النظام" : "مشتري مفرق"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </Content>
    </div>
  );
};

export default DashboardPage;