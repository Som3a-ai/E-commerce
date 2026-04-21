import { BrandType, CategoryType, SubCategory } from "./product.type";

export interface CartType{
    cartId : string ;
    message : string ;
    numOfCartItems : number;
    status : string;
    data : CartDataType
}



export interface CartDataType{

    cartOwner : string;
    createdAt : string;
    products: CartProduct[] ;
    totalCartPrice : number;
    updatedAt : string;
    _v :number;
    _id : string;
}


interface CartProduct{

    count : number;
    price : number;
    _id : string;
    product : ProductInfo
}

export interface ProductInfo{

    brand ?: BrandType;
    category ?: CategoryType;
    id : string;
    imageCover : string;
    quantity : string;
    ratingsAverage : number;
    slug : string;
    subcategory : SubCategory;
    title : string;
    _id: string;
}