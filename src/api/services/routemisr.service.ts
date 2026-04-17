import { BrandType, CategoryType, ProductType } from "../types/product.type";

export async function getAllProducts(): Promise<ProductType[] | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      cache: "force-cache",
    });
    const data = await res.json();

    return data.data;
  } catch (err) {
    return null;
  }
}

export async function getSingleProduct(
  id: string,
): Promise<ProductType | null> {
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

export async function getAllCategories(): Promise<CategoryType[] | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/categories`,
    );
    const data = await res.json();

    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getAllBrands(): Promise<BrandType[] | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands`,
    );
    const data = await res.json();

    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
