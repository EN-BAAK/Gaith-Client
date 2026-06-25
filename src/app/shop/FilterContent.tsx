import { Filter } from "lucide-react";
import { CategoryList } from "./CategoryList";
import { BrandList } from "./BrandList";
import { ShopFilterContentProps } from "@/types/components";

const FilterContent: React.FC<ShopFilterContentProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  brands,
  selectedBrand,
  onSelectBrand,
  isMobile = false,
  onClose
}) => (
  <div className="space-y-5">
    {!isMobile && (
      <div className="flex items-center gap-1.5 pb-2 border-b border-background2/60 text-text/80 font-heading font-bold text-sm">
        <Filter className="w-4 h-4 text-accent" />
        <span>الفلاتر</span>
      </div>
    )}

    <div className="space-y-2">
      <span className="text-xs font-heading font-bold text-muted block px-1">الفئة</span>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        onCloseModal={isMobile ? onClose : undefined}
      />
    </div>

    <hr className="border-background2/60" />

    <div className="space-y-2">
      <span className="text-xs font-heading font-bold text-muted block px-1">الماركة / البراند</span>
      <BrandList
        brands={brands}
        selectedBrand={selectedBrand}
        onSelectBrand={onSelectBrand}
        onCloseModal={isMobile ? onClose : undefined}
      />
    </div>
  </div>
);

export default FilterContent