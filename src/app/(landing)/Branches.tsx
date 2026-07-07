"use client"

import ArabicPattern from '@/components/ArabicPattern'
import { useGetAllBranches } from '@/features/useBranches'
import { BranchEntityGlobal } from '@/types/models'
import React, { useMemo } from 'react'
import Content from '../dashboard/Contetns'
import Branch from './Branch'
import LoadingBranches from './LoadingBranches'
import { GroupedBranchSite } from '@/types/components'

const Branches: React.FC = () => {
  const { data, isLoading, isError, refetch } = useGetAllBranches()
  const branches = useMemo(() => data?.data || [], [data])

  const groupedBranches = useMemo(() => {
    if (!branches.length) return []

    const groups: { [key: string]: BranchEntityGlobal[] } = {}

    branches.forEach((b: BranchEntityGlobal) => {
      const groupName = b.group?.trim() || "أخرى"
      if (!groups[groupName]) {
        groups[groupName] = []
      }
      groups[groupName].push(b)
    })

    return Object.keys(groups).map((key) => ({
      site: key,
      branches: groups[key],
    })) as GroupedBranchSite[]
  }, [branches])

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <ArabicPattern
        id="branch-pat"
        color="#B08D57"
        opacity={0.04}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-accent text-sm font-medium mb-2 tracking-widest">
            فروعنا
          </div>
          <h2
            className="text-4xl font-bold text-foreground"
            style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            }}
          >
            نحن بجانبك دائماً
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            افتح أقرب فرع وتصفح مجموعاتنا بنفسك
          </p>
        </div>

        <Content
          errorTitle="خطأ مفاجئ"
          errorDesc="حدث خطأ اثناء جلب البيانات من الخادم"
          isError={isError}
          errorAction={refetch}
          Skeletons={<LoadingBranches />}
          isEmpty={groupedBranches.length === 0}
          emptyTitle="لا توجد فروع متوفرة"
          emptyDesc="لم نجد أي فروع في المنطقة."
          isLoading={isLoading}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupedBranches.map((group) => (
              <Branch
                key={`landing-group-${group.site}`}
                group={group}
              />
            ))}
          </div>
        </Content>
      </div>
    </section>
  )
}

export default Branches