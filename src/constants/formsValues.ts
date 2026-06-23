import { ForgotPasswordProps, LoginProps, ResetPasswordProps, SignupProps, VerifyAccountProps } from "@/types/forms";

export const loginInItalValues: LoginProps = {
  email: "",
  password: "",
};

export const signupInitialValues: SignupProps = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

export const verifyAccountInitialValues: VerifyAccountProps = {
  otp: "",
};

export const forgotPasswordInitialValues: ForgotPasswordProps = {
  email: "",
};

export const resetPasswordInitialValues: ResetPasswordProps = {
  otp: "",
  password: "",
};