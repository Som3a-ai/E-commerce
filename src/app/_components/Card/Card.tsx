import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


export default function Card({image , imageInfo , name , hoverStyle , view , id} : {image : string , imageInfo : string , name : string , hoverStyle : string , view : string , id : string}) {
  return (
    <>
    <Link className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1" href={`/products/brands/${id}`}>
    
    <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">

                <img alt={imageInfo} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" src={image}></img>
    </div>

    <h3 className={`font-semibold text-gray-900 text-center text-sm group-hover:${hoverStyle} transition-colors truncate`}>{name}</h3>

    <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">

        <span className={`text-xs ${hoverStyle} flex items-center gap-1`}>
            View{" "}{view}{" "}<FaArrowRightLong />

        </span>
    </div>
    
    </Link>
    
    
    </>
  )
}
