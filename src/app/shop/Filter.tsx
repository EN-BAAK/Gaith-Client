import { FilterIcon, X } from "lucide-react";
import React from "react";
import { ShopFilterProps } from "@/types/components";
import FilterContent from "./FilterContent";



const Filter: React.FC<ShopFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  brands,
  selectedBrand,
  onSelectBrand,
  isOpen,
  onClose
}) => {


  return (
    <React.Fragment>
      <aside className="hidden lg:block w-54 bg-card border border-background2 rounded-2xl p-5 sticky top-24 h-fit shadow-2xs">
        <FilterContent
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          brands={brands}
          selectedBrand={selectedBrand}
          onSelectBrand={onSelectBrand}
          isMobile={false}
          onClose={onClose}
        />
      </aside>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-start animate-fade-in">
          <div
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-72 h-full bg-card border-l border-background2 p-5 space-y-5 shadow-2xl overflow-y-auto animate-slide-right z-10">
            <div className="flex justify-between items-center border-b border-background2 pb-3">
              <h3 className="font-heading font-bold text-text text-sm flex items-center gap-1.5">
                <FilterIcon className="w-4 h-4 text-accent" />
                <span>خيارات التصفية</span>
              </h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-background2 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-text/40 hover:text-text" />
              </button>
            </div>

            <FilterContent
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
              brands={brands}
              selectedBrand={selectedBrand}
              onSelectBrand={onSelectBrand}
              isMobile={false}
              onClose={onClose}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Filter;