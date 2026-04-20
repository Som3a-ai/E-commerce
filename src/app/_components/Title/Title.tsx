import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function Title({bgColor , breadCrumbs , icon,heading , subHeading , iconBg , textColor} : {bgColor : string , breadCrumbs : string , icon : ReactNode , heading : string , subHeading : string ,iconBg : string , textColor : string}) {
  return (
    <>
        <div className={`${bgColor} ${textColor}`}>
          <div className="container mx-auto px-4 py-12 sm:py-16">
                      <nav className={`flex items-center gap-2 text-sm ${textColor}/70 mb-6`}>
                          <Link className={`hover:${textColor} transition-colors`} href="/">Home</Link>
                          <span className="${textColor}/40">/</span>
                          <span className={`${textColor} font-medium`}>{breadCrumbs}</span>
                      </nav>

                      <div className="flex items-center gap-5">
                                <div className={`w-16 h-16 rounded-2xl ${iconBg} text-white backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30`}>
                                
                                {icon}
                                </div>

                                <div>
                                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h1>
                                  <p className={`${textColor}/80 mt-1`}>{subHeading}</p>
                                </div>
                      </div>
          </div>
        </div>
    </>
  )
}
