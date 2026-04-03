import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#00f5ff", "#ff00ff", "#7c3aed", "#22c55e", "#f97316"];

export const CategoryCharts = ({ transactions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  
  const expenses = transactions.filter((tx) => tx.type === "expense");

 
  const categoryMap = {};

  expenses.forEach((tx) => {
    if (categoryMap[tx.category]) {
      categoryMap[tx.category] += tx.amount;
    } else {
      categoryMap[tx.category] = tx.amount;
    }
  });

 
  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

 
  const total = data.reduce((acc, item) => acc + item.value, 0);

  
  const renderLabel = ({ percent, value }) => {
    return `${(percent * 100).toFixed(0)}% ($${value})`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl mt-9 w-full px-2 sm:px-4 md:px-6">
      
      <h2 className="text-white mb-4 text-center">
        Spending by Category
      </h2>

     
      <div className="text-center text-white mb-2">
        <p className="text-sm text-gray-300">Total Expense</p>
        <p className="text-xl font-bold">${total}</p>
      </div>

      
      {data.length === 0 ? (
        <p className="text-center text-gray-300">No expense data</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              label={renderLabel}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  style={{
                    filter: activeIndex === index ? "brightness(1.4)" : "none",
                    transform:
                      activeIndex === index ? "scale(1.05)" : "scale(1)",
                    transformOrigin: "center",
                    transition: "0.3s",
                  }}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}

      
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-white">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};