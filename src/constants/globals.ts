import { ROLE } from "../types/global";
import { User } from "../types/models";

export const initialUser: User = {
  id: "-1",
  email: "guest@gmail.com",
  name: "guest",
  phone: "0000000000",
  role: ROLE.GUEST,
  createdAt: Date.now().toString(),
  updatedAt: Date.now().toString()
}