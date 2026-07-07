"use client";

import React, { useState } from "react";
import { ChevronLeft, ShoppingCart, Award, Shirt, Plus, Minus } from "lucide-react";
import { useGetProductById } from "@/features/useProducts";
import { ProductEntityGlobal } from "@/types/models";
import CustomButton from "@/libraries/forms/components/Button";
import Image from "next/image";
import { getImageUrl } from "@/lib/helpers";
import FormatText from "@/components/FormatText";
import { useParams, useRouter } from "next/navigation";
import { useBasket } from "@/contexts/BasketProvider";
import Content from "@/app/dashboard/Contetns";
import Loading from "../Loading";
import Header from "@/app/Header";
import ShopCart from "../ShopCart";
import Footer from "@/app/Footer";

export default function ShopProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToBasket } = useBasket();

  const [quantity, setQuantity] = useState<number>(1);

  const productId = params.id as string;

  const { data, isFetching, isError, refetch } = useGetProductById(productId);
  const product: ProductEntityGlobal | undefined = data?.data;

  const goBack = () => router.push("/shop");

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToBasket = () => {
    if (product) {
      addToBasket(product, quantity);
    }
  };

  return (
    <React.Fragment>
      <Header
        NestedElements={<ShopCart />}
      />

      <div className="space-y-6 animate-fade-in animate-duration-300 w-full h-full p-4 md:p-6 max-w-7xl mx-auto mt-18" dir="rtl">
        <div className="flex items-center gap-2 border-b border-background2 pb-5">
          <button
            onClick={goBack}
            className="p-2 hover:bg-background2 rounded-lg transition-colors text-text/60 hover:text-text cursor-pointer"
            title="العودة للمتجر"
          >
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </button>
          <div>
            <h1 className="font-heading text-xl md:text-2xl font-bold text-text flex items-center gap-2">
              تفاصيل المنتج
            </h1>
          </div>
        </div>

        <Content
          Skeletons={<Loading />}
          isEmpty={!product}
          emptyTitle="المنتج غير متوفر حالياً"
          emptyDesc="تعذر العثور على تشكيلة الأزياء المطلوبة، ربما نفدت الكمية أو تم تغيير الرابط."
          isError={isError}
          errorTitle="خطأ في تحميل تفاصيل العرض"
          errorDesc="حدثت مشكلة أثناء الاتصال بالخادم، يرجى إعادة المحاولة لاحقاً."
          errorActionTitle="إعادة تحميل"
          errorAction={refetch}
          isLoading={isFetching && !product}
        >
          {product && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-5">
                <div className="bg-card border border-background2 rounded-2xl overflow-hidden shadow-sm relative group">
                  <div className="relative w-full h-96 bg-primary/5 flex items-center justify-center p-2 border-b border-accent/20">
                    {product.imgUrl ? (
                      <Image
                        unoptimized
                        src={getImageUrl(product.imgUrl)}
                        alt={product.title}
                        fill
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                      />
                    ) : (
                      <div className="text-primary/30 flex flex-col items-center gap-2">
                        <Shirt className="w-12 h-12 stroke-[1.2]" />
                      </div>
                    )}

                    <span className="absolute top-4 right-4 bg-accent text-reversed text-xs px-3 py-1 rounded-md font-sans font-medium shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">

                <div className="bg-card border border-background2 p-6 rounded-2xl space-y-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      {product.brand && (
                        <div className="flex items-center gap-1.5 text-xs text-accent font-sans mb-1">
                          {product.brand.imgUrl ? (
                            <Image
                              unoptimized
                              width={15}
                              height={15}
                              src={getImageUrl(product.brand.imgUrl)}
                              alt={product.brand.name}
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <Award className="w-3.5 h-3.5" />
                          )}
                          <span className="font-medium">{product.brand.name}</span>
                        </div>
                      )}
                      <h2 className="font-heading font-bold text-2xl text-text">{product.title}</h2>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-3xl font-extrabold text-primary block">
                        {product.price.toLocaleString("ar-EG")} ل.س
                      </span>
                      <span className="text-[10px] text-text/40 block mt-0.5">شامل ضريبة القيمة المضافة</span>
                    </div>
                  </div>

                  <p className="text-sm font-sans text-text/80 leading-relaxed bg-background/50 p-3 rounded-xl border border-background2/60">
                    {product.summarize}
                  </p>
                </div>

                <div className="bg-card border border-background2 p-6 rounded-2xl space-y-5 shadow-xs">
                  {product.colors && product.colors.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-heading font-bold text-text/50 block">الألوان المتوفرة للقطعة:</span>
                      <div className="flex flex-wrap gap-2.5">
                        {product.colors.map((color) => {
                          const hex = color.startsWith("#") ? color : `#${color}`;
                          return (
                            <div className="p-0.5 border border-background2 rounded-full" key={`details-shop-color-${color}`}>
                              <div
                                className="w-4 h-4 rounded-full shadow-2xs cursor-pointer hover:scale-110 transition-transform"
                                style={{ backgroundColor: hex }}
                                title={hex}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {product.sizes && product.sizes.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-heading font-bold text-text/50 block">المقاسات المتاحة للتسوق:</span>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={`details-shop-size-${size}`}
                            className="px-3 py-1 bg-background border border-background2 text-text font-mono font-bold text-xs uppercase rounded-lg shadow-2xs"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {product.description && (
                  <div className="bg-card border border-background2 p-6 rounded-2xl space-y-3 shadow-xs">
                    <span className="text-xs font-heading font-bold text-text/50 block">وصف وتفاصيل خامة التصنيع:</span>
                    <div className="text-sm font-sans text-text/70 leading-relaxed whitespace-pre-line">
                      <FormatText text={product.description} />
                    </div>
                  </div>
                )}

                <div className="bg-card border border-background2 p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 bg-background2/20">
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                    <span className="text-xs font-heading font-bold text-text/60">الكمية المطلوبة:</span>

                    <div className="flex items-center border border-background2 bg-card rounded-xl overflow-hidden shadow-2xs">
                      <button
                        onClick={handleDecrement}
                        className="p-2.5 text-text/60 hover:text-text hover:bg-background2 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-5 font-mono text-sm font-bold text-text">
                        {quantity}
                      </span>
                      <button
                        onClick={handleIncrement}
                        className="p-2.5 text-text/60 hover:text-text hover:bg-background2 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <CustomButton
                    icon={ShoppingCart}
                    label="إضافة إلى حقيبة التسوق"
                    onClick={handleAddToBasket}
                    className="w-full sm:w-fit py-3 px-6 bg-primary text-reversed rounded-xl font-heading font-bold text-sm shadow-md transition-all border border-accent/20"
                  />
                </div>

              </div>
            </div>
          )}
        </Content>
      </div>

      <Footer />
    </React.Fragment>
  );
}