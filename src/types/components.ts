import { CommonParentProps, ID } from "./global";
import { BranchEntity, BrandEntity, CategoryEntity, ColorEntity, SiteEntity, SizeEntity, User } from "./models";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular" | "pattern"
}

export type ArabicPatterProps = {
  id: string; color?: string; opacity?: number;
}

export type DashboardHeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DashboardColorsRowProps = {
  color: ColorEntity,
  onDelete: () => void,
  onEdit: () => void
  isDeleting: boolean
}

export type DashboardSizesRowProps = {
  size: SizeEntity,
  onDelete: () => void,
  onEdit: () => void
  isDeleting: boolean
}

export interface DashboardEmptyContentProps {
  title: string;
  desc: string;
  buttonTitle?: string,
  buttonAction?: () => void
}

export interface DashboardErrorContentProps {
  title: string;
  desc: string;
  actionTitle?: string;
  onAction?: () => void;
}

export type DashboardContentProps = {
  isLoading: boolean,
  isEmpty: boolean
  emptyTitle: string,
  emptyDesc: string,
  isError: boolean,
  errorTitle: string,
  errorDesc: string,
  errorActionTitle?: string,
  errorAction?: () => void,
  Skeletons: React.ReactNode
} & CommonParentProps


export type LoadingPageProps = {
  className?: string,
  msg?: string
}

export interface DashboardCategoryCardProps {
  category: CategoryEntity;
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
}

export interface DashboardBrandCardProps {
  brand: BrandEntity;
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
}

export interface DashboardSitesRowProps {
  site: SiteEntity;
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
}

export interface DashboardBranchCardProps {
  branch: BranchEntity;
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
}

export interface DashboardBranchSectionProps {
  title?: string;
  branches: BranchEntity[];
  onDeleteBranch: (branch: BranchEntity) => void;
  isDeleting: boolean;
  onEditBranch: (id: ID) => void;
}

export interface DashboardUsersRowProps {
  user: User;
}