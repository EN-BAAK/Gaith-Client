"use client";

import React, { useState } from "react";
import { FileText, Receipt, Percent, Save, Loader2 } from "lucide-react";
import OrderItemRow from "./OrderItem";
import { DashboardOrderItemsProps } from "@/types/components";
import { OrderEntity } from "@/types/models";
import LoadingItems from "./LoadingItems";
import Content from "../Contetns";
import { useGetOrderByIdSettings, useUpdateOrder } from "@/features/useOrder";
import CustomButton from "@/libraries/forms/components/Button";

const OrderItems: React.FC<DashboardOrderItemsProps> = ({ orderId, closeOrder }) => {
  const { data, isFetching, isError, refetch } = useGetOrderByIdSettings(orderId);
  const { mutateAsync: updateOrder, isPending: isUpdating } = useUpdateOrder();

  const order: OrderEntity | undefined = data?.data;

  const [userInvoiceDiscount, setUserInvoiceDiscount] = useState<number | null>(null);
  const [userItemsDiscounts, setUserItemsDiscounts] = useState<{ [key: string]: number }>({});

  const [prevOrderId, setPrevOrderId] = useState<string | number | null>(null);
  if (orderId !== prevOrderId) {
    setPrevOrderId(orderId);
    setUserInvoiceDiscount(null);
    setUserItemsDiscounts({});
  }

  const invoiceDiscountPercent = userInvoiceDiscount ?? order?.invoiceDiscountPercent ?? 0;

  const handlePayClick = async () => {
    if (!order || order.isPaid || isUpdating) return;

    try {
      await updateOrder({
        id: order.id,
        data: {
          isPaid: true
        }
      });
      refetch();
    } catch (error) {
      console.error("Failed to update payment status:", error);
    }
  };

  const handleSaveChanges = async () => {
    if (!order || isUpdating) return;

    try {
      await updateOrder({
        id: order.id,
        data: {
          invoiceDiscountPercent: invoiceDiscountPercent,
        }
      });
      refetch();
    } catch (error) {
      console.error("Failed to update discounts:", error);
    }
  };

  return (
    <div className={`flex-1 h-full min-w-0 ${orderId ? "block" : "hidden md:block"}`}>
      <Content
        Skeletons={<LoadingItems />}
        isEmpty={!order}
        emptyTitle="تفاصيل الطلب غير متوفرة"
        emptyDesc="تعذر العثور على عناصر هذا الطلب، يرجى اختيار طلب آخر."
        isError={isError}
        errorTitle="خطأ في تحميل عناصر الفاتورة"
        errorDesc="حدث خطأ أثناء محاولة جلب تفاصيل هذا الطلب من الخادم."
        errorActionTitle="إعادة المحاولة"
        errorAction={refetch}
        isLoading={isFetching}
      >
        {order && (() => {
          const subTotal = order.items?.reduce((sum, item) => {
            const currentItemDiscount = userItemsDiscounts[item.id] ?? item.itemDiscountPercent ?? 0;
            const discountAmount = item.unitPrice * (currentItemDiscount / 100);
            return sum + (item.unitPrice - discountAmount) * item.quantity;
          }, 0) || 0;

          const invoiceDiscount = subTotal * (invoiceDiscountPercent / 100);
          const finalTotal = subTotal - invoiceDiscount;

          return (
            <div className="p-4 md:p-6 space-y-6 overflow-y-auto h-full">
              <div className="flex justify-between items-center border-b border-background2 pb-4">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-accent" />
                  <div>
                    <h2 className="font-heading font-bold text-lg text-text">تفاصيل الفاتورة للطلب #{order.id}</h2>
                    <p className="text-xs text-text/50 font-sans mt-0.5">
                      تاريخ التسجيل: {new Date(order.createdAt).toLocaleString("ar-EG")}
                    </p>
                  </div>
                </div>

                <button
                  disabled={order.isPaid || isUpdating}
                  onClick={handlePayClick}
                  className={`px-3 py-1 rounded-full text-xs font-heading font-semibold transition-all flex items-center gap-1.5 ${order.isPaid
                    ? "bg-success/10 text-success cursor-not-allowed"
                    : "bg-danger/10 text-danger hover:bg-danger/20 cursor-pointer active:scale-95"
                    }`}
                >
                  {isUpdating && !order.isPaid && <Loader2 className="w-3 h-3 animate-spin" />}
                  {order.isPaid ? "مسددة" : "تحصيل"}
                </button>
              </div>

              <div className="bg-card rounded-xl border border-background2 overflow-x-auto shadow-xs">
                <table className="w-full text-right border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-background2/60 border-b border-background2 text-text/80 font-heading text-xs font-semibold">
                      <th className="p-4">المنتج والمواصفات</th>
                      <th className="p-4 text-center">الكمية</th>
                      <th className="p-4 text-center">سعر الوحدة</th>
                      <th className="p-4 text-left pl-6">الإجمالي الصافي</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items?.map((item) => {
                      const currentItemDiscount = userItemsDiscounts[item.id] ?? item.itemDiscountPercent ?? 0;
                      return (
                        <tr key={`order-item-row-${item.id}`} className="border-b border-background2/40 last:border-0">
                          <td className="p-4">
                            <OrderItemRow item={item} />
                          </td>
                          <td className="p-4 text-center font-mono text-sm">{item.quantity}</td>
                          <td className="p-4 text-center font-mono text-sm">{item.unitPrice.toLocaleString("ar-EG")} ل.س</td>
                          <td className="p-4 text-left pl-6 font-mono text-sm text-text/90">
                            {((item.unitPrice - (item.unitPrice * (currentItemDiscount / 100))) * item.quantity).toLocaleString("ar-EG")} ل.س
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-card border border-background2 p-4 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-background2 text-text/60 rounded-lg">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans text-text/40 block">المجموع الصافي الأولي</span>
                    <span className="font-mono font-bold text-sm text-text">{subTotal.toLocaleString("ar-EG")} ل.س</span>
                  </div>
                </div>

                <div className="bg-card border border-background2 p-4 rounded-xl flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-background2 text-danger rounded-lg">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-sans text-text/40 block">خصم قسيمة الفاتورة</span>
                      <span className="font-mono font-bold text-sm text-danger">
                        -{invoiceDiscount.toLocaleString("ar-EG")} ل.س
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      disabled={order.isPaid}
                      value={invoiceDiscountPercent}
                      onChange={(e) => setUserInvoiceDiscount(Math.min(100, Math.max(0, Number(e.target.value))))}
                      className="w-14 text-center p-1 bg-background border border-background2 rounded-md font-mono text-sm focus:outline-accent disabled:opacity-50"
                    />
                    <span className="text-xs text-text/60 font-mono">%</span>
                  </div>
                </div>

                <div className="bg-accent/5 border border-accent/20 p-4 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-accent text-reversed rounded-lg">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans text-accent block">المجموع النهائي المستحق</span>
                    <span className="font-mono font-extrabold text-base text-primary">
                      {finalTotal.toLocaleString("ar-EG")} ل.س
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-background2/60">
                <CustomButton
                  className="w-fit rounded-sm"
                  variant="accent-outline"
                  label="العودة"
                  onClick={closeOrder}
                />

                {!order.isPaid && (
                  <button
                    onClick={handleSaveChanges}
                    disabled={isUpdating}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-reversed rounded-md text-sm font-semibold shadow-xs hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isUpdating ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    حفظ التعديلات والخصومات
                  </button>
                )}
              </div>
            </div>
          );
        })()}
      </Content>
    </div>
  );
};

export default OrderItems;