"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useDebouncedSearch } from "@/hooks/useHelpers";
import Product from "./Product";
import Filter from "./Filter";
import Loading from "./Loading";
import { ID } from "@/types/global";
import { useGetAllCategories } from "@/features/useCategories";
import { useGetAllProducts } from "@/features/useProducts";
import Content from "../dashboard/Contetns";
import { useGetAllBrands } from "@/features/useBrands";
import Header from "../Header";
import HeaderNestedElement from "./HeaderNestedElement";
import { useBasket } from "@/contexts/BasketProvider";
import { useRouter } from "next/navigation";

const ShopProductsPage: React.FC = () => {
  const { addToBasket } = useBasket()
  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState<ID | undefined>(undefined);
  const [selectedBrand, setSelectedBrand] = useState<ID | undefined>(undefined);
  const { search, setSearch, debouncedSearch } = useDebouncedSearch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data: catData } = useGetAllCategories();
  const categories = catData?.data || [];

  const { data: braData } = useGetAllBrands();
  const brands = braData?.data || [];

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, refetch, } = useGetAllProducts(20, debouncedSearch, selectedCategory, selectedBrand);

  const products = useMemo(() => {
    return data?.pages?.flatMap((page) => page.data.items ?? []) ?? [];
  }, [data]);

  const totalCount = data?.pages?.[0]?.data?.totalCount ?? products.length;

  const hasActiveFilters = useMemo(() => {
    return selectedCategory !== undefined || selectedBrand !== undefined;
  }, [selectedCategory, selectedBrand]);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: "300px" }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetching, fetchNextPage]);

  return (
    <div className="h-screen bg-background2 w-full h-full mx-auto font-sans text-right overflow-hidden" dir="rtl">
      <Header
        NestedElements={<HeaderNestedElement
          search={search}
          setSearch={setSearch}
          openFilter={() => setIsFilterOpen(true)}
          hasActiveFilters={hasActiveFilters}
        />}
      />

      <div className="lg:p-4 lg:mt-18 mt-20">
        <div className="flex items-start justify-between lg:gap-4">
          <div className="flex-1 lg:col-span-3 lg:order-1 space-y-4 h-[calc(100vh-95px)] overflow-y-auto p-2 lg:p-0">
            <div className="flex items-center justify-between pb-2">
              <p className="brand text-lg text-text font-normal">
                جميع المنتجات <span className="text-sm font-sans text-text/50 font-normal">({totalCount})</span>
              </p>
            </div>

            <Content
              errorTitle="خطأ مفاجئ"
              errorDesc="حدث خطأ اثناء جلب البيانات من الخادم"
              isError={isError}
              errorAction={refetch}
              Skeletons={<Loading />}
              isEmpty={products.length === 0}
              emptyTitle="لا توجد منتجات متوفرة"
              emptyDesc="لم نجد أي قطع أزياء تطابق تصفيتك الحالية."
              isLoading={isLoading}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {products.map((productItem) => (
                  <Product
                    key={`shop-item-${productItem.id}`}
                    product={productItem}
                    onAddToBasket={(p) => addToBasket(p)}
                    gotToProduct={() => router.push(`/shop/${productItem.id}`)}
                  />
                ))}
              </div>

              <div ref={loadMoreRef} className="w-full py-6 flex items-center justify-center">
                {isFetching && hasNextPage && (
                  <div className="flex items-center gap-2 text-xs text-text/40 font-sans">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>جاري تحميل المزيد من التشكيلة الفاخرة...</span>
                  </div>
                )}
              </div>
            </Content>
          </div>

          <div>
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              brands={brands}
              selectedBrand={selectedBrand}
              onSelectBrand={setSelectedBrand}
              onClose={() => setIsFilterOpen(false)}
              isOpen={isFilterOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductsPage;