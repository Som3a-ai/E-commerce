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


  
  export async function getSingleProduct(id : string): Promise<ProductType | null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      const data = await res.json();

      return data.data;
    } catch (err) {
      return null;
    }
  }