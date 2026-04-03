import React from 'react'
import { Cards } from './cards';

export const Summarycards = ({transactions}) => {

     const income =transactions.filter((tx) =>tx.type==="income" ).reduce((acc,tx)=>acc+tx.amount,0);
  const expenses =transactions.filter((tx)=>tx.type==="expense").reduce((acc,tx)=>acc+tx.amount,0);
  const balance = income - expenses;
  return (
<div className="bg-white/1 backdrop-blur-xl border border-white/20 rounded-2xl  shadow-xl top-10 mt-2  p-5  w-full px-2 sm:px-4 md:px-6 ">
<h2 className='text-xl  text-white text-center '> Summary</h2>

     <div className="  grid grid-cols-1  md:grid-cols-3 gap-8   ">
      <Cards title="Total Balance" amount={balance} />
      <Cards title="Income" amount={income} />
      <Cards title="Expenses" amount={expenses} />

      
    </div>
</div>

 
    
  )
}
