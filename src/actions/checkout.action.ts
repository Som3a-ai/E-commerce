"use server"

import { CheckOutType } from "@/schemas/checkout.schema"
import { getMyToken } from "@/utils"



export async function onlinePayment(cartId : string , url : string = process.env.NEXTAUTH_URL! , formValues : CheckOutType){

    const token = await getMyToken()

    if(!token){
        throw new Error("login first")
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}` , {
        method : "POST",
        headers : {
            token : token ,
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            shippingAddress : formValues
        })
    })


    const data = await res.json();
    return data
}