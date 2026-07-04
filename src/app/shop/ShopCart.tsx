import { useBasket } from '@/contexts/BasketProvider'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

const ShopCart: React.FC = () => {
  const { basket, setIsBasketOpen } = useBasket()
  const noProducts = basket.length || 0

  const openBBasket = () => setIsBasketOpen(true)

  return (
    <button className='cursor-pointer relative' onClick={openBBasket}>
      <div className="relative">
        <ShoppingCart className='hover:text-accent transition duration-200' />

        {noProducts > 0 && <span className='bg-accent text-reversed text-xs flex items-center justify-center rounded-full absolute top-0 -left-1 w-4 h-4' >
          {noProducts}
        </span>}
      </div>
    </button>
  )
}

export default ShopCart