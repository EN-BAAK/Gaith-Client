import { Skeleton } from '@/components/Skeleton'
import React from 'react'

const LoadingProducts: React.FC = () => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {[1, 2, 3].map((i) => (
        <div key={`landing-sk-${i}`} className="bg-card border border-background2 rounded-2xl overflow-hidden space-y-4">
          <Skeleton className="w-full h-72 bg-background2" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-5 w-3/4 bg-background2" />
            <Skeleton className="h-4 w-1/2 bg-background2" />
            <Skeleton className="h-9 w-full rounded-xl bg-background2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingProducts