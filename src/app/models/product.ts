export interface CategoryModel {
  id: number;
  active: boolean;
  categoryName: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
}

export interface CategoryRequestModel {
  categoryId?: number;
  active: boolean;
  categoryName: string;
}

export interface ProductModel {
  id: number;
  active: boolean;
  productName: string;
  productDescription: string;
  unitPrice: number;
  stock: number;
  imageUrl: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  categoryId: number;
}

export interface ProductRequestModel {
  productId?: number;
  active: boolean;
  productName: string;
  productDescription: string;
  unitPrice: number;
  stock: number;
  imageUrl: string;
  categoryId: number;
  imagesUrl: string[];
}

export interface ProductImageModel {
  id: number;
  active: boolean;
  url: string;
  productId: number;
}

export interface ShoppingCartModel {
  product: ProductModel;
  price: number;
  quantity: number;
  total: number;
}
