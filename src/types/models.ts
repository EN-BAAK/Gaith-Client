import { ID, ROLE } from "./global"

export type User = {
  id: ID,
  name: string;
  email: string;
  phone: string;
  role: ROLE
  createdAt?: string;
  updatedAt?: string;
}