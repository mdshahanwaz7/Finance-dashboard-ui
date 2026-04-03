import { TransactionTable } from "../components/transactions/Transactiontables";

export const Transactions = ({ transactions, setTransactions }) => {
  return (
    <>
      <h1 className="text-white text-3xl  mx-auto">Transactions</h1>

      <TransactionTable 
      transactions={transactions}
      setTransactions={setTransactions}
      />
    </>
  );
};