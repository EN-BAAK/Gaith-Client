import { ForgotPasswordProps, LoginProps, ResetPasswordProps, SignupProps, VerifyAccountProps } from "@/types/forms";
import { BranchEntityCreation, BrandEntityCreation, CategoryEntityCreation, ColorEntityCreation, SiteEntityCreation, SizeEntityCreation } from "@/types/models";

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

export const initialColorCreationValues: ColorEntityCreation = {
  name: "",
};

export const initialSizeCreationValues: SizeEntityCreation = {
  name: "",
};

export const initialCategoryCreationValues: CategoryEntityCreation = {
  name: "",
  icon: ""
};

export const initialBrandCreationValues: BrandEntityCreation = {
  name: "",
};

export const initialSiteCreationValues: SiteEntityCreation = {
  name: "",
}

export const initialBranchCreationValues: BranchEntityCreation = {
  name: "",
  location: "",
  facebook: "",
  instagram: "",
  phone: "",
  telephone: "",
  groupId: "",
};