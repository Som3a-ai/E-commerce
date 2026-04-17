import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function title({bgColor , breadCrumbs , icon,heading , subHeading} : {bgColor : string , breadCrumbs : string , icon : ReactNode , heading : string , subHeading : string}) {
  return (
    <>
        <div className={`${bgColor} text-white`}>
          <div className="container mx-auto px-4 py-12 sm:py-16">
                      <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                          <Link className="hover:text-white transition-colors" href="/">Home</Link>
                          <span className="text-white/40">/</span>
                          <span className="text-white font-medium">{breadCrumbs}</span>
                      </nav>

                      <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                                
                                {icon}
                                </div>

                                <div>
                                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h1>
                                  <p className="text-white/80 mt-1">{subHeading}</p>
                                </div>
                      </div>
          </div>
        </div>
    </>
  )
}
