import React from 'react'

export const Cards = ({title, amount}) => {
  return (
    <div>
         <div className="bg-white/10  backdrop-blur-xl border border-white/20 rounded-2xl   shadow-xl  mt-2 p-5">
      <h3 className="text-sm  text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-white">${amount}</p>

    
    </div>
    </div>
  )
}
