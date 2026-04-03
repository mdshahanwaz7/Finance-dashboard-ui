// import Header from "../components/Dashboard/Header";
import { Timecharts } from "../components/charts/Timecharts";
import { TransactionTable } from "../components/transactions/Transactiontables";
import { CategoryCharts } from "../components/charts/CategoryCharts";
import { Summarycards } from "../components/dashboard/summarycards";
import { Insights } from "../components/Insights/Insights";
// import Insights from "../components/Dashboard/Insights";

export function Home({ transactions,setTransactions }) {
    return (
        <div className="min-h-screen    ">
            <div className=" absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 text-center  ">
                <h1 className="text-amber-50 text-3xl "> Finannce <span className="font-thin text-2xl">Dashboard UI</span></h1>

                <Summarycards transactions={transactions} />
            </div>

            



                


                <Timecharts transactions={transactions}/>
                <CategoryCharts transactions={transactions} />
                <TransactionTable
  transactions={transactions}
  setTransactions={setTransactions}
/>
               
                <Insights transactions={transactions} />
               

            

        </div>

    );
}
