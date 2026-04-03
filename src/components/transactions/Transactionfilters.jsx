import React from "react";

export const TransactionFilter = ({ search, setSearch, type, setType }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      
      
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white outline-none"
      />

      
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
      >
        <option className="text-purple-500" value="all">All</option>
        <option className="text-purple-500"value="income">Income</option>
        <option className="text-purple-500"value="expense">Expense</option>
      </select>
    </div>
  );
};