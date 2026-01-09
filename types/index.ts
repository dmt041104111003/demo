export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  origin: string;
  icon: string;
  description?: string;
  category: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
