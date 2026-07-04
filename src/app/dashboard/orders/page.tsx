"use client";

import React, { useMemo, useState } from "react";
import { ShoppingBag, Box } from "lucide-react";
import Sidebar from "./Sidebar";
import OrderItems from "./OrderItems";
import LoadingOrders from "./LoadingOrders";
import Content from "../Contetns";
import { useGetAllOrdersSettings } from "@/features/useOrder";
import { cn } from "@/lib/utils";
import { ID } from "@/types/global";

const OrdersMasterPage: React.FC = () => {
  const [selectedOrderId, setSelectedOrderId] = useState<ID | null>(null);

  const { data, isFetching, isError, refetch } = useGetAllOrdersSettings(20);
  const orders = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data.items ?? []) ?? [];
  }, [data]);

  const activeOrder = orders.find((o) => o.id === selectedOrderId);

  const closeOrder = () => setSelectedOrderId(null)

  return (
    <div className="flex flex-col h-full w-full animate-fade-in animate-duration-300 overflow-hidden">
      <div className="border-b border-background2 pb-4 mb-4">
        <h1 className="font-heading text-2xl font-bold text-text flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-accent" />
          سجل طلبات الفواتير والمبيعات
        </h1>
        <p className="text-sm text-text/70 mt-1 font-sans">
          متابعة الطلبات المكتملة، حساب نسب الخصومات الإضافية وتدقيق الفواتير الصادرة للعملاء.
        </p>
      </div>

      <Content
        Skeletons={<div className="flex gap-4"><LoadingOrders /><div className="flex-1 bg-card rounded-xl border border-background2" /></div>}
        isEmpty={orders.length === 0}
        emptyTitle="لا توجد أي فواتير أو طلبات حتى الآن"
        emptyDesc="عند إتمام عمليات بيع في شاشات المتجر، ستظهر المستندات التفصيلية للفواتير هنا."
        isError={isError}
        errorTitle="فشل مزامنة الطلبيات"
        errorDesc="حدثت مشكلة أثناء محاولة تحديث الفواتير من السيرفر."
        errorActionTitle="إعادة تحميل"
        errorAction={refetch}
        isLoading={isFetching}
      >
        <div className="flex flex-col lg:flex-row border border-background2 rounded-2xl bg-card overflow-hidden h-[calc(100vh-220px)]">

          <div className={cn(activeOrder && "md:block hidden")}>
            <Sidebar
              orders={orders}
              activeOrderId={selectedOrderId}
              onSelectOrder={(id) => setSelectedOrderId(id)}
            />
          </div>

          <div className="flex-1 bg-background/20 py-5 h-full flex flex-col min-w-0 border-r lg:border-r-0 border-t lg:border-t-0 border-background2 min-h-[100px] overflow-y-auto">
            {activeOrder ? (
              <OrderItems orderId={activeOrder.id} closeOrder={closeOrder} />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 text-text/40 gap-3">
                <Box className="w-16 h-16 stroke-[1.1] text-accent/50 animate-bounce animate-duration-1000" />
                <h3 className="font-heading font-semibold text-text">لم يتم تحديد أي طلب بعد</h3>
                <p className="text-xs max-w-xs leading-relaxed font-sans">
                  يرجى النقر على أحد الطلبات المتواجدة في القائمة الجانبية اليمنى لاستعراض وتدقيق الفاتورة وحساب القطع المشحونة.
                </p>
              </div>
            )}
          </div>

        </div>
      </Content>
    </div>
  );
};

export default OrdersMasterPage;