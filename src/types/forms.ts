import { ID } from "./global"

export type LoginProps = {
  email: string,
  password: string
}

export type SignupProps = {
  name: string,
  email: string,
  phone: string,
  password: string
}

export type VerifyAccountProps = {
  otp: string
}

export type VerifyAccountAPIProps = {
  email: string
} & VerifyAccountProps

export type ForgotPasswordProps = {
  email: string
}

export type ResetPasswordProps = {
  otp: string,
  password: string
}

export interface UserProductsQueryParams {
  limit: number;
  page: number;
  search?: string;
  categoryId?: ID;
  brandId?: ID;
}

export interface AdminProductsQueryParams {
  limit: number;
  page: number;
  offsetUnit: number;
  search?: string;
}

export interface AdminOrderQueryParams {
  limit: number,
  page: number
}

export interface ContactInput {
  fullName: string;
  phone: string;
  email?: string;
  message: string;
}