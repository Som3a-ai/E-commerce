"use server"


import { loginType, RegisterSchemaType } from "@/schemas/auth.schema"
import { cookies } from "next/headers"

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


  export async function Login(obj: loginType) : Promise<boolean> {
    try{
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
          method:"POST",
          body:JSON.stringify(obj),
          headers:{
            "content-type" : "application/json"
          }
        })
        if(res.ok){
          const result = await res.json()
          const cookie = await cookies()
          cookie.set("userToken" , result.token)
          return res.ok
        }
        throw new Error("failed")
        
    }catch(err){

      console.log(err)
      return false
    }
  }