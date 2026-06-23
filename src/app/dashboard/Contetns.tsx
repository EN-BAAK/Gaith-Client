import React from 'react'
import EmptyContent from './EmptyContent'
import { DashboardContentProps } from '@/types/components'
import ErrorContent from './ErrorContent'

const Content: React.FC<DashboardContentProps> = ({
  isError = false,
  errorDesc,
  errorTitle,
  errorAction,
  errorActionTitle,
  isEmpty = false,
  emptyTitle,
  emptyDesc,
  children,
  isLoading = true,
  Skeletons
}) => {
  return (
    <div >
      {
        isLoading ? Skeletons
          : isError ? <ErrorContent
            title={errorTitle}
            desc={errorDesc}
            actionTitle={errorActionTitle}
            onAction={errorAction}
          />
            : isEmpty ? <EmptyContent
              desc={emptyDesc}
              title={emptyTitle}
            />
              : children
      }
    </div>
  )
}

export default Content