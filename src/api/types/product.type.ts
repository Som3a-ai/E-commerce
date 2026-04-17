export interface ProductType {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: CategoryType;
  brand: BrandType;
  ratingsAverage: number;
  createdAt: string;
  id: string;
  availableColors?: string[];
  priceAfterDiscount?: number;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface BrandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
