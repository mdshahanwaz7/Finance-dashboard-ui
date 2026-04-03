import React , {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layouts";
import { Home } from "./pages/home";
import { InsightsPage } from "./pages/Insights";
import { Transactions } from "./pages/Transaction";
import './index.css'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([ { id: 1, date: "2024-01-01", amount: 4000, category: "Salary", type: "income" },
    { id: 2, date: "2024-01-02", amount: 200, category: "Food", type: "expense" },
    { id: 3, date: "2024-01-03", amount: 600, category: "Shopping", type: "expense" },]);
  return (
    <Layout  >
      <Routes>
        <Route  path="/" element={<Home transactions={transactions}
        setTransactions={setTransactions}/>} />
        
      
      
      <Route
  path="/transactions"
  element={
    <Transactions
      transactions={transactions}
      setTransactions={setTransactions}
    />
  }
/>
<Route path="/Insights"
 element={<InsightsPage transactions={transactions}/>}/>

 
</Routes>
    </Layout>
  );
}

export default App;
