"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { useGetAllProducts } from '@/features/useProducts'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import Content from '../dashboard/Contetns'
import LoadingProducts from './LoadingProducts'
import { ProductEntityGlobal } from '@/types/models'
import Product from './Product'
import { ID } from '@/types/global'

const Products: React.FC = () => {
  const router = useRouter()
  const { data, isLoading, isError, refetch } = useGetAllProducts(6)
  const products = useMemo(() => {
    return data?.pages?.[0]?.data?.items ?? [];
  }, [data]);

  const goToShop = () => router.push("/shop")
  const goToProduct = (id: ID) => router.push(`/shop/${id}`)

  return (
    <section className="bg-background2 py-24 relative overflow-hidden">
      <ArabicPattern
        id="prod-pat"
        color="#B08D57"
        opacity={0.05}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-accent text-sm font-medium mb-2 tracking-widest">
              منتجاتنا
            </div>
            <h2
              className="text-4xl font-bold text-foreground"
              style={{
                fontFamily:
                  "'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              أحدث التصاميم الفاخرة
            </h2>
          </div>
          <button
            onClick={goToShop}
            className="flex cursor-pointer items-center gap-2 text-accent font-medium hover:gap-3 transition-all text-sm"
          >
            عرض كل المنتجات
            <ArrowRight size={16} />
          </button>
        </div>

        <Content
          errorTitle="خطأ مفاجئ"
          errorDesc="حدث خطأ اثناء جلب البيانات من الخادم"
          isError={isError}
          errorAction={refetch}
          Skeletons={<LoadingProducts />}
          isEmpty={products.length === 0}
          emptyTitle="لا توجد منتجات متوفرة"
          emptyDesc="لم نجد أي قطع أزياء تطابق تصفيتك الحالية."
          isLoading={isLoading}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p: ProductEntityGlobal) => (
              <Product
                key={`landing-product-${p.id}`}
                product={p}
                goToShop={goToShop}
                gotToProduct={() => goToProduct(p.id)}
              />
            ))}
          </div>
        </Content>
      </div>
    </section>
  )
}

export default Products