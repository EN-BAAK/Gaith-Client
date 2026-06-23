export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular" | "pattern"
}

export type ArabicPatterProps = {
  id: string; color?: string; opacity?: number;
}