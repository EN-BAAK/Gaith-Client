
"use client"

import { ShopNestedHeaderElementProps } from '@/types/components'
import { Filter, LogIn, LogOut, Search } from 'lucide-react'
import React from 'react'
import ShopCart from './ShopCart'
import { useLogout } from '@/features/useAuth'
import { useAppContext } from '@/libraries/project-provider/AppProvider'
import { useRouter } from 'next/navigation'

const HeaderNestedElement: React.FC<ShopNestedHeaderElementProps> = ({ search, setSearch, hasActiveFilters = false, openFilter }) => {
  const { isLoggedIn } = useAppContext()
  const { mutateAsync, isPending } = useLogout()
  const router = useRouter()

  const goToLogin = () => router.push("/login")

  const logout = async () => {
    await mutateAsync()
  }

  return (
    <div className='flex items-center md:gap-3'>
      {isLoggedIn ? <button
        onClick={logout}
        title="افتح القائمة الجانبية للفلاتر"
        className='translation duration-200 hover:text-danger cursor-pointer p-2.5'
        disabled={isPending}
      >
        <LogOut className="w-5 h-5" />
      </button> :
        <button
          onClick={goToLogin}
          title="افتح القائمة الجانبية للفلاتر"
          className='translation duration-200 hover:text-success cursor-pointer p-2.5'
          disabled={isPending}
        >
          <LogIn className="w-5 h-5" />
        </button>}

      <ShopCart />

      <button
        onClick={openFilter}
        className="block md:hidden relative p-2.5 hover:bg-background2 rounded-xl transition-colors cursor-pointer text-text/70 hover:text-text"
        title="افتح القائمة الجانبية للفلاتر"
      >
        <Filter className="w-5 h-5" />

        {hasActiveFilters && (
          <span className="absolute top-2 left-2 w-2.5 h-2.5 bg-danger rounded-full border-2 border-reversed ring-1 ring-danger animate-pulse" />
        )}
      </button>

      <div className="relative flex-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن منتج، ماركة، أو فئة..."
          className="h-11 w-[150px] sm:w-[200px] md:w-[300px] bg-background2 pl-4 pr-10"
        />
        <Search className="w-4 h-4 text-text/40 absolute top-3.5 right-3.5" />
      </div>
    </div>
  )
}

export default HeaderNestedElement