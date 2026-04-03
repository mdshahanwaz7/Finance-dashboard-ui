import { useState, useEffect } from "react";

export const TransactionModal = ({ onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

 
  useEffect(() => {
    if (editData) {
      setForm({
        date: editData.date || "",
        amount: editData.amount || "",
        category: editData.category || "",
        type: editData.type || "expense",
      });
    }
  }, [editData]);

 
  const handleSubmit = () => {
   
    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    onSave({
      ...form,
      amount: Number(form.amount), 
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">

        <h2 className="mb-4 text-lg font-bold text-gray-800">
          {editData ? "Edit" : "Add"} Transaction
        </h2>

        
        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="w-full mb-2 border p-2 rounded"
        />

       
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="w-full mb-2 border p-2 rounded"
        />

       
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full mb-2 border p-2 rounded"
        />

      
        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="w-full mb-4 border p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="text-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};