export interface ProductType {
  sold: number;
  images: string[];
  subcategory: [[object]];
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

interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
interface BrandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}