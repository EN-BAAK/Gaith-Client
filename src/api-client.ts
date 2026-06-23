import { setSessionItem } from "@/lib/helpers";
import { CachedUser } from "@/types/global";
import { User } from "./types/models";
import { APIResponse } from "./libraries/react-query/types";
import { ForgotPasswordProps, LoginProps, ResetPasswordProps, SignupProps, VerifyAccountAPIProps } from "./types/forms";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const USER_INFO = process.env.NEXT_PUBLIC_USER_INFO!

let cachedUser: CachedUser = null;
const CACHE_DURATION = 60 * 1000;

export const validateAuthenticationWithCaching = async (
  token: string
): Promise<APIResponse<User> | null> => {
  const now = Date.now();

  if (cachedUser && now - cachedUser.timestamp < CACHE_DURATION) {
    return {
      success: true,
      message: "User fetched from cache",
      data: cachedUser.data,
    };
  }

  try {
    const response = await fetch(`${API_URL}/auth/verify-protected-middleware`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseBody = await response.json();

    if (!response.ok) return null;

    cachedUser = { data: responseBody.data, timestamp: now };

    return responseBody;
  } catch {
    return null;
  }
};

export const validateAuthentication = async (): Promise<APIResponse<User>> => {
  const response = await fetch(`${API_URL}/auth/verify`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  if (responseBody.data) {
    setSessionItem(USER_INFO, {
      username: `${responseBody.data.firstName} ${responseBody.data.lastName}`,
      role: responseBody.data.role,
      email: responseBody.data.email
    });
  }

  return responseBody;
};

export const login = async (formData: LoginProps) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const verifyAccount = async (formData: VerifyAccountAPIProps) => {
  const response = await fetch(`${API_URL}/auth/verify-account`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const signup = async (formData: SignupProps) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const resendVerificationCode = async (email: string) => {
  const response = await fetch(`${API_URL}/auth/resend-verification-code/${email}`, {
    method: "PATCH",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const forgotPassword = async (formData: ForgotPasswordProps) => {
  const response = await fetch(`${API_URL}/auth/forgot-password/${formData.email}`, {
    method: "PATCH",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const resetForgottenPassword = async (formData: ResetPasswordProps) => {
  const response = await fetch(`${API_URL}/auth/reset-password`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message);

  return responseBody;
};