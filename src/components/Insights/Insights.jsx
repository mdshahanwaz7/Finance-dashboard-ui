import React from "react";

export const Insights = ({ transactions }) => {

  
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  
  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);


  const categoryMap = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      categoryMap[tx.category] =
        (categoryMap[tx.category] || 0) + Number(tx.amount);
    }
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "No Data";

  
  const monthly = {};

  transactions.forEach((tx) => {
    const month = new Date(tx.date).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      monthly[month].income += Number(tx.amount);
    } else {
      monthly[month].expense += Number(tx.amount);
    }
  });

  const latestMonth = Object.keys(monthly).pop();

  return (
    <div className="mt-6 grid gap-4 bg-whie/10 relative  backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-xl mt-9 w-full px-2 sm:px-4 md:px-6 ">
  <h2 className="text-white text-center text-xl">Insights</h2>
      
      <div className="bg-white/10 p-4 rounded-xl text-white text-center ">
        <p>Total Income</p>
        <h2 className="font-bold">${income}</h2>
      </div>

    
      <div className="bg-white/10 p-4 rounded-xl text-white text-center">
        <p>Total Expense</p>
        <h2 className="font-bold">${expense}</h2>
      </div>

     
      <div className=" text-center bg-white/10 p-4 rounded-xl text-white">
        <p>Top Spending Category</p>
        <h2 className="font-bold">{highestCategory}</h2>
      </div>

      
      <div className=" text-center bg-white/10 p-4 rounded-xl text-white">
        <p>Monthly Summary</p>
        <p className="text-sm mt-1">
          {latestMonth
            ? `${latestMonth} → Income: $${monthly[latestMonth].income} | Expense: $${monthly[latestMonth].expense}`
            : "No data"}
        </p>
      </div>

     
      <div className="bg-white/10 p-4 rounded-xl text-white col-span-full text-center">
        <p>Insight</p>
        <p className="text-sm mt-2">
          {expense > income
            ? "⚠️ You are spending more than your income"
            : "✅ Your finances are balanced"}
        </p>
      </div>

    </div>
  );
};