import { ID, ROLE, SelectedItemState } from "./global"

export type User = {
  id: ID,
  name: string;
  email: string;
  phone: string;
  role: ROLE
  createdAt?: string;
  updatedAt?: string;
}

export interface ColorEntity {
  id: ID;
  name: string;
}

export type ColorEntityCreation = {} & Omit<ColorEntity, "id">

export interface SizeEntity {
  id: ID;
  name: string;
}

export type SizeEntityCreation = {} & Omit<SizeEntity, "id">

export interface CategoryEntity {
  id: ID;
  name: string;
  icon: string
}

export type CategoryEntityCreation = {} & Omit<CategoryEntity, "id">

export interface BrandEntity {
  id: ID;
  name: string;
  imgUrl: string
}

export type BrandEntityCreation = {} & Omit<BrandEntity, "id" | "imgUrl">

export interface SiteEntity {
  id: ID;
  name: string;
}

export type SiteEntityCreation = {} & Omit<SiteEntity, "id" | "imgUrl">

export interface BranchEntity {
  id: ID;
  name: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  phone?: string;
  telephone?: string;
  groupId?: ID;
  group?: string
}

export type BranchEntityGlobal = {} & Omit<BranchEntity, "groupId">

export type BranchEntityCreation = Omit<BranchEntity, "id" | "group">;

export interface ProductEntity {
  id: ID;
  title: string;
  retailPrice: number;
  wholesalePrice: number;
  summarize: string;
  description: string;
  brandImgUrl?: string
  imgUrl: string;
  categoryId?: ID,
  brandId?: ID,
  category?: { id: ID; name: string };
  brand?: { id: ID; name: string, imgUrl: string };
  colors: { id: ID; name: string }[];
  sizes: { id: ID; name: string }[];
}

export type ProductEntityCreation = Omit<ProductEntity, "id" | "category" | "brand" | "colors" | "sizes" | "imgUrl" | "categoryId" | "brandId"> & {
  categoryId: string;
  brandId: string;
  colors: SelectedItemState[];
  sizes: SelectedItemState[];
};

export interface ProductEntityGlobal {
  id: ID;
  title: string;
  price: number;
  imgUrl: string;
  summarize: string;
  description: string;
  category: string;
  brand?: { name: string, imgUrl: string };
  colors: string[];
  sizes: string[];
}

