import React, { useState } from "react";
import { Insights } from "../Insights/Insights";
import { TransactionFilter } from "./Transactionfilters";
import { TransactionModal } from "./Transactionmodels";
import { TransactionRow } from "./Transactionsrow";
import { useAuth } from "../../context/Auths";

export const TransactionTable = ({ transactions, setTransactions }) => {
  const { role } = useAuth();

  

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  
  let filtered = transactions.filter((tx) =>
    tx.category.toLowerCase().includes(search.toLowerCase())
  );

  if (type !== "all") {
    filtered = filtered.filter((tx) => tx.type === type);
  }

  filtered.sort((a, b) =>
    sortAsc ? a.amount - b.amount : b.amount - a.amount
  );

  
  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

 
  const handleEdit = (tx) => {
    setEditData(tx);
    setShowModal(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl mt-9 w-full px-2 sm:px-4 md:px-6 ">

      

      <h2 className="text-white mb-4 text-center text-2xl">Transactions</h2>

      
      {role === "admin" && (
        <button
          onClick={() => {
            setEditData(null);
            setShowModal(true);
          }}
          className="mb-4 px-3 py-2 bg-purple-500 rounded-lg text-white"
        >
          + Add Transaction
        </button>
      )}

      {showModal && (
        <TransactionModal
          onClose={() => setShowModal(false)}
          onSave={(data) => {
            if (editData) {
              setTransactions((prev) =>
                prev.map((tx) =>
                  tx.id === editData.id ? { ...data, id: tx.id } : tx
                )
              );
            } else {
              setTransactions((prev) => [
                ...prev,
                { ...data, id: Date.now() },
              ]);
            }
          }}
          editData={editData}
        />
      )}

      <TransactionFilter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
      />

      <button
        onClick={() => setSortAsc(!sortAsc)}
        className="mb-4 px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white"
      >
        Sort by Amount {sortAsc ? "↑" : "↓"}
      </button>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto   ">
          <thead>
            <tr className="text-white gray-300 border-b border-white/10 text-left ">
              <th className="p-3 ">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              {role === "admin"&& <th className="p-3">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((tx) => (
              <TransactionRow
                key={tx.id}
                tx={tx}
                role={role}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};