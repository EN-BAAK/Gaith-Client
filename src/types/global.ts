import { User } from "./models";

export type CommonParentProps = {
  readonly children: React.ReactNode
}

export type CachedUser = { data: User; timestamp: number } | null

export type Variant = "default" | "secondary" | "destructive" | "outline" | "main";

export enum ROLE {
  ADMIN = "admin",
  WHOLESALE = "wholesale",
  RETAIL = "retail",
  GUEST = "guest"
}

export type ID = string

export interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export interface AccessItem {
  authorized: boolean;
  path: string;
  roles: ROLE[];
  children?: AccessItem[];
}
