import { ShopBrandListProps } from "@/types/components";
import { ID } from "@/types/global";
import React from "react";


export const BrandList: React.FC<ShopBrandListProps> = ({
  brands,
  selectedBrand,
  onSelectBrand,
  onCloseModal,
}) => {
  const handleSelect = (id: ID | undefined) => {
    onSelectBrand(id);
    if (onCloseModal) onCloseModal();
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => handleSelect(undefined)}
        className={`w-full text-right px-4 py-2.5 rounded-md text-sm font-heading font-medium transition-all cursor-pointer ${selectedBrand === undefined
          ? "bg-primary text-reversed shadow-xs"
          : "text-muted hover:bg-background2"
          }`}
      >
        كل الماركات
      </button>

      {brands.map((brand) => (
        <button
          key={`sidebar-brand-${brand.id}`}
          onClick={() => handleSelect(brand.id)}
          className={`w-full text-right px-4 py-2.5 rounded-md text-sm font-heading font-medium transition-all cursor-pointer ${selectedBrand === brand.id
            ? "bg-primary text-reversed shadow-xs"
            : "text-muted hover:bg-background2"
            }`}
        >
          {brand.name}
        </button>
      ))}
    </div>
  );
};