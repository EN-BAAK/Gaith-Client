import { setSessionItem } from "@/lib/helpers";
import { CachedUser, ID } from "@/types/global";
import { BranchEntity, BranchEntityCreation, BrandEntity, CategoryEntity, CategoryEntityCreation, ColorEntity, ColorEntityCreation, SiteEntity, SiteEntityCreation, SizeEntity, SizeEntityCreation, User, BranchEntityGlobal, ProductEntityGlobal, ProductEntity } from "./types/models";
import { APIResponse, UpdateItemType, UpdateItemWithFormData } from "./libraries/react-query/types";
import { AdminProductsQueryParams, ForgotPasswordProps, LoginProps, ResetPasswordProps, SignupProps, UserProductsQueryParams, VerifyAccountAPIProps } from "./types/forms";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_URL = `${BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`
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
  const response = await fetch(`${API_URL}/auth/verify-me`, {
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

export const getAllColorsSettings = async (): Promise<APIResponse<ColorEntity[]>> => {
  const response = await fetch(`${API_URL}/colors`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch colors");
  return responseBody;
};

export const getColorByIdSettings = async (id: number): Promise<APIResponse<ColorEntity>> => {
  const response = await fetch(`${API_URL}/colors/${id}`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch color");
  return responseBody;
};

export const createColorSettings = async (data: ColorEntityCreation): Promise<APIResponse<ColorEntity>> => {
  const response = await fetch(`${API_URL}/colors`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create color");
  return responseBody;
};

export const updateColorSettings = async ({ id, data }: UpdateItemType<ColorEntity>): Promise<APIResponse<ColorEntity>> => {
  const response = await fetch(`${API_URL}/colors/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update color");
  return responseBody;
};

export const deleteColorByIdSettings = async (id: ID): Promise<APIResponse<ColorEntity>> => {
  const response = await fetch(`${API_URL}/colors/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete color");
  return responseBody;
};

export const getAllSizesSettings = async (): Promise<APIResponse<SizeEntity[]>> => {
  const response = await fetch(`${API_URL}/sizes`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch sizes");
  return responseBody;
};

export const getSizeByIdSettings = async (id: ID): Promise<APIResponse<SizeEntity>> => {
  const response = await fetch(`${API_URL}/sizes/${id}`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch size");
  return responseBody;
};

export const createSizeSettings = async (data: SizeEntityCreation): Promise<APIResponse<SizeEntity>> => {
  const response = await fetch(`${API_URL}/sizes`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create size");
  return responseBody;
};

export const updateSizeSettings = async ({ id, data }: UpdateItemType<SizeEntity>): Promise<APIResponse<SizeEntity>> => {
  const response = await fetch(`${API_URL}/sizes/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update size");
  return responseBody;
};

export const deleteSizeByIdSettings = async (id: ID): Promise<APIResponse<SizeEntity>> => {
  const response = await fetch(`${API_URL}/sizes/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete size");
  return responseBody;
};

export const getAllCategories = async (): Promise<APIResponse<CategoryEntity[]>> => {
  const response = await fetch(`${API_URL}/categories`);

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch categories");
  return responseBody;
};

export const getCategoryById = async (id: ID): Promise<APIResponse<CategoryEntity>> => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch category");
  return responseBody;
};

export const createCategory = async (data: CategoryEntityCreation): Promise<APIResponse<CategoryEntity>> => {
  const response = await fetch(`${API_URL}/categories`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create category");
  return responseBody;
};

export const updateCategory = async ({ id, data }: UpdateItemType<CategoryEntity>): Promise<APIResponse<CategoryEntity>> => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update category");
  return responseBody;
};

export const deleteCategoryById = async (id: ID): Promise<APIResponse<CategoryEntity>> => {
  const response = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete category");
  return responseBody;
};

export const getAllBrands = async (): Promise<APIResponse<BrandEntity[]>> => {
  const response = await fetch(`${API_URL}/brands`);

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch brands");
  return responseBody;
};

export const getBrandById = async (id: ID): Promise<APIResponse<BrandEntity>> => {
  const response = await fetch(`${API_URL}/brands/${id}`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch brand");
  return responseBody;
};

export const createBrand = async (formData: FormData): Promise<APIResponse<BrandEntity>> => {
  const response = await fetch(`${API_URL}/brands`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create brand");
  return responseBody;
};

export const updateBrand = async ({ id, data }: UpdateItemWithFormData): Promise<APIResponse<BrandEntity>> => {
  const response = await fetch(`${API_URL}/brands/${id}`, {
    method: "PUT",
    credentials: "include",
    body: data,
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update brand");
  return responseBody;
};

export const deleteBrandById = async (id: ID): Promise<APIResponse<BrandEntity>> => {
  const response = await fetch(`${API_URL}/brands/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete brand");
  return responseBody;
};

export const getAllSitesSettings = async (): Promise<APIResponse<SiteEntity[]>> => {
  const response = await fetch(`${API_URL}/group-branches`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch sites");
  return responseBody;
};

export const getSiteByIdSettings = async (id: ID): Promise<APIResponse<SiteEntity>> => {
  const response = await fetch(`${API_URL}/group-branches/${id}`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch site");
  return responseBody;
};

export const createSiteSettings = async (data: SiteEntityCreation): Promise<APIResponse<SiteEntity>> => {
  const response = await fetch(`${API_URL}/group-branches`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create site");
  return responseBody;
};

export const updateSiteSettings = async ({ id, data }: UpdateItemType<SiteEntity>): Promise<APIResponse<SiteEntity>> => {
  const response = await fetch(`${API_URL}/group-branches/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update site");
  return responseBody;
};

export const deleteSiteByIdSettings = async (id: ID): Promise<APIResponse<SiteEntity>> => {
  const response = await fetch(`${API_URL}/group-branches/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete site");
  return responseBody;
};

export const getAllBranches = async (): Promise<APIResponse<BranchEntityGlobal[]>> => {
  const response = await fetch(`${API_URL}/branches`);
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch branches");
  return responseBody;
};

export const getBranchById = async (id: ID): Promise<APIResponse<BranchEntityGlobal>> => {
  const response = await fetch(`${API_URL}/branches/${id}`, {
    credentials: "include",
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch branch");
  return responseBody;
};

export const getAllBranchesSettings = async (): Promise<APIResponse<BranchEntity[]>> => {
  const response = await fetch(`${API_URL}/branches/settings`, {
    credentials: "include",
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch branches settings");
  return responseBody;
};

export const getBranchByIdSettings = async (id: ID): Promise<APIResponse<BranchEntity>> => {
  const response = await fetch(`${API_URL}/branches/${id}/settings`, {
    credentials: "include",
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch branch settings");
  return responseBody;
};

export const createBranchSettings = async (data: BranchEntityCreation): Promise<APIResponse<BranchEntity>> => {
  const response = await fetch(`${API_URL}/branches`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create branch");
  return responseBody;
};

export const updateBranchSettings = async ({ id, data }: UpdateItemType<BranchEntity>): Promise<APIResponse<BranchEntity>> => {
  const response = await fetch(`${API_URL}/branches/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update branch");
  return responseBody;
};

export const deleteBranchByIdSettings = async (id: ID): Promise<APIResponse<BranchEntity>> => {
  const response = await fetch(`${API_URL}/branches/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete branch");
  return responseBody;
};

export const getVerifiedUsersSettings = async (): Promise<APIResponse<User[]>> => {
  const response = await fetch(`${API_URL}/auth/verified`, {
    credentials: "include",
  });

  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch verified users");
  return responseBody;
};

export const getAllProducts = async ({ limit, page, search, categoryId, brandId }: UserProductsQueryParams) => {
  let url = `${API_URL}/products?page=${page}&limit=${limit}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (categoryId) url += `&categoryId=${categoryId}`;
  if (brandId) url += `&brandId=${brandId}`;

  const response = await fetch(url);
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch products");
  return responseBody;
};

export const getProductById = async (id: ID): Promise<APIResponse<ProductEntityGlobal>> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch product");
  return responseBody;
};

export const getAllProductsSettings = async ({ limit, page, offsetUnit = 0, search }: AdminProductsQueryParams) => {
  let url = `${API_URL}/products/settings?p=${page}&l=${limit}&o=${offsetUnit}`;
  if (search) url += `&s=${encodeURIComponent(search)}`;

  const response = await fetch(url, { credentials: "include" });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch products settings");
  return responseBody;
};

export const getProductByIdSettings = async (id: ID): Promise<APIResponse<ProductEntity>> => {
  const response = await fetch(`${API_URL}/products/${id}/settings`, { credentials: "include" });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to fetch product settings");
  return responseBody;
};

export const createProductSettings = async (formData: FormData): Promise<APIResponse<ProductEntity>> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to create product");
  return responseBody;
};

export const updateProductSettings = async ({ id, data }: UpdateItemWithFormData): Promise<APIResponse<ProductEntity>> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    credentials: "include",
    body: data,
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to update product");
  return responseBody;
};

export const deleteProductByIdSettings = async (id: ID): Promise<APIResponse<ProductEntity>> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.message || "Failed to delete product");
  return responseBody;
};