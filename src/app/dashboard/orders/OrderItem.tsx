"use client";

import React from "react";
import { Tag, Package } from "lucide-react";
import { DashboardOrderItemRowProps } from "@/types/components";

const OrderItemRow: React.FC<DashboardOrderItemRowProps> = ({ item }) => {
  const discountAmount = item.unitPrice * (item.itemDiscountPercent / 100);
  const finalUnitPrice = item.unitPrice - discountAmount;
  const totalItemPrice = finalUnitPrice * item.quantity;

  return (
    <tr className="hover:bg-background/40 transition-colors border-b border-background2/40 last:border-0 font-sans text-xs text-text">
      <td className="p-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-background2 flex items-center justify-center text-text/50">
            <Package className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-text">معرف المنتج: #{item.productId}</span>
            {item.itemDiscountPercent > 0 && (
              <span className="text-[10px] text-danger font-medium flex items-center gap-0.5">
                <Tag className="w-2.5 h-2.5" />
                خصم القطعة {item.itemDiscountPercent}%
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="p-4 font-mono text-center">{item.quantity}</td>
      <td className="p-4 font-mono text-center">{item.unitPrice.toLocaleString("ar-EG")} ل.س</td>
      <td className="p-4 font-mono text-left pl-6 font-bold text-accent">
        {totalItemPrice.toLocaleString("ar-EG")} ل.س
      </td>
    </tr>
  );
};

export default OrderItemRow;