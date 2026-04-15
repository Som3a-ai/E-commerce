"use server"


import { RegisterSchemaType } from "@/schemas/auth.schema"

export async function Register(obj: RegisterSchemaType) : Promise<boolean> {
    try{
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
          method:"POST",
          body:JSON.stringify(obj),
          headers:{
            "content-type" : "application/json"
          }
        })
        if(res.ok){
          return res.ok
        }
        throw new Error("failed")
        
    }catch(err){

      console.log(err)
      return false
    }
  }