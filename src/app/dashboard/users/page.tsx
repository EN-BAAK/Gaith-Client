"use client";

import React from "react";
import { Users } from "lucide-react";
import { User } from "@/types/models";
import UserRow from "./User";
import Loading from "./Loading";
import Content from "../Contetns";
import { useGetVerifiedUsersSettings } from "@/features/useUser";

const UsersPage: React.FC = () => {
  const { data, isFetching, refetch, isError } = useGetVerifiedUsersSettings();
  const users: User[] = data?.data || [];

  return (
    <div className="space-y-6 animate-fade-in animate-duration-300 w-full h-full">
      <div className="border-b border-background2 pb-5">
        <h1 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
          <Users className="w-6 h-6 text-accent" />
          سجل مستخدمي المنصة
        </h1>
        <p className="text-sm text-text/70 mt-1 font-sans">
          عرض واستعراض بيانات العملاء المسجلين بنظام المفرق والجملة وصلاحيات الإدارة.
        </p>
      </div>

      <Content
        Skeletons={<Loading />}
        isEmpty={users.length === 0}
        emptyTitle="لا يوجد مستخدمون مسجلون بعد"
        emptyDesc="عند قيام العملاء بإنشاء حسابات في المتجر، ستظهر بياناتهم هنا تلقائياً."
        isError={isError}
        errorTitle="فشل الاتصال بالخادم"
        errorDesc="حدث خطأ أثناء تحميل سجل المستخدمين، يرجى إعادة المحاولة."
        errorActionTitle="إعادة التحميل"
        errorAction={refetch}
        isLoading={isFetching && users.length === 0}
      >
        <div className="bg-card rounded-xl border border-background2 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="bg-background2 border-b border-background2 text-text font-heading md:text-sm text-xs font-semibold">
                  <th className="p-4">الاسم والمستخدم</th>
                  <th className="p-4">البريد الإلكتروني</th>
                  <th className="p-4 text-right">رقم الهاتف</th>
                  <th className="p-4">نوع الحساب</th>
                  <th className="p-4 text-left pl-6">تاريخ الانضمام</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-background2 font-sans md:text-sm text-xs text-text">
                {users.map((userItem) => (
                  <UserRow
                    key={`user-${userItem.id}`}
                    user={userItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default UsersPage;