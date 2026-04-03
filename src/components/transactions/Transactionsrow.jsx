export const TransactionRow = ({ tx, role, onDelete, onEdit }) => {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5 text-left">

      <td className="p-3 whitespace-nowrap text-xs md:text-sm text-white">
        {tx.date}
      </td>

      <td className="p-3 whitespace-nowrap text-xs md:text-sm text-white">
        ${tx.amount}
      </td>

      <td className="p-3 whitespace-nowrap text-xs md:text-sm text-gray-300">
        {tx.category}
      </td>

      <td className="p-3 whitespace-nowrap text-xs md:text-sm">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            tx.type === "income"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {tx.type}
        </span>
      </td>

      {role === "admin" && (
        <td className="p-3 whitespace-nowrap">
         
          <div className="flex items-center gap-3">
            <button
              onClick={() => onEdit(tx)}
              className="text-blue-400 whitespace-nowrap"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(tx.id)}
              className="text-red-400 whitespace-nowrap"
            >
              Delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};