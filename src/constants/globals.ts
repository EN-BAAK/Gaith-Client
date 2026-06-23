import { AccessItem, NavItem, ROLE } from "../types/global";
import { User } from "../types/models";
import {
  Settings2,
  Boxes,
  Palette,
  Ruler,
  Tags,
  Building2,
  MapPin,
  Users,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";

export const initialUser: User = {
  id: "-1",
  email: "guest@gmail.com",
  name: "زائر",
  phone: "0000000000",
  role: ROLE.GUEST,
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString()
}

export const navItems: NavItem[] = [
  {
    title: "لوحة التحكم",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "المنتجات",
    href: "/dashboard/products",
    icon: Boxes,
  },
  {
    title: "الطلبات",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "الأصناف",
    href: "/dashboard/categories",
    icon: Tags,
  },
  {
    title: "العلامات التجارية",
    href: "/dashboard/brands",
    icon: Building2,
  },
  {
    title: "الألوان",
    href: "/dashboard/colors",
    icon: Palette,
  },
  {
    title: "الأحجام",
    href: "/dashboard/sizes",
    icon: Ruler,
  },
  {
    title: "المستخدمين",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "المواقع",
    href: "/dashboard/sites",
    icon: MapPin,
  },
  {
    title: "الأفرع",
    href: "/dashboard/branches",
    icon: Building2,
  },
  {
    title: "الإعدادات",
    href: "/dashboard/settings",
    icon: Settings2,
  },
];

export const accessGuid: AccessItem[] = [
  {
    authorized: true,
    path: "/dashboard",
    roles: [ROLE.ADMIN],
    children: [
      {
        authorized: true, path: "/colors", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/sizes", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/categories", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/sites", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/brands", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/branches", roles: [ROLE.ADMIN],
        children: [
          { authorized: true, path: "/add", roles: [ROLE.ADMIN] },
          { authorized: true, path: "/edit", roles: [ROLE.ADMIN] }
        ]
      },
      {
        authorized: true, path: "/users", roles: [ROLE.ADMIN],
      },
    ],
  },
];
