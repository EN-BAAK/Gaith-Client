import { ProductEntityGlobal } from "./models";

export interface BasketItem {
  product: ProductEntityGlobal;
  quantity: number;
}

export interface BasketContextProps {
  basket: BasketItem[];
  addToBasket: (product: ProductEntityGlobal, quantity?: number) => void;
  removeFromBasket: (productId: number | string) => void;
  removeProductFromBasket: (productId: number | string) => void;
  emptyBasket: () => void;
  totalItems: number;
  totalPrice: number;
  isBasketOpen: boolean;
  setIsBasketOpen: (open: boolean) => void;
}

export interface BasketProviderProps {
  children: React.ReactNode;
}