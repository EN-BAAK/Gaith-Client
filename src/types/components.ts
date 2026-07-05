import { LucideIcon } from "lucide-react";
import { CommonParentProps, ID } from "./global";
import { BranchEntity, BrandEntity, CategoryEntity, ColorEntity, OrderEntity, OrderItemEntity, ProductEntity, ProductEntityGlobal, SiteEntity, SizeEntity, User } from "./models";

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

export interface DashboardProductCardProps {
  product: ProductEntity;
  onDelete: () => void;
  isDeleting: boolean;
  onEdit: () => void;
  onView: () => void
}

export type FormatTextProps = {
  text: string
}

export interface ShopFilterProps {
  categories: CategoryEntity[];
  selectedCategory: ID | undefined;
  onSelectCategory: (id: ID | undefined) => void;
  brands: BrandEntity[];
  selectedBrand: ID | undefined;
  onSelectBrand: (id: ID | undefined) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface ShopCategoryListProps {
  categories: CategoryEntity[];
  selectedCategory: ID | undefined;
  onSelectCategory: (id: ID | undefined) => void;
  onCloseModal?: () => void;
}

export interface ShopProductProps {
  product: ProductEntityGlobal;
  onAddToBasket?: (product: ProductEntityGlobal) => void;
  gotToProduct?: () => void
}

export interface ShopBrandListProps {
  brands: BrandEntity[];
  selectedBrand: ID | undefined;
  onSelectBrand: (id: ID | undefined) => void;
  onCloseModal?: () => void;
}

export type ShopFilterContentProps = {
  categories: CategoryEntity[];
  selectedCategory: ID | undefined;
  onSelectCategory: (id: ID | undefined) => void;
  brands: BrandEntity[];
  selectedBrand: ID | undefined;
  onSelectBrand: (id: ID | undefined) => void;
  isMobile?: boolean,
  onClose: () => void;
}

export type HeaderProps = {
  NestedElements?: React.ReactNode
}

export type ShopNestedHeaderElementProps = {
  search: string,
  setSearch: (s: string) => void,
  hasActiveFilters?: boolean,
  openFilter: () => void
}

export interface DashboardOrderSidebarProps {
  orders: OrderEntity[];
  activeOrderId: ID | null;
  onSelectOrder: (id: ID) => void;
}

export type DashboardOrderItemRowProps = {
  item: OrderItemEntity;
}

export type DashboardOrderItemsProps = {
  orderId: ID;
  closeOrder: () => void
}

export type DashboardStateCardProps = {
  label: string;
  value: string | number;
  change?: string | number;
  Icon: LucideIcon;
  color: string;
}

export interface DashboardStatesProps {
  cardsData: {
    totalUsers: number;
    wholesaleUsers: number;
    totalProducts: number;
    activeOrdersCount: number;
    revenue: {
      currentMonth: number;
      previousMonth: number;
    };
  };
}

interface ChartDataPoint {
  date: string;
  orders: number;
  revenue: number;
}

export type DashboardPlotProps = {
  chartsData: {
    currentMonth: ChartDataPoint[];
    previousMonth: ChartDataPoint[];
  };
}