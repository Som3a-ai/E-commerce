"use server"

import { getMyToken } from "@/utils"



export async function  addtoCart(productId : string){

 const token = await getMyToken()

 if(!token){
    throw new Error("please login First");
 }
    

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` , {
        method : "POST" ,
        headers : {
            token :token as string ,
            "content-type" : "application/json"
        },
        body : JSON.stringify({productId : productId})
    })

    const data = await res.json();

    return data;
}