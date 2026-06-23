import { AccessItem, NavItem, ROLE } from "../types/global";
import { User } from "../types/models";
import {
  UserRound,
  Settings2,
  Boxes,
} from "lucide-react";

export const initialUser: User = {
  id: "-1",
  email: "guest@gmail.com",
  name: "guest",
  phone: "0000000000",
  role: ROLE.GUEST,
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString()
}

export const navItems: NavItem[] = [
  {
    title: "لوحة التحكم",
    href: "/dashboard",
    icon: UserRound,
  },
  {
    title: "المنتجات",
    href: "/dashboard/products",
    icon: Boxes,
  },
  {
    title: "الاعدادات",
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
      { authorized: true, path: "/employees", roles: [ROLE.ADMIN] },
    ],
  },
];
