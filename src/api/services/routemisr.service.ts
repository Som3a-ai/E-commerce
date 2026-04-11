import { ProductType } from "../types/product.type";

export async function getAllProducts(): Promise<ProductType[] | null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products`,
      );
      const data = await res.json();

      return data.data;
    } catch (err) {
      return null;
    }
  }