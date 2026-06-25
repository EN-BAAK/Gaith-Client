import { ShopCategoryListProps } from "@/types/components";
import { ID } from "@/types/global";

export const CategoryList: React.FC<ShopCategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onCloseModal,
}) => {
  const handleSelect = (id: ID | undefined) => {
    onSelectCategory(id);
    if (onCloseModal) onCloseModal();
  };
  return (
    <div className="space-y-2">
      <button
        onClick={() => handleSelect(undefined)}
        className={`w-full text-right px-4 py-2.5 rounded-md text-sm font-heading font-medium transition-all cursor-pointer ${selectedCategory === undefined
          ? "bg-primary text-reversed shadow-xs"
          : "text-muted hover:bg-background2"
          }`}
      >
        الكل
      </button>

      {categories.map((cat) => (
        <button
          key={`sidebar-cat-${cat.id}`}
          onClick={() => handleSelect(cat.id)}
          className={`w-full text-right px-4 py-2.5 rounded-md text-sm font-heading font-medium transition-all cursor-pointer ${selectedCategory === cat.id
            ? "bg-primary text-reversed shadow-xs"
            : "text-muted hover:bg-background2"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};