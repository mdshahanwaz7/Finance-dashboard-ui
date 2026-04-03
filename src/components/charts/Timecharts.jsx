import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend } from "recharts";

export const Timecharts = ({ transactions }) => {

  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  
  const monthlyData = months.map((month) => ({
    month,
    income: 0,
    expense: 0,
  }));

  
  transactions.forEach((tx) => {
    const date = new Date(tx.date);
    const monthIndex = date.getMonth();

    if (tx.type === "income") {
      monthlyData[monthIndex].income += tx.amount;
    } else {
      monthlyData[monthIndex].expense += tx.amount;
    }
  });

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-xl mt-9 w-full px-2 sm:px-4 md:px-6">
      
      <h2 className="text-white text-center mb-3">
        Monthly Income vs Expense
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={monthlyData}>
          
          
          <XAxis dataKey="month" stroke="#ccc" />

          
          <YAxis stroke="#ccc" />

         
          <Tooltip />

         
          <Legend />

          
          <Line
            type="monotone"
            dataKey="income"
            stroke="#22c55e"
            strokeWidth={2}
          />

         
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={2}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};