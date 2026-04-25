import { SubCategory } from "./product.type";




export interface WishListType{

    status : string;
    count : number;
    data : WishListItem[]
    message?: string

}


export interface WishListItem{

    sold : number;
    images : string[];
    subcategory : SubCategory
    ratingsQuantity : number;
    _id : string;
    title : string;
    slug : string;
    description : string;
    quantity : number;
    price : number;
    imageCover : string;
    id : string;
    category : WishListCategory
}


interface WishListCategory{

    _id : string;
    name : string;
    slug : string;
    image : string;
}