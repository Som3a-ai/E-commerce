"use client"

import { addtoCart } from '@/actions/cart.actions'
import { CartContext } from '@/context/CartContext'
import React, { useContext } from 'react'
import { toast } from 'sonner'



export default function AddtoCart({classes , word , id} : {classes : string , word : string | React.ReactNode , id : string}) {

  const {numOfCartItems , setnumOfCartItems} = useContext(CartContext)

  async function addProduct(){

  const res = await  addtoCart(id)

  console.log(res)

  if(res.status === "success"){

    toast.success(res.message , {duration : 2000 , position : "top-center"})
    setnumOfCartItems(numOfCartItems + 1)
  }
  else{
    toast.error(res.message , {duration : 2000 , position : "top-center"})
  }

  }


  return (
     <button onClick={()=>addProduct()} className={classes}>
          {word}
          </button>
  )
}
