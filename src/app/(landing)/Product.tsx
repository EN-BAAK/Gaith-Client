"use client";

import React from "react";
import { Award, Eye, Shirt, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { getImageUrl } from "@/lib/helpers";
import CustomButton from "@/libraries/forms/components/Button";
import { LandingProductProps } from "@/types/components";

const Product: React.FC<LandingProductProps> = ({ product, goToShop, gotToProduct }) => {
  return (
    <div
      className="bg-card border border-background2 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group animate-fade-in">
      <div className="relative w-full h-50 bg-primary/30 flex items-center justify-center overflow-hidden border-b border-accent/40">
        {product.imgUrl ? (
          <Image
            unoptimized
            src={getImageUrl(product.imgUrl)}
            alt={product.title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="text-muted flex-col items-center gap-2">
            <Shirt className="w-10 h-10 stroke-[1.2]" />
          </div>
        )}

        <span className="absolute top-3 right-3 bg-accent text-reversed text-xs px-3 py-0.5 rounded-md font-sans font-medium">
          {product.category}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1 justify-between">
        <div className="space-y-2">
          <h3 className="text-text text-base line-clamp-1 group-hover:text-accent transition-colors">
            {product.title}
          </h3>

          <div className="flex items-center gap-1 text-xs text-text/50 font-sans">
            {product.brand?.imgUrl ? (
              <Image
                unoptimized
                width={20}
                height={20}
                src={getImageUrl(product.brand.imgUrl)}
                alt={product.title}
                className="w-3.5 h-3.5 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <Award className="w-3.5 h-3.5 text-accent" />
            )}
            <span className="text-brand">{product.brand?.name || "بدون علامة"}</span>
          </div>
          <p className="text-xs text-muted font-sans line-clamp-2 mt-0.5 leading-relaxed">
            {product.summarize}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 py-1">
              {product.colors.map((color) => {
                const hex = color.startsWith("#") ? color : `#${color}`;
                return (
                  <div className="p-0.5 border-1 border-accent/50 rounded-full" key={`shop-color-${color}`} >
                    <div
                      className="w-2.5 h-2.5 rounded-full shadow-2xs cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size) => (
                <div key={`shop-size-${size}`}>
                  <span className="text-[10px] bg-background text-muted border border-background2 px-2 py-0.5 rounded-md uppercase">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-2 mt-1 flex items-center gap-2">
          <CustomButton
            icon={ShoppingCart}
            label="تسوق"
            onClick={() => goToShop?.()}
            className="w-fit rounded-sm"
          />

          <CustomButton
            icon={Eye}
            variant="info-outline"
            onClick={gotToProduct}
            className="w-fit rounded-sm"
          />

          <div className="ms-auto">
            <span className="font-bold text-md text-text">{product.price}ل.س</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Product;