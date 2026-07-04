"use client";

import { BasketContextProps, BasketItem, BasketProviderProps } from "@/types/contexts";
import { OrderItemEntityCreation, ProductEntityGlobal } from "@/types/models";
import React, { createContext, useContext, useState } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2, CreditCard, Shirt } from "lucide-react";
import CustomButton from "@/libraries/forms/components/Button";
import Image from "next/image";
import { getImageUrl } from "@/lib/helpers";
import { useCreateOrder } from "@/features/useOrder";
import { useAppContext } from "@/libraries/project-provider/AppProvider";
import { useRouter } from "next/navigation";

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const BasketProvider = ({ children }: BasketProviderProps): React.JSX.Element => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

  const router = useRouter()
  const { mutateAsync, isPending } = useCreateOrder()
  const { isLoggedIn } = useAppContext()

  const addToBasket = (product: ProductEntityGlobal, quantity: number = 1) => {
    setBasket((prevBasket) => {
      const existingItemIndex = prevBasket.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex > -1) {
        const newBasket = [...prevBasket];
        newBasket[existingItemIndex].quantity += quantity;
        return newBasket;
      }

      return [...prevBasket, { product, quantity }];
    });
  };

  const removeFromBasket = (productId: number | string) => {
    setBasket((prevBasket) => {
      return prevBasket
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeProductFromBasket = (productId: number | string) => {
    setBasket((prevBasket) => prevBasket.filter((item) => !(item.product.id === productId)));
  };

  const emptyBasket = () => {
    setBasket([]);
  };

  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = basket.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const order = () => {
    if (!isLoggedIn) return router.push("/login")

    const items: OrderItemEntityCreation[] = basket.map(p => ({
      unitPrice: p.product.price,
      quantity: p.quantity,
      itemDiscountPercent: 0,
      productId: p.product.id
    }))
    mutateAsync({ items })

    emptyBasket()
    setIsBasketOpen(false)
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        removeProductFromBasket,
        emptyBasket,
        totalItems,
        totalPrice,
        isBasketOpen,
        setIsBasketOpen,
      }}
    >
      {children}

      {isBasketOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans" dir="rtl">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity animate-fade-in animate-duration-300"
            onClick={() => setIsBasketOpen(false)}
          />

          <div className="absolute inset-y-0 left-auto right-0 max-w-full flex pl-0 ">
            <div className="w-screen max-w-md bg-card text-text flex flex-col h-full shadow-2xl border-r border-background2 animate-fade-left animate-duration-300">

              <div className="p-5 border-b border-background2 flex items-center justify-between bg-background2/50">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-accent" />
                  <h2 className="font-heading font-bold text-lg">سلة التسوق الفاخرة</h2>
                  <span className="bg-primary text-reversed text-xs font-mono px-2 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                </div>
                <button
                  onClick={() => setIsBasketOpen(false)}
                  className="p-1 cursor-pointer rounded-full hover:bg-background2 text-text/60 hover:text-text transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-background/20">
                {basket.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-text/40">
                    <ShoppingBag className="w-16 h-16 stroke-[1.1] text-accent/50" />
                    <h3 className="font-heading font-semibold text-text">حقيبة التسوق فارغة</h3>
                    <p className="text-xs max-w-xs leading-relaxed">
                      تصفح تشكيلة الملابس والأقمشة الراقية وأضف مختاراتك إلى السلة لبدء الطلب.
                    </p>
                  </div>
                ) : (
                  basket.map((item) => (
                    <div
                      key={`basket-item-${item.product.id}`}
                      className="bg-card border border-background2 rounded-xl p-3 flex gap-3 shadow-sm hover:border-accent/20 transition-all group"
                    >
                      <div className="w-20 h-24 bg-background2 rounded-lg overflow-hidden flex-shrink-0 border border-background2 relative">
                        {item.product.imgUrl ?
                          <Image
                            src={getImageUrl(item.product.imgUrl)}
                            unoptimized
                            fill
                            alt={item.product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          : <span className="w-full h-full bg-background2 flex items-center justify-center">
                            <Shirt className="w-4 h-4" />
                          </span>}
                      </div>

                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <div className="flex justify-between items-start gap-1">
                            <h4 className="font-heading font-bold text-sm text-text line-clamp-1">
                              {item.product.title}
                            </h4>
                            <button
                              onClick={() => removeProductFromBasket(item.product.id)}
                              className="text-danger/60 cursor-pointer hover:text-danger p-1 rounded transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-text/50 font-sans mt-0.5 line-clamp-1">
                            {item.product.category}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="font-mono font-bold text-accent text-sm">
                            {(item.product.price * item.quantity)} ل.س
                          </span>

                          <div className="flex items-center border border-background2 bg-background2/40 rounded-md overflow-hidden">
                            <button
                              onClick={() => removeFromBasket(item.product.id)}
                              className="p-1.5 cursor-pointer text-text/60 hover:text-text hover:bg-background2 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 font-mono text-xs font-semibold text-text">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToBasket(item.product, 1)}
                              className="p-1.5 cursor-pointer text-text/60 hover:text-text hover:bg-background2 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {basket.length > 0 && (
                <div className="p-5 bg-card border-t border-background2 space-y-4 shadow-[0_-8px_24px_rgba(0,0,0,0.03)]">
                  <h3 className="font-heading font-bold text-sm border-b border-background2 pb-2 text-text/80">
                    ملخص الفاتورة التقديرية
                  </h3>

                  <div className="space-y-2.5 text-xs text-text/80 font-sans">
                    <div className="flex justify-between">
                      <span>إجمالي قطع الأزياء</span>
                      <span className="font-mono font-semibold">{totalItems} قطع</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الشحن والتجهيز الفاخر</span>
                      <span className="text-success font-medium">مجهّز مجاناً</span>
                    </div>
                    <div className="border-t border-background2/60 pt-3 flex justify-between text-sm font-bold text-text">
                      <span className="font-heading">المجموع الصافي</span>
                      <span className="font-mono text-base text-primary">
                        {totalPrice} ل.س
                      </span>
                    </div>
                  </div>

                  <CustomButton
                    label="الانتقال لإتمام الشراء"
                    icon={CreditCard}
                    disabled={isPending}
                    className="w-full py-3.5 bg-primary hover:bg-primary/95 text-reversed rounded-xl font-heading font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-accent/20"
                    onClick={order}
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export default BasketProvider;