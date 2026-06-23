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